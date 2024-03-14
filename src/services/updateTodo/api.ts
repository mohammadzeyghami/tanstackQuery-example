import { axiosInstance } from "../apis";
import { Todo } from "../getTodo/type";

export const updateTodo = async (data: Todo) => {
  return (await axiosInstance.put<Todo>(`todos/${data.id}`, data)).data;
};
