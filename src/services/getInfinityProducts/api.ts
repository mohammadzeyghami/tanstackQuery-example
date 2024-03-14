import { axiosInstance } from "../apis";
export const getInfinityProducts = async ({
  pageParam = 1,
}: {
  pageParam: number;
}) => {
  return (
    await axiosInstance.get(`products?_page=${pageParam + 1}&_per_page=4`)
  ).data;
};
