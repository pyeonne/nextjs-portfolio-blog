import CodeIcon from "../atoms/icons/code_icon";
import LayoutIcon from "../atoms/icons/layout_icon";
import QuillPenIcon from "../atoms/icons/quill_pen_icon";

type Props = {
  type: "designer" | "developer" | "animator";
};

const title = {
  designer: {
    icon: (
      <LayoutIcon
        size={32}
        className="mx-auto mb-3 block text-title transition-transform duration-800"
      />
    ),
    text: "UI/UX\nDesigner",
    description:
      "Service that provides the best quality and at the request of the client, with professional work and customer support.",
  },
  developer: {
    icon: (
      <CodeIcon
        size={32}
        className="mx-auto mb-3 block text-title transition-transform duration-800"
      />
    ),
    text: "Website\nDesign",
    description:
      "Service that provides the best quality and at the request of the client, with professional work and customer support.",
  },
  animator: {
    icon: (
      <QuillPenIcon
        size={32}
        className="mx-auto mb-3 block text-title transition-transform duration-800"
      />
    ),
    text: "Digital\nAnimator",
    description:
      "Service that provides the best quality and at the request of the client, with professional work and customer support.",
  },
};

export default function ServicesCard({ type }: Props) {
  return (
    <div
      id="services__card"
      className="group relative h-[352px] w-[228px] rounded-[7.25rem] bg-container px-4 py-14 text-center"
    >
      {title[type].icon}
      <h2 id="services__title" className="mb-6 text-h2 font-semibold">
        {title[type].text.split("\n")[0]} <br />
        {title[type].text.split("\n")[1]}
      </h2>
      <p id="services__description" className="text-small">
        {title[type].description}
      </p>
      <div
        id="services__border"
        className="absolute inset-0 -left-2.5 -z-1 m-auto h-[372px] w-[248px] rounded-[7.75rem] border-[1.8px] border-text-color-light opacity-0 transition-opacity duration-600 group-hover:opacity-100"
      ></div>
    </div>
  );
}
