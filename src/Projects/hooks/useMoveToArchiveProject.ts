import useUpdateProject from "@/Projects/hooks/useUpdateProject";
import { ProjectStatus } from "../types/api";

const useMoveToArchiveProject = (projectId: string) => {
  const { mutateAsync } = useUpdateProject({ projectId });

  const moveToArchive = async () => {
    await mutateAsync({ status: ProjectStatus.Archived });
  };

  return { moveToArchive };
};

export default useMoveToArchiveProject;
