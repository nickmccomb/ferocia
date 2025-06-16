import { Calculator } from "@/components/calculator";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[8px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Calculate your returns</h1>
        <h3 className="mb-4">
          Use our deposit calculator to forecast the return on your term
          deposit.
        </h3>
        <Calculator />
      </main>
    </div>
  );
}
