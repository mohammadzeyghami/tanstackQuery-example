import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "./apis";
import { Todo } from "../getTodo/type";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onMutate: () => {
      console.log("mutate");
    },
    onError: () => {
      console.log("error");
    },
    onSuccess: () => {
      console.log("success");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log("hey this is error:", error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["gettodos"] });
      }
    },
  });
};
