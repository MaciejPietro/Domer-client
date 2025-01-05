import React from "react";

import {
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Filter from "@/common/components/table/Filter";
import Pagination from "@/common/components/table/Pagination";
import { Table } from "@mantine/core";

// declare module '@tanstack/react-table' {
//   //allows us to define custom properties for our columns
//   interface ColumnMeta<TData extends RowData, TValue> {
//     filterVariant?: 'text' | 'range' | 'select'
//   }
// }

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

type Project = any;

export default function ProjectsTable() {
  const rerender = React.useReducer(() => ({}), {})[1];

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const columns = React.useMemo<Array<ColumnDef<Project, any>>>(
    () => [
      {
        header: () => <span>Nazwa</span>,
        accessorKey: "name",
        cell: (cell: any) => cell.getValue() as string,
      },
      //   {
      //     accessorFn: (row) => row.lastName,
      //     id: "lastName",
      //     cell: (info) => info.getValue(),
      //     header: () => <span>Last Name</span>,
      //   },
      //   {
      //     accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      //     id: "fullName",
      //     header: "Full Name",
      //     cell: (info) => info.getValue(),
      //   },
      //   {
      //     accessorKey: "age",
      //     header: () => "Age",
      //     meta: {
      //       filterVariant: "range",
      //     },
      //   },
      //   {
      //     accessorKey: "visits",
      //     header: () => <span>Visits</span>,
      //     meta: {
      //       filterVariant: "range",
      //     },
      //   },
      //   {
      //     accessorKey: "status",
      //     header: "Status",
      //     meta: {
      //       filterVariant: "select",
      //     },
      //   },
      //   {
      //     accessorKey: "progress",
      //     header: "Profile Progress",
      //     meta: {
      //       filterVariant: "range",
      //     },
      //   },
    ],
    []
  );

  const [data, setData] = React.useState<Array<Project>>(() => []);

  const refreshData = () => {
    setData(() => [
      {
        name: "elo",
      },
    ]);
  }; //stress test

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <>
      <Table stickyHeader stickyHeaderOffset={60}>
        <Table.Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.Th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
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
                    <Table.Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Td>
                  );
                })}
              </Table.Tr>
            );
          })}
        </Table.Tbody>
        <div>
          <Pagination table={table} />
        </div>
      </Table>
      <div className="text-xs mt-10 space-y-5">
        <div>
          <button
            onClick={() => {
              rerender();
            }}
          >
            Force Rerender
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              refreshData();
            }}
          >
            Refresh Data
          </button>
        </div>
        <pre>
          {JSON.stringify(
            { columnFilters: table.getState().columnFilters },
            null,
            2
          )}
        </pre>
      </div>
    </>
  );
}
