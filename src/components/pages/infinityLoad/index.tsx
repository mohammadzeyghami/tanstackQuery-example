import { useEffect, useState } from "react";
import { H1, H4, View } from "../..";
import { useProducts } from "../../../services/getInfinityProducts";
import { ButtonMain, MainDashLayout } from "../../molecules";
import { useProduct } from "../../../services/getProduct";
import { NavbarMain } from "../../sections/navbar/main";
import { useInView } from "react-intersection-observer";
import { Spin } from "antd";

const PageInfinityLoad = () => {
  const { ref, inView } = useInView();
  const [selectedProdutId, setSelectedProdutId] = useState<number | null>(null);
  const { data, hasNextPage, fetchNextPage } = useProducts();
  const { data: selectedData } = useProduct(selectedProdutId);

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("data");
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  return (
    <MainDashLayout header={<NavbarMain />}>
      <H1 className="text-center animate__animated animate__fadeIn">
        Infinity
      </H1>
      <View
        vertical
        className="flex-wrap gap-2 pb-4 justify-center pt-4 animate__animated animate__fadeIn"
      >
        {data?.pages?.map((group) => {
          return group?.data.map((product: { name: string; id: number }) => (
            <ButtonMain
              className="h-[20vh]"
              id={`${product.id}`}
              onClick={() => setSelectedProdutId(product.id)}
            >
              {product.name}
            </ButtonMain>
          ));
        })}
      </View>
      <View vertical className="animate__animated animate__fadeIn">
        <H4 className="text-center">{JSON.stringify(selectedData)}</H4>
        <div ref={ref} className="w-full justify-center">
          <Spin className="mx-auto" />
        </div>
      </View>
    </MainDashLayout>
  );
};

export default PageInfinityLoad;
