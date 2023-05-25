import LinkedinIcon from "../atoms/icons/linkedin_icon";
import GithubIcon from "../atoms/icons/github_icon";
import DribbbleIcon from "../atoms/icons/dribbble_icon";
import SocialLink from "../atoms/social_link";

const social = [
  {
    href: "https://www.linkedin.com/",
    icon: <LinkedinIcon size={20} />,
  },
  {
    href: "https://github.com/",
    icon: <GithubIcon size={20} />,
  },
  {
    href: "https://dribbble.com/",
    icon: <DribbbleIcon size={20} />,
  },
];

export default function HomeSocial() {
  return (
    <ul id="home-social" className="flex gap-x-5 justify-self-center">
      {social.map(({ href, icon }) => (
        <SocialLink key={href} href={href} icon={icon} />
      ))}
    </ul>
  );
}
