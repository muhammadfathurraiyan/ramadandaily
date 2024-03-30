"use client";
import { buttonVariants } from "@/components/ui/button";
import useDate from "@/lib/customHooks/useDate";
import {
  Award,
  CalendarRange,
  CircleHelp,
  LayoutDashboard,
  LineChart,
  MessagesSquare,
  NotebookPen,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const pathName = usePathname();
  const [isClient, setIsClient] = useState(false);

  const { time, fullDate } = useDate();
  const navItems = [
    {
      name: "dashboard",
      url: "/dashboard",
      notification: "",
      icon: LayoutDashboard,
    },
    {
      name: "fast",
      url: "/dashboard/fast",
      notification: "",
      icon: UtensilsCrossed,
    },
    { name: "pray", url: "/dashboard/pray", notification: "", icon: Award },
    {
      name: "journey",
      url: "/dashboard/journey",
      notification: "",
      icon: NotebookPen,
    },
    {
      name: "comunity",
      url: "/dashboard/comunity",
      notification: "20",
      icon: MessagesSquare,
    },
    {
      name: "ramadan calendar",
      url: "/dashboard/calendar",
      notification: "",
      icon: CalendarRange,
    },
    {
      name: "analytic",
      url: "/dashboard/analytic",
      notification: "",
      icon: LineChart,
    },
    {
      name: "FAQ",
      url: "/dashboard/faq",
      notification: "",
      icon: CircleHelp,
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold">{isClient && time}</h1>
        <div className="text-xs text-muted-foreground">
          <p>Today is {isClient && fullDate}.</p>
        </div>
      </div>
      <aside className="h-full p-6 max-md:p-4 space-y-4">
        <nav className="grid gap-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className={buttonVariants({
                variant: "ghost",
                className: `${
                  pathName === item.url && "bg-muted"
                } justify-between`,
              })}
            >
              <span className="flex items-center gap-2 capitalize">
                <item.icon size={20} />
                {item.name}
              </span>
              <span>{item.notification}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
