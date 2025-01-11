import { useMemo, useState } from "react";
import { FinansesMenu } from "./finanses/FinansesMenu";
import FinansesList from "./finanses/FinansesList";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Budget } from "./finanses/Budget";
import Planning from "./finanses/Planning";

const ProjectFinanses = () => {
  const [active, setActive] = useState(2);

  const links = useMemo(() => {
    return [
      {
        label: "Budżet",
        component: Budget,
        order: 1,
        icon: <CurrencyDollarIcon className="size-4" />,
      },
      { label: "Faktury", component: FinansesList, order: 1 },
      { label: "Planowanie", component: Planning, order: 1 },
    ];
  }, []);

  const Component = links[active]!.component;
  const label = links[active]!.label;
  return (
    <div className="grid grid-cols-6 h-full">
      <FinansesMenu setActive={setActive} active={active} links={links} />
      <div className="col-span-5 bg-gray-50 h-full p-6">
        <Component label={label} />
      </div>
    </div>
  );
};

export default ProjectFinanses;
