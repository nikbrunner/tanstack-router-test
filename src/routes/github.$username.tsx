import { createFileRoute } from "@tanstack/react-router";

const fetchGithubUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return await response.json();
};

export const Route = createFileRoute("/github/$username")({
  component: RouteComponent,
  staleTime: 1000 * 60 * 60, // 1 hour
  loader: async ({ params }) => {
    return await fetchGithubUser(params.username);
  },
});

function RouteComponent() {
  const profile = Route.useLoaderData();

  if (profile.status === String(404)) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <div className="mb-5 flex flex-col gap-5">
        <h1 className="text-3xl">
          <span className="font-mono text-orange-500">{profile.name}</span> on
          Github
        </h1>
        <img
          className="rounded-full w-36"
          src={profile.avatar_url}
          alt={profile.name}
        />

        <a
          href={profile.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 mb-5 underline"
        >
          Visit Profile on Github
        </a>

        <div className="p-3 border border-gray-200 rounded-lg bg-gray-200">
          <pre className="font-mono text-gray-500">
            {JSON.stringify(profile, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
