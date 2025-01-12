import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toastSuccess } from "@/common/lib/toast";
import type { ApiResponseCommand } from "@/common/api/types";
import Service from "@/Projects/api/Service";
import type { CreateProjectPayload } from "@/Projects/types/api";

const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ApiResponseCommand,
    AxiosError<string, any>,
    CreateProjectPayload
  >({
    mutationKey: ["project", "create"],
    mutationFn: (values) => Service.createProject(values),
    onSuccess: (response) => {
      if (response.data.isSuccess) {
        toastSuccess("Projekt został utworzony");

        void queryClient.invalidateQueries({ queryKey: ["projects"] });
      }
    },
  });
};

export default useCreateProject;
