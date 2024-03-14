import { useQuery } from "@tanstack/react-query";
import { getTodo } from "./api";
import { QueryOptions } from "@tanstack/react-query";

interface ITodosProps extends QueryOptions {
  id: number;
}
export function useTodosIds({ id }: ITodosProps) {
  return useQuery({
    queryKey: ["todo", { id }],
    queryFn: () => getTodo(id),
  });
}
