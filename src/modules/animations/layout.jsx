import { Outlet } from "react-router";

function AnimationsLayout() {
  return (
    <div className="flex w-full h-full justify-center items-center">
        <Outlet />
    </div>
  )
}

export default AnimationsLayout
