import { BrowserRouter, Route, Routes as Router } from "react-router-dom";

// import { PrivateRoutes } from "./components/pages/dashboard/privateRoutes/idnex";
// import Routes from "./routes";
// import { LogIn, SignIn } from "./components";

import { ButtonMain, MainDashLayout } from "./components/molecules";
import { View } from "./components";
import PageCrud from "./components/pages/crud/page";
import PagePagination from "./components/pages/pagination";
import Pageinfinity from "./components/pages/infinity/page";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path={"*"}
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
        <Route path={"/crud"} element={<PageCrud />} />
        <Route path={"/pagination"} element={<PagePagination />} />
        <Route path={"/infinity"} element={<Pageinfinity />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
