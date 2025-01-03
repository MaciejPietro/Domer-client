import { useState } from "react";
import { Table, Checkbox, Button } from "@mantine/core";
import Main from "@/common/components/layout/Main";
import clsx from "clsx";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const tabs = [{ name: "Wszystkie", href: "#", count: "2" }];

const Tabs = ({ setTab, tab }: any) => {
  return (
    <div className="hidden sm:block">
      <div className="lg:px-8  border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map(({ name, count }) => (
            <button
              key={name}
              className={clsx(
                name === tab
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                "flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
              )}
              onClick={() => {
                setTab(name);
              }}
            >
              {name}
              {count ? (
                <span
                  className={clsx(
                    name === tab
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-100 text-gray-900",
                    "ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
                  )}
                >
                  {count}
                </span>
              ) : null}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default function Projects() {
  const [tab, setTab] = useState<any>("Wszystkie");

  const [selectedRows, setSelectedRows] = useState<Array<number>>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={
        selectedRows.includes(element.position)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) => {
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter(
                    (position) => position !== element.position
                  )
            );
          }}
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td>
        <Button>Zobacz</Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Main>
      <Tabs setTab={setTab} tab={tab} />
      <div className="mt-10">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th />
              <Table.Th>Nazwa</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Data utworzenia</Table.Th>
              <Table.Th>Data zakończenia</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </Main>
  );
}
