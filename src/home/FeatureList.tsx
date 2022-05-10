import React, { useState } from "react";

import FeatureComp from "@/components/Feature";

import { FeatureList, Feature } from "contentlayer/generated";

export default function Features(props: { features: Feature[] }) {
  const { features } = props;
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-40">
        <h2 className="heading">Features</h2>
        <div className="my-40 mx-4 grid grid-cols-2 gap-4 xl:mx-auto xl:grid-cols-3 xl:gap-10">
          {features.map((feature, id) => (
            <FeatureComp
              key={id}
              icon={feature.icon}
              text={feature.title}
              description={feature.description}
              // className={item.className}
            />
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
}
