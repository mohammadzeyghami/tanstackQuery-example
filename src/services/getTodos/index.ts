import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./api";

export function useTodos() {
  return useQuery({
    queryKey: ["gettodos"],
    queryFn: () => getTodos(),
  });
}
