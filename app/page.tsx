import Image from "next/image";
import HomePage from "./components/Home";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full bg-emerald-950/60 dark:bg-emerald-950/60">
      <div className="absolute inset-0 
        [background-size:12px_12px]
        [background-image:linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)]">
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)] bg-black"></div>
      <HomePage/>
    </div>
  );
}