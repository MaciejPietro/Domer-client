import type { ApiResultResponse } from "@/common/api/types";
import Service from "@/Projects/api/Service";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { GetProjectPayload } from "@/Projects/types/api";
import type { Project } from "@/Projects/types/mixed";

const useProject = ({ projectId }: GetProjectPayload) => {
  return useQuery<
    ApiResultResponse<Project>,
    AxiosError<string, any>,
    ApiResultResponse<Project>
  >({
    queryKey: ["project", projectId],
    queryFn: () => Service.getSingle(projectId),
  });
};

export default useProject;
