import { useState } from "react";
import { H1 } from "../..";
import { useProducts } from "../../../services/getInfinityProducts";
import { ButtonMain, MainDashLayout } from "../../molecules";

const PageInfinity = () => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useProducts();

  // const {} = useProduct();
  const [selectedProdutId, setSelectedProdutId] = useState<string | null>(null);
  console.log(data);
  console.log();
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
        disabled={
          isFetchingNextPage ||
          data?.pages?.[data?.pages.length - 1]?.next === null
        }
      >
        {isFetchingNextPage
          ? "fetching ..."
          : hasNextPage
          ? "load more"
          : "nothing to load"}
      </ButtonMain>
    </MainDashLayout>
  );
};

export default PageInfinity;
