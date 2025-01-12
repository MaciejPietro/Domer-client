import Stats from "@/Projects/components/Project/elements/Stats";
import StatusBadge from "@/Projects/components/Project/partials/StatusBadge";
import type { Project } from "@/Projects/types/mixed";
import { Title, Text, Space } from "@mantine/core";
import Gallery from "@/Projects/components/Project/elements/Gallery";
import ProjectMenu from "@/Projects/components/Project/ProjectMenu";
import Links from "@/Projects/components/Project/elements/Links";

type ComponentProps = {
  data: Project;
};

const ProjectDetails = ({ data }: ComponentProps) => {
  return (
    <div className="px-6 pt-12 max-w-7xl">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <Title order={1} size="h2">
              {data.name}
            </Title>
            <StatusBadge status={data.status} projectId={data.id} />

            {data.description && (
              <div className="pt-3">
                <Text size="sm">{data.description}</Text>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <ProjectMenu data={data} />
          </div>
        </div>

        <div className="mt-10  grid grid-cols-2 gap-12 ">
          <div>
            <Stats data={data} />

            <Space h="xl" />

            <Links data={data} />
          </div>

          <div>
            <Gallery />
          </div>
        </div>

        {/* <Steps /> */}
      </div>
    </div>
  );
};

export default ProjectDetails;
