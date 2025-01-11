import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import {
  Alert,
  Card,
  Group,
  List,
  NumberFormatter,
  RingProgress,
  Text,
  useMantineTheme,
} from "@mantine/core";

const stats = [
  { value: 40000, label: "Budżet" },
  { value: 44000, label: "Wydano" },
  { value: -4000, label: "Pozostało" },
];

export default function PlanningStats() {
  return (
    <div>
      <Card radius="md" className="bg-black !px-8">
        <div className="flex flex-col xs:flex-row">
          <div>
            {/* <Text className="font-bold text-[22px] leading-none font-greycliff mt-[30px]">
            1887
          </Text>
          <Text fz="xs" c="dimmed">
            Completed
          </Text> */}
          </div>
          <div className="flex gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <Text className="font-bold leading-none font-greycliff">
                  <NumberFormatter
                    value={stat.value}
                    thousandSeparator=" "
                    suffix=" zł"
                  />
                </Text>
                <Text size="xs" c="dimmed">
                  {stat.label}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex flex-1 justify-center xs:justify-end mt-[var(--mantine-spacing-md)] xs:mt-0">
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[
              { value: (completed / total) * 100, color: theme.primaryColor },
            ]}
            label={
              <div>
                <Text
                  ta="center"
                  fz="lg"
                  className="font-bold leading-none font-greycliff"
                >
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Completed
                </Text>
              </div>
            }
          />
        </div> */}
      </Card>
    </div>
  );
}
