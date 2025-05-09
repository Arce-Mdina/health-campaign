

import Landing from "@/components/Landing";
import Facts from "@/components/Facts";
import Nav from "@/components/ui/Nav";
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