import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toastSuccess } from "@/common/lib/toast";
import type { ApiResponseCommand } from "@/common/api/types";
import Service from "@/Projects/api/Service";
import type { UpdateProjectPayload } from "@/Projects/types/api";

const useUpdateProject = ({ projectId }: { projectId: string }) => {
  const queryClient = useQueryClient();

  return useMutation<
    ApiResponseCommand,
    AxiosError<string, any>,
    UpdateProjectPayload
  >({
    mutationKey: ["project", "update"],
    mutationFn: (values) => Service.updateProject(projectId, values),
    onSuccess: () => {
      toastSuccess("Projekt został zaktualizowany");

      void queryClient.invalidateQueries({ queryKey: ["project", projectId] });
    },
  });
};

export default useUpdateProject;
