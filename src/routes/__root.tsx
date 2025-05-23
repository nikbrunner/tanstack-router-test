import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/work" className="[&.active]:font-bold">
          Work
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link
          to="/github/$username"
          params={{ username: "nikbrunner" }}
          className="[&.active]:font-bold"
        >
          Github
        </Link>
      </div>
      <hr />
      <div className="p-2">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
