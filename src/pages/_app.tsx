import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { cn } from "~/lib/utils";
import { Inter as FontSans } from "next/font/google";
import SideNavbar from "~/components/SideNavbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
      )}
    >
      <SideNavbar />
      <div className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ffa65d] to-[#dac029]">
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </div>
    </body>
  );
};

export default api.withTRPC(MyApp);
