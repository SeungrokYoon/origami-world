import FontButton from "@/components/FontButton";
import Text from "@/components/Text";
import clsx from "clsx";

export default function Home() {
  return (
    <article className={clsx(" md:pl-8 md:pr-8")}>
      <section>
        <Text />
        <FontButton />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
          Button
        </button>
      </section>
    </article>
  );
}
