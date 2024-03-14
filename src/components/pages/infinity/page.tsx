import { H1, View } from "../..";
import { ButtonMain, MainDashLayout } from "../../molecules";

const Pageinfinity = () => {
  return (
    <MainDashLayout>
      <H1 className="text-center">Infinity</H1>
      <View className="w-full pt-2 justify-between px-2">
        <ButtonMain onClick={() => console.log("log")}>GetQuery</ButtonMain>
      </View>
    </MainDashLayout>
  );
};

export default Pageinfinity;
