import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { cn } from "~/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <div>
      <SessionProvider session={session}>
        <div className={cn(inter.className)}>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
