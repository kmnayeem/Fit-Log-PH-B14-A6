import AllWorks from "@/components/AllWorks";
import Banner from "@/components/Banner";
import { getAllWorks } from "@/lib/api";
import { IWorkout } from "@/Types/work.type";

export default async function Home() {
  const data = await getAllWorks();

  return (
    <div className="min-h-full w-full">
      <Banner />
      <AllWorks works={data} />
    </div>
  );
}