import { axiosInstance } from "../apis";
import { Product } from "../getInfinityProducts/type";

export const getProduct = async (id: number) => {
  return (await axiosInstance.get<Product>(`products/${id}`)).data;
};
