import { createFileRoute } from "@tanstack/react-router";

/*
    http://localhost:5173/user/123
*/
export const Route = createFileRoute("/user/$id")({
  component: RouteComponent,
  notFoundComponent: () => <div>User Not Found</div>,
  loader: ({ params }) => {
    const resp = { userName: "Pedro" };
    return resp;
  },
});

function RouteComponent() {
  const { id } = Route.useParams();
  const data = Route.useLoaderData();

  return (
    <div>
      Hello User with id: {id} {data.userName}
    </div>
  );
}
