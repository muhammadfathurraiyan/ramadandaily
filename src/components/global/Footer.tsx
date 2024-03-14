import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container max-w-screen-2xl max-md:px-4 py-6 border-t border-border">
      <p className="text-sm text-left">
        Site design by{" "}
        <Link
          href="https://muhammadfathurraiyan.site"
          target="_blank"
          className="font-medium underline underline-offset-4 hover:text-primary transition-all"
        >
          Raiyan.
        </Link>
      </p>
    </footer>
  );
}
