import cx from "clsx";
import {
  Badge,
  Button,
  Group,
  NumberFormatter,
  ScrollArea,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  DocumentMagnifyingGlassIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const data = [
  {
    id: "1",
    name: "Fundamenty",
    kontrahent: "Marek Kowalski",
    amount: 50_000,
    status: "Zapłacone",
  },
  {
    id: "2",
    name: "Ściany",
    kontrahent: "Marek Kowalski",
    amount: 30_000,
    status: "Niezapłacone",
  },
  {
    id: "3",
    name: "Strop",
    kontrahent: "Dawid Nowak",
    amount: 25_000,
    status: "Niezapłacone",
  },
  {
    id: "4",
    name: "Dach",
    kontrahent: "Dawid Nowak",
    amount: 87_000,
    status: "Zlecone",
  },
  {
    id: "5",
    name: "Stolarka okienna",
    kontrahent: "Fakro",
    amount: 33_000,
    status: "Zaplanowane",
  },
];

const statusColorMap: Record<string, string> = {
  Zapłacone: "green",
  Niezapłacone: "red",
  Zlecone: "yellow",
  Zaplanowane: "gray",
};

export default function FinansesList() {
  //   const [selection, setSelection] = useState<Array<string>>([]);

  //   const toggleRow = (id: string) => {
  //     setSelection((current) =>
  //       current.includes(id)
  //         ? current.filter((item) => item !== id)
  //         : [...current, id]
  //     );
  //   };
  //   const toggleAll = () => {
  //     setSelection((current) =>
  //       current.length === data.length ? [] : data.map((item) => item.id)
  //     );
  //   };

  const rows = data.map((item) => {
    // const selected = selection.includes(item.id);
    return (
      <Table.Tr key={item.id} className={cx({ "bg-gray-100": false })}>
        {/* <Table.Td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => {
              toggleRow(item.id);
            }}
          />
        </Table.Td> */}
        <Table.Td>
          <Group gap="sm">
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </Table.Td>

        <Table.Td>{item.kontrahent}</Table.Td>

        <Table.Td>
          <NumberFormatter
            suffix="zł "
            value={item.amount}
            thousandSeparator=" "
          />
        </Table.Td>

        <Table.Td>
          <Badge color={statusColorMap[item.status] || "gray"}>
            {item.status}
          </Badge>
        </Table.Td>
        <Table.Td w={40}>
          <div className="flex gap-1">
            <Tooltip label="Dodaj plik">
              <Button
                variant="subtle"
                size="xs"
                color="green"
                onClick={() => {}}
                className="!px-2 mb-2"
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </Tooltip>

            <Tooltip label="Zobacz pliki">
              <Button
                variant="subtle"
                size="xs"
                color="blue"
                onClick={() => {}}
                className="!px-2 mb-2"
              >
                <DocumentMagnifyingGlassIcon className="w-4 h-4" />
              </Button>
            </Tooltip>

            <Tooltip label="Edytuj">
              <Button
                variant="subtle"
                size="xs"
                color="gray"
                onClick={() => {}}
                className="!px-2 mb-2"
              >
                <PencilIcon className="w-4 h-4" />
              </Button>
            </Tooltip>

            <Tooltip label="Usuń">
              <Button
                variant="subtle"
                size="xs"
                color="red"
                onClick={() => {}}
                className="!px-2 mb-2"
              >
                <TrashIcon className="w-4 h-4" />
              </Button>
            </Tooltip>
          </div>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            {/* <Table.Th w={40}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={
                  selection.length > 0 && selection.length !== data.length
                }
              />
            </Table.Th> */}
            <Table.Th>Nazwa</Table.Th>
            <Table.Th>Kontrahent</Table.Th>
            <Table.Th>Kwota</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows}
          <Table.Tr>
            <Table.Td></Table.Td>
            <Table.Td></Table.Td>
            <Table.Td>
              <NumberFormatter
                suffix="zł "
                value={data.reduce((acc, item) => acc + item.amount, 0)}
                thousandSeparator=" "
              />
            </Table.Td>
            <Table.Td></Table.Td>
            <Table.Td></Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>

      <div className="relative pb-1.5">
        <Button
          variant="subtle"
          size="xs"
          color="blue"
          leftSection={<PlusIcon className="w-4 h-4" />}
          onClick={() => {}}
        >
          Dodaj kolejny
        </Button>
      </div>
    </ScrollArea>
  );
}
