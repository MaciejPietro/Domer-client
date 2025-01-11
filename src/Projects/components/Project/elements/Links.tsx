import { projectStatusDict, projectTypeDict } from "@/Projects/dicts";
import type { Project } from "@/Projects/types/mixed";
import { Anchor, Space, Table, Title } from "@mantine/core";
import {
  InformationCircleIcon,
  LinkIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

type ComponentProps = {
  data: Project;
};

const Links = ({ data }: ComponentProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <Title order={6} className="mt-6 flex gap-2 items-center">
        <LinkIcon className="size-4" />
        Linki
      </Title>
      <Table variant="vertical" layout="fixed" className="mt-2">
        <Table.Tbody>
          {data.details.urls.map((link) => (
            <Table.Tr key={link.name}>
              <Table.Th className="font-semibold" w={160}>
                {link.name}
              </Table.Th>
              <Table.Td>
                <Anchor
                  href={link.url}
                  target="_blank"
                  underline="always"
                  size="sm"
                >
                  <div className="flex items-center gap-1">
                    <LinkIcon className="size-4" />
                    {link.url}
                  </div>
                </Anchor>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default Links;
