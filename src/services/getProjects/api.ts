import { axiosInstance } from "../apis";
export const getProjects = async ({ page = 1 }: { page: number }) => {
  return (await axiosInstance.get(`projects?_page=${page}&_per_page=4`)).data;
};
