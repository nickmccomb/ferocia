import { Calculator } from "@/components/calculator";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#ff705d]">
      <main className="flex flex-col gap-[8px] row-start-2 items-center sm:items-start">
        <Header
          title="Calculate your returns"
          description="Use our deposit calculator to forecast the return on your term deposit."
        />
        <Calculator />
      </main>
    </div>
  );
}
