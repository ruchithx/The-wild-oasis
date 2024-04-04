import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./pages/AppLayout";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0, // 5 minutes
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="bookings" element={<Bookings />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="cabins" element={<Cabins />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="account" element={<Account />}></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
