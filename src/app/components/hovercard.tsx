import { HoverEffect } from "@/app/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Instagram",
    description:
      "Discover nutritious meals that are anything but odinary. Plus enjoy fitness related content to boost toyr healthy lifestyle. Join us on a journey of healthy eating @fitnesspergram.store",
    link: "https://instagram.com/fitnesspergram.store",
    br: "",
  },
  {
    title: "LinkedIn",
    description:
      "Join us as we combine wholesome nutritions with practicle fitness insights to build a healthier community one gram at a time",
    link: "https://www.linkedin.com/company/fitnesspergram/?viewAsMember=true",
    br: "",
  },
  {
    title: "Youtube",
    description:
      "Subscribe to our youtube channel for mouthwatering recipes, nutrition tips and workout plans to boost your fitness journey",
    link: "https://www.youtube.com/channel/UCwUZeCgZ1Nln-11g0zqdCsA",
    br: "",
  },
  {
    title: "Drop a Mail",
    description:
      "For enquiries, doubts, support or anything else reach us at fitnesspergram@gmail.com",
    link: "mailto:fitnesspergram@gmail.com",
    br: "",
  },
  {
    title: "Call us at",
    description: "Lets have a chat! call us now +91 70866 15792",
    link: "tel:+917086615792",
    br: "",
  },
  {
    title: "WhatsApp",
    description:
      "Got any queries we got you covered, drop a text anytime you want.",
    link: "https://wa.me/917086615792",
    br: "",
  },
];
