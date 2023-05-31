import Home from "@/components/organisms/home";
import Qualification from "@/components/organisms/qualification";
import Skills from "@/components/organisms/skills";

export default function Root() {
  return (
    <main className="main">
      <Home />
      <Skills />
      <Qualification />
    </main>
  );
}
