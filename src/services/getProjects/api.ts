import { axiosInstance } from "../apis";
import { Project } from "./types";
export const getProjects = async ({ page = 1 }: { page: number }) => {
  return (
    await axiosInstance.get<Project[]>(`projects?_page=${page}&_per_page=4`)
  ).data;
};
