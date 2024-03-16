import { ButtonMain, MainDashLayout } from "../../molecules";
import { H1, H3, P, View } from "../..";
import { useGetProjects } from "../../../services/getProjects";
import { useState } from "react";
import { NavbarMain } from "../../sections/navbar/main";

const PagePagination = () => {
  const [page, setPage] = useState(1);
  const { data, isError, error, isPending, isPlaceholderData } = useGetProjects(
    { page }
  );
  console.log(data);
  return (
    <MainDashLayout header={<NavbarMain />}>
      <H1 className="text-center">pagination </H1>
      <View
        vertical
        className=" border-[1px] shadow-md max-w-[600px] mx-auto my-8 rounded-lg py-5"
      >
        <H3 className="text-center !text-red-500 !mb-4">{page}</H3>
        {isPending ? (
          <P>loading...</P>
        ) : isError ? (
          <P>{error.message || "error"}</P>
        ) : (
          data?.data?.map((item: { id: number; name: string }) => {
            return (
              <div className="bg-gray text-center" key={item.id}>
                <P className="!text-black">{item?.name}</P>
              </div>
            );
          })
        )}
        <div className="flex justify-between w-[500px] mx-auto">
          <ButtonMain
            disabled={isPlaceholderData}
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          >
            prev
          </ButtonMain>
          <ButtonMain
            disabled={data?.next === null}
            onClick={() => {
              if (!isPlaceholderData) {
                setPage((prev) => prev + 1);
              }
            }}
          >
            next
          </ButtonMain>
        </div>
      </View>
    </MainDashLayout>
  );
};

export default PagePagination;
