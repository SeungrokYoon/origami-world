import FontButton from "@/components/FontButton";
import Text from "@/components/Text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
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
