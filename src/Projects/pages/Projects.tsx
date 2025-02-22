import { useState } from "react";
import Main from "@/common/components/layout/Main";
import ProjectsList from "@/Projects/components/List/ProjectsList";
import ProjectsListTabs, {
  tabs,
  type TabOption,
} from "../components/List/ProjectsListTabs";

export default function Projects() {
  const [tab, setTab] = useState<TabOption>(tabs[0]!);

  return (
    <Main withoutPadding>
      <ProjectsListTabs setTab={setTab} tab={tab} />
      <div className="py-6">
        <ProjectsList tab={tab} />
      </div>
    </Main>
  );
}
