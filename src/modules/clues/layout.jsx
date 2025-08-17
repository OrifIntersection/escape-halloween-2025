import { Outlet } from "react-router";

function CluesLayout() {
  return (
    <div className="flex w-full h-full justify-center items-center">
        <Outlet />
    </div>
  )
}

export default CluesLayout
