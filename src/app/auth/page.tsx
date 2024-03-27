import Auth from "@/components/auth/Auth";

export default function page() {
  return (
    <main className="container min-h-screen max-w-screen-2xl max-md:px-4 flex flex-col justify-center items-center">
      <Auth />
    </main>
  );
}
