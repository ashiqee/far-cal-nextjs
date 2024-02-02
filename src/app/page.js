import Banner from "@/components/Homepages/Banner";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen ">
<Navbar/>
<Banner/>
    </main>
  );
}
