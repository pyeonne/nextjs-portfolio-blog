import HomeSocial from "../molecules/home_social";
import HomeInfo from "../molecules/home_info";
import HomeBlob from "../molecules/home_blob";
import HomeTitle from "../atoms/home_title";

const description = [
  {
    title: "biography",
    paragraph:
      "Hi, I'm Hana, Frontend Developer. Passionate about designing beautiful web interfaces. Based in Republic of Korea.",
  },
  {
    title: "contact",
    paragraph: "Daegu, Republic of Korea\npyeonne@gmail.com\n+82 01025124144",
  },
  {
    title: "services",
    paragraph: "Website Design\nUI/UX Design\nAnimation",
  },
];

const number = [
  {
    title: "years of experience",
    paragraph: "02+",
  },
  {
    title: "completed projects",
    paragraph: "05+",
  },
  {
    title: "companies worked",
    paragraph: "01+",
  },
];

export default function Home() {
  return (
    <section id="home" className="section relative">
      <div
        id="home-container"
        className="section__border container grid gap-y-16 pt-8"
      >
        <div id="home-data" className="grid gap-y-6">
          <HomeTitle />
          <HomeBlob />
          <HomeSocial />
        </div>

        <HomeInfo type="description" data={description} />

        <HomeInfo type="number" data={number} />
      </div>
    </section>
  );
}
