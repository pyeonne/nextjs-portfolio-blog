import Home from "@/components/organisms/home";
import Qualification from "@/components/organisms/qualification";
import Services from "@/components/organisms/services";
import Skills from "@/components/organisms/skills";

export default function Root() {
  return (
    <main className="main">
      <Home />
      <Skills />
      <Qualification />
      <Services />
    </main>
  );
}
