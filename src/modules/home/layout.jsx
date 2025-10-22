import { Outlet } from "react-router";
import "./style.css";

function AppLayout() {
  return (<>
    <div id="backofthebackground" className="flex w-full h-full justify-center items-center">
      <Outlet />
    </div>
  
  </>)
}
export default AppLayout
