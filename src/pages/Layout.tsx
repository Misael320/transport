import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

type Props = {};

function Layout({}: Props) {
  return (
    <div>
      <NavBar /> <Outlet />
    </div>
  );
}

export default Layout;
