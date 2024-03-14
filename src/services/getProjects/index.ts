import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProjects } from "./api";

export const useGetProjects = ({ page }: { page: number }) => {
  return useQuery({
    queryKey: ["projects", { page }],
    queryFn: () => getProjects({ page }),
    placeholderData: keepPreviousData,
  });
};
