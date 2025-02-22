import { useEffect, useMemo, useReducer, useState } from "react";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Pagination from "@/common/components/table/Pagination";
import { Button, Table } from "@mantine/core";
import { PROJECTS_PER_PAGE } from "@/Projects/constants";
import useProjects from "@/Projects/hooks/useProjects";
import { Link } from "@tanstack/react-router";
import StatusBadge from "../Project/partials/StatusBadge";
import type { PageFilter, ProjectStatus } from "@/Projects/types/api";
import type { TabOption } from "./ProjectsListTabs";

type Project = any;

type PageState = {
  page: PageFilter;
  types: Array<ProjectStatus>;
};

type Action =
  | { type: "SET_PAGE"; payload: PageFilter }
  | { type: "SET_TYPES"; payload: Array<ProjectStatus> };

function stateReducer(state: PageState, action: Action): PageState {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };

    case "SET_TYPES":
      return { ...state, types: action.payload };

    default:
      return state;
  }
}

type ComponentProps = {
  tab: TabOption;
};

export default function ProjectsList({ tab }: ComponentProps) {
  const [state, dispatch] = useReducer(stateReducer, {
    page: { pageIndex: 1, pageSize: PROJECTS_PER_PAGE },
    types: tab.statuses,
  });

  const { data } = useProjects(state);

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columns = useMemo<Array<ColumnDef<Project, any>>>(
    () => [
      {
        header: () => <span>Nazwa</span>,
        accessorKey: "name",
        cell: (cell: any) => (
          <span className="font-semibold">{cell.getValue()}</span>
        ),
        size: 500,
      },
      {
        header: () => <span>Status</span>,
        accessorKey: "status",
        cell: (cell: any) => (
          <StatusBadge size="xs" status={cell.getValue()} withoutForm />
        ),
        size: 180,
      },
      {
        header: () => <span>Utworzono</span>,
        accessorKey: "createdAt",
        cell: (cell: any) =>
          new Date(cell.getValue() as string).toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        size: 180,
      },
      {
        header: () => <span>Zmodyfikowano</span>,
        accessorKey: "updatedAt",
        cell: (cell: any) =>
          new Date(cell.getValue() as string).toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        size: 180,
      },
    ],
    []
  );

  const table = useReactTable({
    data: data ? data.data.results : [],
    columns,
    filterFns: {},
    state: {
      columnFilters,
      pagination: {
        pageIndex: state.page.pageIndex,
        pageSize: PROJECTS_PER_PAGE,
      },
    },
    manualPagination: true,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        const newPagination = updater({
          pageIndex: state.page.pageIndex,
          pageSize: PROJECTS_PER_PAGE,
        });
        dispatch({ type: "SET_PAGE", payload: newPagination });
      }
    },
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  const pages = data?.data.totalPages;

  useEffect(() => {
    dispatch({ type: "SET_TYPES", payload: tab.statuses });
  }, [tab]);

  return (
    <>
      <Table
        verticalSpacing="sm"
        striped
        highlightOnHover
        horizontalSpacing="xl"
      >
        <Table.Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.Th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          className="text-gray-600 font-medium"
                          // {...{
                          //   className: header.column.getCanSort()
                          //     ? "cursor-pointer select-none"
                          //     : "",
                          //   onClick: header.column.getToggleSortingHandler(),
                          // }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {/* {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null} */}
                        </div>
                        {/* {header.column.getCanFilter() ? (
                          <Filter column={header.column} />
                        ) : null} */}
                      </>
                    )}
                  </Table.Th>
                );
              })}
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Table.Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Table.Td
                      key={cell.id}
                      width={cell.column.getSize()}
                      className="py-2 font-normal"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Td>
                  );
                })}
                <Table.Td width={120} key="actions">
                  <div className="flex justify-end">
                    <Link to={`/projects/${row.original.id}`}>
                      <Button variant="subtle">Zobacz</Button>
                    </Link>
                  </div>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
      <div className="mt-10 px-6">
        <Pagination table={table} pages={pages} />
      </div>
      {/* <div className="text-xs mt-10 space-y-5">
        <pre>
          {JSON.stringify(
            { columnFilters: table.getState().columnFilters },
            null,
            2
          )}
        </pre>
      </div> */}
    </>
  );
}
