import { MainDashLayout } from "../../molecules";
import { H4, View } from "../..";
import { NavbarMain } from "../../sections/navbar/main";
import { CardMain } from "../../molecules/card";
import "animate.css";

const PageHome = () => {
  return (
    <MainDashLayout header={<NavbarMain />}>
      <View vertical className="px-2">
        <H4 className="text-center">Home</H4>
        <View className="flex-col  gap-2 mx-auto pt-4">
          <CardMain title={"crud"} />
          <CardMain title={"pagination"} />
          <CardMain title={"infinity"} />
        </View>
      </View>
    </MainDashLayout>
  );
};

export default PageHome;
