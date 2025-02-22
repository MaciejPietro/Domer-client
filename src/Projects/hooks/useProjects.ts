import type { ApiResponse } from "@/common/api/types";
import Service from "@/Projects/api/Service";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { GetAllProjectsPayload } from "@/Projects/types/api";

const useProjects = (payload: GetAllProjectsPayload) => {
  const params = new URLSearchParams();

  const pageSize = payload.page.pageSize;
  const pageIndex = payload.page.pageIndex;

  params.set("page", pageIndex.toString());
  params.set("perPage", pageSize.toString());

  if (payload.types.length > 0) {
    payload.types.forEach((type) => {
      params.append("status", type.toString());
    });
  }

  const paramsString = params.toString();

  return useQuery<ApiResponse, AxiosError<string, any>, any>({
    queryKey: ["projects", paramsString],
    queryFn: () => Service.getAll(params),
  });
};

export default useProjects;
