import { Button } from "@/components/ui/button";

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
      <Button size={"lg"} className="text-base mt-4 w-fit">
        Get Started
      </Button>
    </main>
  );
}
