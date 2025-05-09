import Image from "next/image";
import ScrollGradientEffect from "@/components/ui/ScrollGradientEffect";

import Landing from "@/components/Landing";
import Stats from "../components/Stats";
import Facts from "@/components/Facts";
import Nav from "@/components/ui/Nav";

import Symptoms from "@/components/Symptoms";
import Prevention from "@/components/Prevention";

export default function Home() {
  return (
   <>
    {/* <ScrollGradientEffect /> */}

    <Landing />
    <Nav />
    {/* <Stats /> */}
    <Facts />
    {/* <Symptoms /> */}

    <Prevention />

    <div className="p-10"></div>

   </>
  );
}