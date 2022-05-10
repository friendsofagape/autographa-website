import React, { useState } from "react";
import { motion } from "framer-motion";

import { SlideList, Hero } from "contentlayer/generated";

export default function Slides(props: { slides: SlideList[]; hero: Hero }) {
  const { slides, hero } = props;
  return (
    <div className="container mx-auto my-40 md:my-40 xl:my-80">
      <h2 className="heading">{hero.title}</h2>

      <div className="mx-4 mt-20 rounded-xl bg-secondary p-8 text-center text-2xl leading-relaxed text-white shadow-lg xl:mx-auto xl:w-2/3 xl:p-16 xl:px-20 xl:leading-loose ">
        {hero.description}
      </div>

      {slides.map((slide, id) => (
        <div key={id} className="section">
          <div
            className={`mt-10 px-8 text-white md:px-20 xl:mt-0 xl:px-40 ${
              id % 2 != 0 && "order-last"
            }`}
          >
            {slide.slides.map((s, id) => (
              <div key={id}>
                <h3 className="heading">{s.title}</h3>
                <p className="prose mb-20 text-white/60">{s.description}</p>
              </div>
            ))}
          </div>
          <motion.div
            className={`p-4 xl:p-20 ${id % 2 != 0 ? "xl:-ml-64" : "xl:-mr-64"}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0 },
              hidden: { opacity: 0, scale: 1, x: id % 2 != 0 ? -200 : 200 },
            }}
          >
            <img
              className="rounded-2xl bg-white p-2 shadow-2xl"
              src={slide.imageUrl}
              alt=""
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
