import { useQuery } from "@tanstack/react-query";
import axiosClient from "./apiClient";

const useUser = () => {
  const { data, refetch } = useQuery({
    queryKey: ["contact"],
    queryFn: () => {
      return axiosClient.get("/notes");
    },
    // enabled: false,
  });

  return { data, refetch };
};

export { useUser };
