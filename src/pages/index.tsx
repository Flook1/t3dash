import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import SideNavbar from "~/components/SideNavbar";
export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const { data: sessionData } = useSession();
  return (
    <>
      <div className="flex w-auto  flex-row">
        {sessionData && <SideNavbar />}
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-black">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </div>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="h-screen">
      <div className="flex  flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl text-black">
          {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
          {secretMessage && <span> - {secretMessage}</span>}
        </p>
        <button
          className="rounded-full bg-gray-600 px-10 py-3 font-semibold text-white no-underline transition hover:bg-black"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </div>
    </div>
  );
}
