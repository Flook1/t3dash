import React, { useState } from "react";
import { Nav } from "./ui/nav";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  UsersRound,
  LayoutDashboard,
  ShoppingCart,
  Settings,
  ChevronRight,
} from "lucide-react";
import { useWindowWidth } from "@react-hook/window-size";

type Props = Record<string, never>;

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[px] bg-yellow-300 px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Image
        src="https://github.com/Flook1/t3dash/blob/main/public/IE.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
