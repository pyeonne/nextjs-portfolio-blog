import LayoutIcon from "../atoms/icons/layout_icon";
import SectionSubtitle from "../atoms/section_subtitle";
import SectionTitle from "../atoms/section_title";
import ServicesCard from "../molecules/services_card";

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionTitle title="Services" />
      <SectionSubtitle subtitle="What I offer" />

      <div
        id="services__container"
        className="section__border container grid justify-center gap-y-10"
      >
        <ServicesCard type="designer" />
        <ServicesCard type="developer" />
        <ServicesCard type="animator" />
      </div>
    </section>
  );
}
