import axios from "axios";
import { axiosInstance } from "../apis";

async function deleteTodo(todoId: number): Promise<void> {
  try {
    const response = await axiosInstance.delete(`todos/${todoId}`);
    console.log("Todo deleted successfully:", response.data);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

export default deleteTodo;
