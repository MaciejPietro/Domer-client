import type { ApiResponse } from "@/common/api/types";
import Service from "@/Projects/api/Service";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

const useProjects = () => {
  return useQuery<ApiResponse, AxiosError<string, any>, any>({
    queryKey: ["projects", "all"],
    queryFn: Service.getAll,
  });
};

export default useProjects;
