import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";

export default function Page() {
  return (
    <>
      <header className="p-4 flex justify-end max-w-7xl mx-auto">
        <ButtonSignin text="Login" />
      </header>
      <main>
        <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24">
          <h1 className="text-3xl font-extrabold">Welcome to LongevityVerse</h1>
          <p className="text-lg opacity-80">
            Discover, connect, and engage with the longevity community. Explore
            the latest in health, wellness, and longevity science.
          </p>
          <Link href="/hub" passHref>
            <button className="btn btn-primary">Explore the Hub</button>
          </Link>
          <Link href="/blog" passHref legacyBehavior>
            <a className="link link-hover text-sm">Fancy a blog?</a>
          </Link>
        </section>
      </main>
    </>
  );
}
