import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { CardStackDemo } from "../components/cstack";

export default function SpotlightPreview() {
  return (
    <>
      <div className="h-[40rem] flex-col w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <CardStackDemo />
      </div>
      <div className="bg-black text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis dolorem excepturi laborum eveniet quae et quaerat dolor. Quibusdam facere quia ratione nihil minima facilis, ipsam fugit non quos dolores quidem eos quam, nulla optio molestias, magnam laborum. Explicabo itaque nulla porro eius esse aliquam dolorum error aut, suscipit tempore quasi modi veritatis excepturi molestias, magnam quaerat pariatur praesentium quod sequi dolor. Saepe repellat itaque odio ducimus hic odit architecto praesentium cupiditate voluptate, aliquid quis blanditiis ipsum aliquam ipsa corrupti non doloremque sapiente quos, obcaecati veniam quo aspernatur sequi nulla. Consectetur repellendus nulla provident, culpa odio officia ea expedita sed cum nihil molestiae nobis beatae, veritatis ipsum natus, totam pariatur! Vero necessitatibus, eius vel cum sequi, omnis dignissimos architecto reiciendis ex ipsam, doloremque nostrum eaque quo rerum ab voluptas illum optio repellat suscipit. Nesciunt exercitationem nemo pariatur blanditiis recusandae voluptates vitae, nostrum aut veritatis adipisci incidunt obcaecati mollitia quos, laborum ipsa consectetur tempore vel eum autem nulla omnis cumque culpa asperiores odio? Reiciendis doloremque minima id eaque quisquam laborum accusamus. Facilis aperiam provident veritatis? Provident, ea! Fugit veritatis, eum voluptatibus voluptates laudantium, facere fuga ut quia voluptate libero accusamus eos labore, rerum accusantium sequi modi? Odit, omnis dolor. Et, earum quidem. Officia natus sed blanditiis voluptatem a id praesentium, labore neque ipsum culpa ullam itaque nam distinctio vero porro accusamus exercitationem fuga? Molestias corrupti atque deleniti, architecto qui commodi quos dolorem voluptate. Itaque saepe repellat architecto, voluptates vero et assumenda hic quas. Dignissimos, eos quod assumenda nostrum accusamus reprehenderit dolorum.
      </div>
    </>
  );
}
