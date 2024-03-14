import { useState } from "react";
import { H1 } from "../..";
import { useProducts } from "../../../services/getInfinityProducts";
import { ButtonMain, MainDashLayout } from "../../molecules";

const PageInfinity = () => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useProducts();
  const [selectedProdutId, setSelectedProdutId] = useState<string | null>(null);
  console.log(data);
  return (
    <MainDashLayout>
      <H1 className="text-center">Infinity</H1>
      {data?.pages?.map((group) => {
        return group?.data.map((product: { name: string; id: number }) => (
          <ButtonMain id={`${product.id}`}>{product.name}</ButtonMain>
        ));
      })}
      <ButtonMain
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage || !hasNextPage}
      >
        {isFetchingNextPage
          ? "fetching ..."
          : hasNextPage
          ? "load more"
          : "..."}
      </ButtonMain>
    </MainDashLayout>
  );
};

export default PageInfinity;
