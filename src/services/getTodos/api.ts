import { axiosInstance } from "../apis";
import { Todo } from "../getTodo/type";

export const getTodos = async () => {
  return (await axiosInstance.get<Todo[]>(`todos`)).data;
};
