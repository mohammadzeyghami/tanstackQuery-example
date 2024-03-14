import { ButtonMain, MainDashLayout } from "../../molecules";
import { H1, H3, P } from "../..";
import { useGetProjects } from "../../../services/getProjects";
import { useState } from "react";

const PagePagination = () => {
  const [page, setPage] = useState(1);
  const { data, isError, error, isPending, isPlaceholderData } = useGetProjects(
    { page }
  );
  console.log(data);
  return (
    <MainDashLayout>
      <H1 className="text-center">pagination </H1>
      <H3 className="text-center">{page}</H3>
      {isPending ? (
        <P>loading...</P>
      ) : isError ? (
        <P>{error.message || "error"}</P>
      ) : (
        data?.data?.map((item) => {
          return (
            <div className="bg-gray" key={item.id}>
              <P className="!text-black">{item?.name}</P>
            </div>
          );
        })
      )}
      <div className="flex justify-between w-full">
        <ButtonMain
          disabled={isPlaceholderData}
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        >
          prev
        </ButtonMain>
        <ButtonMain
          disabled={isPlaceholderData}
          onClick={() => {
            if (!isPlaceholderData) {
              setPage((prev) => prev + 1);
            }
          }}
        >
          next
        </ButtonMain>
      </div>
    </MainDashLayout>
  );
};

export default PagePagination;
