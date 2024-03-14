import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProduct } from "./api";
import { Product } from "../getInfinityProducts/type";

export function useProduct(id: number | null) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProduct(id!),
    enabled: !!id,
    placeholderData: () => {
      const cachedProducts = (
        queryClient.getQueryData(["products"]) as {
          pages: Product[] | undefined;
        }
      )?.pages?.flat(2);

      if (cachedProducts) {
        return cachedProducts.find((item) => item.id === id);
      }
    },
  });
}
