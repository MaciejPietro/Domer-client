import React, { useMemo, useReducer, useState } from "react";

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
import useProjects from "../hooks/useProjects";
import { PROJECTS_PER_PAGE } from "../constants";
import type { PageFilter } from "../types/api";
import { Link } from "@tanstack/react-router";

// declare module '@tanstack/react-table' {
//   //allows us to define custom properties for our columns
//   interface ColumnMeta<TData extends RowData, TValue> {
//     filterVariant?: 'text' | 'range' | 'select'
//   }
// }

type Project = any;

type PageState = {
  page: PageFilter;
};

type PageAction = { type: "SET_PAGE"; payload: PageFilter };

function stateReducer(state: PageState, action: PageAction): PageState {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };

    default:
      return state;
  }
}

export default function ProjectsList() {
  const [state, dispatch] = useReducer(stateReducer, {
    page: { pageIndex: 1, pageSize: PROJECTS_PER_PAGE },
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
      },
      {
        header: () => <span>Powierzchnia zabudowy</span>,
        accessorKey: "buildingArea",
        cell: (cell: any) =>
          cell.getValue() ? (
            <span>
              {cell.getValue()} m<sup>2</sup>
            </span>
          ) : (
            <span></span>
          ),
      },
      {
        header: () => <span>Powierzchnia użytkowa</span>,
        accessorKey: "usableArea",
        cell: (cell: any) =>
          cell.getValue() ? (
            <span>
              {cell.getValue()} m<sup>2</sup>
            </span>
          ) : (
            <span></span>
          ),
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
      },
      //   {
      //     accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      //     header: "Status",
      //     meta: {
      //       filterVariant: "select",
      //     },
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
                    <Table.Td key={cell.id} className="py-2 font-normal">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Td>
                  );
                })}
                <Table.Td key="actions">
                  <Link to={`/projects/${row.original.id}`}>
                    <Button variant="subtle">Zobacz</Button>
                  </Link>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
        <div className="mt-10 px-6">
          <Pagination table={table} pages={pages} />
        </div>
      </Table>
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
