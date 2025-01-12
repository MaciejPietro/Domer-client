import type { Project } from "@/Projects/types/mixed";
import { Anchor, Table, Title, Tooltip } from "@mantine/core";
import { ClipboardDocumentIcon, LinkIcon } from "@heroicons/react/24/outline";
import { prettifyUrl } from "@/common/components/utils/url";
import { useCopyToClipboard } from "usehooks-ts";
import { toastSuccess } from "@/common/lib/toast";

type ComponentProps = {
  data: Project;
};

const Links = ({ data }: ComponentProps) => {
  // TODO handle this globally
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        toastSuccess("Skopiowano link do schowka");
      })
      .catch(() => {
        toastSuccess("Nie udało się skopiować linku do schowka");
      });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <Title order={6} className="mt-6 flex gap-2 items-center">
        <LinkIcon className="size-4" />
        Linki
      </Title>
      <Table variant="vertical" layout="fixed" className="mt-2">
        <Table.Tbody>
          {!data.details.urls.length ? (
            <Table.Tr>
              <Table.Td colSpan={2}>
                <i className="text-gray-500">Brak linków</i>
              </Table.Td>
            </Table.Tr>
          ) : null}

          {data.details.urls.map((link) => (
            <Table.Tr key={link.name}>
              <Table.Th className="font-semibold" w={160}>
                {link.name}
              </Table.Th>
              <Table.Td>
                <div className="flex items-center gap-3 justify-between">
                  <Anchor
                    href={link.url}
                    target="_blank"
                    underline="always"
                    size="sm"
                    className="truncate"
                  >
                    {prettifyUrl(link.url)}
                  </Anchor>

                  <Tooltip label="Skopiuj link">
                    <button
                      onClick={handleCopy(link.url)}
                      className="flex items-center p-1 bg-white border border-gray-200 rounded"
                    >
                      <ClipboardDocumentIcon className="size-4" />
                    </button>
                  </Tooltip>
                </div>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default Links;
