import { QueryClient, useMutation } from "@tanstack/react-query";
import deleteTodo from "./api";

export const useDeleteTodo = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
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

        console.log("we remove right");
      }
    },
  });
};
