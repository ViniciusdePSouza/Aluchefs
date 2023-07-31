import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/authContext";
import { AppRoutes } from "./app.routes";
export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
       {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
