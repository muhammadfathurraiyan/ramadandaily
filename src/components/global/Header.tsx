"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { buttonVariants } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-6 py-4 max-md:px-4 max-w-screen-2xl flex items-center justify-between">
        <Link href="/" className="text-3xl font-semibold">
          ramadan<span className="text-primary font-light">daily.</span>
        </Link>
        <nav className="flex items-center gap-4 max-md:gap-2">
          {pathName !== "/auth" && (
            <Link href="/auth" className={buttonVariants({ size: "sm" })}>
              <LogIn className="w-4 h-4 mr-2" /> Login
            </Link>
          )}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
