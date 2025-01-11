import {
  Button,
  ScrollArea,
  Center,
  SegmentedControl,
  Switch,
  Alert,
} from "@mantine/core";
import {
  CloudIcon,
  EllipsisHorizontalIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  EyeDropperIcon,
  MoonIcon,
  PlusIcon,
  ShoppingBagIcon,
  WindowIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { PlanningItem } from "./PlanningItem";
import PlanningStats from "./PlanningStats";
import { useState } from "react";

export default function Planning() {
  const mockdata = [
    { title: "Wszystkie", icon: ShoppingBagIcon },
    { title: "Kuchnia", icon: WindowIcon },
    { title: "Łazienka", icon: EyeDropperIcon },
    { title: "Sypialnia", icon: MoonIcon },
    { title: "Ogród", icon: CloudIcon },
    { title: "Pozostałe", icon: EllipsisHorizontalIcon },
  ];

  const planningItems = [
    {
      title: "Lodówka Hisense RF632N4WFE1",
      description: "Fajna lodówka ale trochę droga",
      location: "Kuchnia",
      features: [
        { label: "Chłodziarka 20l" },
        { label: "Lodówka 100l" },
        { label: "Klasa energetyczna A++" },
      ],
      price: 2500,
    },
    {
      title: "Płytki łazienkowe Paradyż",
      description: "Kolekcja Minimal",
      location: "Łazienka",
      features: [
        { label: "Wymiar 60x60" },
        { label: "Kolor szary" },
        { label: "Matowe wykończenie" },
      ],
      price: 1200,
    },
    {
      title: "Łóżko kontynentalne",
      description: "Z pojemnikiem na pościel",
      location: "Sypialnia",
      features: [
        { label: "Wymiar 160x200" },
        { label: "Materiał welur" },
        { label: "Pojemnik na pościel" },
      ],
      price: 3500,
    },
    {
      title: "Zestaw mebli kuchennych",
      description: "Szafki górne i dolne",
      location: "Kuchnia",
      features: [
        { label: "Długość 3.6m" },
        { label: "Kolor biały połysk" },
        { label: "Blat dębowy" },
      ],
      price: 8900,
    },
  ];

  const [showDemo, setShowDemo] = useState(false);

  return (
    <ScrollArea>
      <div className="relative pb-1.5">
        {!showDemo && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <WrenchScrewdriverIcon className="size-8 text-blue-400" />
              <p className="text-xl text-blue-400 mb-4">
                Funkcja dostępna wkrótce
              </p>

              <Switch
                label="Pokaż demo"
                checked={showDemo}
                onChange={(e) => {
                  setShowDemo(e.target.checked);
                }}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <SegmentedControl
            data={mockdata.map((item) => ({
              value: item.title.toLowerCase(),
              label: (
                <Center style={{ gap: 10 }}>
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </Center>
              ),
            }))}
          />

          <div className="flex gap-2 flex-col">
            <Switch label="Tylko ulubione" />
            <Switch label="Tylko kupione" />
          </div>
        </div>

        {/* <div className="mt-4 flex items-center gap-4">
          <PlanningStats />

          <div>
            <Alert
              variant="light"
              color="red"
              icon={<ExclamationCircleIcon className="size-4 ml-1.5" />}
              className="!p-2"
            >
              <span className="text-xs text-red-500 font-medium">
                Budżet został przekroczony
              </span>
            </Alert>
          </div>
        </div> */}

        <div className="grid grid-cols-3 col-span-4 gap-4 mt-6">
          {planningItems.map((item, index) => (
            <PlanningItem
              key={index}
              title={item.title}
              description={item.description}
              location={item.location}
              features={item.features}
              price={item.price}
            />
          ))}
        </div>

        <div className="mt-10">
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
      </div>
    </ScrollArea>
  );
}
