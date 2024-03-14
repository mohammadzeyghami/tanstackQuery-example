import { BrowserRouter, Route, Routes as Router } from "react-router-dom";

// import { PrivateRoutes } from "./components/pages/dashboard/privateRoutes/idnex";
// import Routes from "./routes";
// import { LogIn, SignIn } from "./components";

import PageCrud from "./components/pages/crud";
import PagePagination from "./components/pages/pagination";
import PageInfinity from "./components/pages/infinity";
import PageHome from "./components/pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router>
          <Route path={"*"} element={<PageHome />} />
          <Route path={"/crud"} element={<PageCrud />} />
          <Route path={"/pagination"} element={<PagePagination />} />
          <Route path={"/infinity"} element={<PageInfinity />} />
        </Router>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
