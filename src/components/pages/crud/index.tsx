import { ButtonMain, MainDashLayout } from "../../molecules";
import { H1, View } from "../..";

const PageCrud = () => {
  return (
    <MainDashLayout>
      <H1 className="text-center">Crud</H1>
      <View className="w-full pt-2 justify-between px-2">
        <ButtonMain onClick={() => console.log("log")}>GetQuery</ButtonMain>
      </View>
    </MainDashLayout>
  );
};

export default PageCrud;
