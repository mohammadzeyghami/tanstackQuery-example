import { axiosInstance } from "../apis";
import { Todo } from "../getTodo/type";

export const createTodo = async (data: Todo) => {
  await axiosInstance.post("todos", data);
};
