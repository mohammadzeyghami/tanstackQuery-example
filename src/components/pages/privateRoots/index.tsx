import { Route, Routes as Router } from "react-router-dom";
import { MainDashLayout } from "../../molecules/layout/main";
import { View } from "../..";
import { ButtonMain } from "../../molecules";

//lazy loading

interface MyPrivateprops {
  isAuthenticated: boolean;
  userRoles: string[];
}
const PrivateRoutes = ({
  isAuthenticated = true,
  userRoles,
}: MyPrivateprops) => {
  if (isAuthenticated) {
    console.log(userRoles);
    return (
      <Router>
        <Route
          path={"/*"}
          element={
            <MainDashLayout>
              <View className="w-full pt-2 justify-between px-2">
                <ButtonMain onClick={() => console.log("log")}>
                  GetQuery
                </ButtonMain>
              </View>
            </MainDashLayout>
          }
        />
      </Router>
    );
  }
  //   else {
  //     return <Navigate to={Routes.login.root} />;
  // }
};

export { PrivateRoutes };
