"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/app/components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mt-10 mb-4 text-yellow-300">{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Who Are We ?",
    description: (
      <>
        <p>
          Welcome to Fitnesspergram! We are a passionate startup dedicated to
          improving the health and wellness of our community. Recognizing the
          common struggle of individuals wanting to eat healthier but lacking
          the resources to ensure balanced nutrition, we aim to address this
          gap. Our focus lies in transforming traditional thali meals into
          meticulously measured, macro-counted, calorie-controlled, and
          portion-managed dishes. Located in Narengi, Guwahati, we were founded
          by four ambitious students from Assam Down Town University with a
          shared vision to revolutionize eating habits. Our mission is clear: by
          perfecting the basics, we aspire to expand our impact nationwide,
          making health-conscious eating accessible to everyone across India.
        </p>
      </>
    ),
    badge: "",
    image: "https://iili.io/JUxwSFS.png",
  },
  {
    title: "Our Vision",
    description: (
      <>
        <p>
          At Fitnesspergram, our vision is rooted in the belief that small,
          purposeful steps can lead to significant and widespread impact.
          Starting as a grassroots initiative in Narengi, Guwahati, we
          understand the importance of addressing health and nutrition
          challenges faced by communities, particularly in tier 2 and tier 3
          cities where access to specialized wellness services is limited. Our
          approach is distinct: rather than targeting expensive metropolitan
          areas where such options are more common, we aim to cater specifically
          to regions that often lack affordable, health-conscious solutions.
        </p>
        <p>
          Our strategy revolves around leveraging our price-sensitive vision to
          advantageously serve these areas. By offering meticulously curated
          thali meals that are macro-counted, calorie-controlled, and
          portion-managed at accessible prices, we empower individuals in
          smaller cities to make informed choices about their nutrition without
          breaking the bank. We prioritize quality, affordability, and
          accessibility, ensuring that our services are not only effective but
          also sustainable for the communities we serve.
        </p>
        <p>
          As we expand our footprint across India, our focus remains on
          nurturing a culture of health and wellness in every corner of the
          country. We envision Fitnesspergram becoming a household name,
          synonymous with accessible and practical solutions for healthier
          living. By embracing innovation and adaptability, we seek to empower
          individuals and families in tier 2 and tier 3 cities to prioritize
          their well-being and embrace healthier lifestyles. Through our
          commitment to simplicity, affordability, and inclusivity, we strive to
          make health-conscious eating and lifestyle choices accessible to all,
          regardless of location or background. Join us on this transformative
          journey towards a healthier, happier India.
        </p>
      </>
    ),
    badge: "",
    image: "https://e0.pxfuel.com/wallpapers/372/811/desktop-wallpaper-man-fitness.jpg",
  },
  {
    title: "How We Do It Right",
    description: (
      <>
        <p>
          At Fitnesspergram, our approach is centered around simplicity and
          efficiency. We believe in doing things right by streamlining our
          operations and focusing on what truly matters: delivering
          high-quality, health-conscious meals at affordable prices. Our secret
          lies in our methodical system of meal preparation. By utilizing a
          consistent base of ingredients and preparing similar dishes in bulk,
          we optimize efficiency without compromising on nutritional value or
          taste. This approach allows us to keep our costs down, enabling us to
          offer our services at aggressively competitive prices.
        </p>
        <p>
          Our subscription model is perfectly tailored to meet the needs of
          fitness enthusiasts and health-conscious individuals. Through our
          subscription plans, customers can enjoy the convenience of receiving
          calorie-counted and portion-controlled meals delivered right to their
          doorstep. This streamlined process eliminates the guesswork and
          time-consuming meal planning associated with maintaining a balanced
          diet. At Fitnesspergram, our commitment is straightforward: we ensure
          that every meal is meticulously prepared, calorie-conscious, and
          delivered promptly, empowering our customers to prioritize their
          health without added stress or complexity.
        </p>
        <p>
          In essence, our formula is simple yet effective: calories counted,
          portion controlled, and delivered right. By focusing on these core
          principles, we simplify the journey towards healthier eating and
          lifestyle choices. Our mission is clear—to make nutritious eating
          accessible and effortless for all, ensuring that everyone has the
          opportunity to achieve their fitness and wellness goals without
          compromise. Join us in embracing a healthier, more balanced approach
          to nourishment with Fitnesspergram.
        </p>
      </>
    ),
    badge: "",
    image: "https://iili.io/JUdxrJ9.png",
  },
];
