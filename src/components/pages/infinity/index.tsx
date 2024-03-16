import { useState } from "react";
import { H1, H4, View } from "../..";
import { useProducts } from "../../../services/getInfinityProducts";
import { ButtonMain, MainDashLayout } from "../../molecules";
import { useProduct } from "../../../services/getProduct";
import { NavbarMain } from "../../sections/navbar/main";

const PageInfinity = () => {
  const [selectedProdutId, setSelectedProdutId] = useState<number | null>(null);
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useProducts();
  const { data: selectedData } = useProduct(selectedProdutId);
  console.log(data);
  console.log();
  return (
    <MainDashLayout header={<NavbarMain />}>
      <H1 className="text-center animate__animated animate__fadeIn">
        Infinity
      </H1>
      <View className="flex-wrap gap-2 pb-4 justify-center pt-4 animate__animated animate__fadeIn">
        {data?.pages?.map((group) => {
          return group?.data.map((product: { name: string; id: number }) => (
            <ButtonMain
              id={`${product.id}`}
              onClick={() => setSelectedProdutId(product.id)}
            >
              {product.name}
            </ButtonMain>
          ));
        })}
      </View>
      <View vertical className="animate__animated animate__fadeIn">
        <View className="justify-center">
          <ButtonMain
            onClick={() => fetchNextPage()}
            className=""
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
        </View>
        <H4 className="text-center">{JSON.stringify(selectedData)}</H4>
      </View>
    </MainDashLayout>
  );
};

export default PageInfinity;
