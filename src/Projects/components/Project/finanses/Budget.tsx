import {
  Badge,
  Card,
  Group,
  NumberFormatter,
  Paper,
  Slider,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  BuildingLibraryIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

import { PieChart } from "@mantine/charts";
import { useState } from "react";

export function Budget() {
  const [ownFunds, setOwnFunds] = useState(33);
  const [spentFunds, setSpentFunds] = useState(0);
  const creditFunds = 100 - ownFunds - spentFunds;

  const totalBudget = 900000;
  const ownAmount = (totalBudget * ownFunds) / 100;
  const creditAmount = (totalBudget * creditFunds) / 100;
  const spentAmount = (totalBudget * spentFunds) / 100;

  const handleSliderChange = (type: "own" | "spent", value: number) => {
    if (type === "own") {
      setOwnFunds(Math.min(value, 100 - spentFunds));
    } else if (type === "spent") {
      setSpentFunds(Math.min(value, 100 - ownFunds));
    }
  };

  return (
    <div className="">
      <Card radius="md" padding="xl" bg="var(--mantine-color-body)">
        <div className="flex justify-between">
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              Całkowity koszt budowy
            </Text>
            <Text fz="lg" fw={500}>
              900 000 zł
            </Text>
          </div>

          <div className=" flex justify-center items-center">
            <Group gap={50}>
              <div>
                <PieChart
                  size={100}
                  data={[
                    { name: "Środki własne", value: ownFunds, color: "blue" },
                    {
                      name: "Środki z kredytu",
                      value: creditFunds,
                      color: "red",
                    },
                    { name: "Wydano", value: spentFunds, color: "green" },
                  ]}
                  tooltipDataSource="segment"
                  mx="auto"
                  labelsType="percent"
                />
              </div>
            </Group>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-3">
        <Paper radius="md" className="relative overflow-visible p-8 pt-16 mt-5">
          <ThemeIcon
            className="absolute -top-5 left-[calc(50%-30px)]"
            size={60}
            radius={60}
          >
            <CreditCardIcon className="size-4" />
          </ThemeIcon>

          <Text ta="center" fw={700} className="leading-none">
            Budżet
          </Text>
          <Text c="dimmed" ta="center" fz="sm">
            {ownAmount.toLocaleString()} zł
          </Text>

          <Group justify="space-between" mt="xs">
            <Text fz="sm" c="dimmed">
              Środki własne
            </Text>
            <Text fz="sm" c="dimmed">
              {Math.round(ownFunds)}%
            </Text>
          </Group>

          <Slider
            value={ownFunds}
            onChange={(value) => {
              handleSliderChange("own", value);
            }}
            label={null}
            max={100 - spentFunds}
            step={0.01}
          />
        </Paper>

        <Paper radius="md" className="relative overflow-visible p-8 pt-16 mt-5">
          <ThemeIcon
            className="absolute -top-5 left-[calc(50%-30px)]"
            size={60}
            radius={60}
            color="green"
          >
            <CreditCardIcon className="size-4" />
          </ThemeIcon>

          <Text ta="center" fw={700} className="leading-none">
            Wydano
          </Text>
          <Text c="dimmed" ta="center" fz="sm">
            {spentAmount.toLocaleString()} zł
          </Text>

          <Group justify="space-between" mt="xs">
            <Text fz="sm" c="dimmed">
              Środki wydane
            </Text>
            <Text fz="sm" c="dimmed">
              {Math.round(spentFunds)}%
            </Text>
          </Group>

          <Slider
            value={spentFunds}
            onChange={(value) => {
              handleSliderChange("spent", value);
            }}
            label={null}
            color="green"
            max={100}
            step={0.01}
          />
        </Paper>

        <Paper radius="md" className="relative overflow-visible p-8 pt-16 mt-5">
          <ThemeIcon
            className="absolute -top-5 left-[calc(50%-30px)]"
            size={60}
            radius={60}
            color="red"
          >
            <BuildingLibraryIcon className="size-4" />
          </ThemeIcon>

          <Text ta="center" fw={700} className="leading-none">
            Kredyt
          </Text>
          <Text c="dimmed" ta="center" fz="sm">
            {creditAmount.toLocaleString()} zł
          </Text>

          <Group justify="space-between" mt="xs">
            <Text fz="sm" c="dimmed">
              Środki z kredytu
            </Text>
            <Text fz="sm" c="dimmed">
              {Math.round(creditFunds)}%
            </Text>
          </Group>

          <Slider value={creditFunds} disabled label={null} color="red" />

          <Group mt="md">
            <Badge size="sm" color="lightgray">
              <NumberFormatter
                value={Math.round(creditAmount * 0.009)}
                prefix="Rata: ~"
                suffix=" zł"
              />
            </Badge>
          </Group>
        </Paper>
      </div>
    </div>
  );
}
