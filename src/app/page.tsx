import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container min-h-screen max-w-screen-2xl max-md:px-4 flex flex-col justify-center">
      <h1 className="text-5xl max-md:text-4xl md:w-4/5">
        Welcome to <span className="font-semibold">ramadan</span>
        <span className="text-primary font-light">daily.</span> your companion
        for a fulfilling the holy month.
      </h1>
      <p className="md:w-1/2 mt-2">
        Stay organized, focused, and spiritually connected throughout the holy
        month with our intuitive tools.
      </p>
      <Link
        href="/auth"
        className={buttonVariants({
          className: "md:text-base mt-4 w-fit group",
        })}
      >
        Get Started
        <ArrowRight
          size={16}
          className="ml-2 group-hover:translate-x-1 transition-all"
        />
      </Link>
    </main>
  );
}
