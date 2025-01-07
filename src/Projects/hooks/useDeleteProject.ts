import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import ProjectService from "@/Projects/api/Service";
import type { ApiResponse } from "@/common/api/types";
import type { DeleteProjectPayload } from "@/Projects/types/api";
import { toastSuccess } from "@/common/lib/toast";
import { useNavigate } from "@tanstack/react-router";

const useDeleteProject = () => {
  const navigate = useNavigate();

  return useMutation<
    ApiResponse,
    AxiosError<string, any>,
    DeleteProjectPayload
  >({
    mutationKey: ["projects", "delete"],
    mutationFn: (payload: DeleteProjectPayload) =>
      ProjectService.deleteProject(payload.projectId),
    onSuccess: () => {
      toastSuccess("Projekt został usunięty");

      queueMicrotask(() => {
        void navigate({ to: "/projects" });
      });
    },
  });
};

export default useDeleteProject;
