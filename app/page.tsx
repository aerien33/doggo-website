import Image from "next/image";
import {Button} from "./button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Image
            className="dark:invert h-20 w-[100px]"
            src="/logo.webp"
            alt="Doggo logo"
            width={100}
            height={20}
            priority
          />
          <div className="flex flex-col items-center gap-6 pt-5 text-center sm:items-start sm:text-center">
            <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Bork Bork Company
            </h1>
          </div>
        </div>
        <Image
            className="dark:invert h-100 w-[250px]"
            src="/dog.jpg"
            alt="Dog"
            width={100}
            height={20}
            priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Send love to our dog!
          </h1>
          <Button/>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for more info?{" "}
            <a
              href="https://www.google.com"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Click Here
            </a>{" "}
          </p>
        </div>
      </main>
    </div>
  );
}
