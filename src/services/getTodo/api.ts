import { axiosInstance } from "../apis";
import { Todo } from "./type";

export const getTodo = async (id: number) => {
  return (await axiosInstance.get<Todo>(`todos/${id}`)).data;
};
