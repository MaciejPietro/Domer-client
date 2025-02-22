import { projectTypeDict } from "@/Projects/dicts";
import type { Project } from "@/Projects/types/mixed";
import { Space, Table, Title } from "@mantine/core";
import { InformationCircleIcon, WrenchIcon } from "@heroicons/react/24/outline";

type ComponentProps = {
  data: Project;
};

const Stats = ({ data }: ComponentProps) => {
  const stats = [{ name: "Typ projektu", value: projectTypeDict[data.type] }];

  const technicalStats = [
    { name: "Pow. użytkowa", value: data.details.usableArea, unit: "m2" },
    { name: "Pow. zabudowy", value: data.details.buildingArea, unit: "m2" },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <Title order={6} className="mt-6 flex gap-2 items-center">
        <InformationCircleIcon className="size-4" />
        Dane ogólne
      </Title>
      <Table variant="vertical" layout="fixed" className="mt-2">
        <Table.Tbody>
          {stats.map((stat) => (
            <Table.Tr key={stat.name}>
              <Table.Th className="font-semibold" w={160}>
                {stat.name}
              </Table.Th>
              <Table.Td>{stat.value}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Space h="xl" />

      <Title order={6} className="mt-6 flex gap-2 items-center">
        <WrenchIcon className="size-4" />
        Dane techniczne
      </Title>

      <Table className="mt-2">
        <Table.Tbody>
          {technicalStats.map((stat) => (
            <Table.Tr key={stat.name}>
              <Table.Th className="font-semibold" w={160}>
                {stat.name}
              </Table.Th>
              <Table.Td>
                {stat.value} {stat.unit}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default Stats;
