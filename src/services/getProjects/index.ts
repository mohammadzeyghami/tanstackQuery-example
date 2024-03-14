import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProjects } from "./api";

export const useGetProjects = (page: number) => {
  return useQuery({
    queryKey: ["Projects", { page }],
    queryFn: () => getProjects({ page }),
    placeholderData: keepPreviousData,
  });
};
