import FontButton from "@/components/FontButton";
import Text from "@/components/Text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-8 pr-8">
      <div className="w-full max-w-5xl font-mono text-sm ">
        <nav className="flex h-20 w-full justify-between bg-green-300">
          <div>Logo</div>
          <div className="flex">
            <a
              href="/menu1"
              className="inline-flex w-fit items-center justify-center p-2 text-center hover:bg-slate-500 hover:text-white"
            >
              menu1
            </a>
            <a
              href="/menu1"
              className="inline-flex w-fit items-center justify-center p-2 text-center hover:bg-slate-500 hover:text-white"
            >
              menu1
            </a>
            <a
              href="/menu1"
              className="inline-flex w-fit items-center justify-center p-2 text-center hover:bg-slate-500 hover:text-white"
            >
              menu1
            </a>
            <a
              href="/menu1"
              className="inline-flex w-fit items-center justify-center p-2 text-center hover:bg-slate-500 hover:text-white"
            >
              menu1
            </a>
          </div>
        </nav>
        <Text />
        <FontButton />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
          Button
        </button>
      </div>
    </main>
  );
}
