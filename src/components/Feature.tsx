// import React from "react";
import { classNames } from "@/utils/functions";

import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";

export type HeroIcon = keyof typeof SolidIcons | keyof typeof OutlineIcons;

interface IconProps {
  icon: string;
  className?: string;
  outline?: boolean;
}

export const HeroIcon = (props: IconProps): JSX.Element => {
  const { icon, className, outline } = props;
  const Icon = outline
    ? OutlineIcons[icon as HeroIcon]
    : SolidIcons[icon as HeroIcon];
  return Icon ? <Icon className={className} /> : <></>;
};

interface FeatureProps {
  icon: string;
  text: string;
  description: string;
  className?: string;
  tags?: string[];
}

export default function Feature({
  icon,
  text,
  description,
  className,
  tags,
}: FeatureProps) {
  return (
    <div
      className={classNames(
        className ? className : "",
        "relative rounded-xl bg-white p-3 text-secondary shadow xl:p-7"
      )}
    >
      <div className="mb-2 items-start gap-2 lg:flex xl:gap-6">
        <div className="mt-3 mb-3 flex h-8 w-8 lg:mb-0 lg:h-16 lg:w-16 xl:p-3 items-center justify-center rounded-full bg-primary p-1 text-center text-white">
          <HeroIcon icon={icon} className="w-4 lg:w-7" outline />
        </div>
        <div>
          <span className="text-base font-semibold capitalize leading-normal tracking-wider xl:text-2xl xl:leading-loose">
            {text}
          </span>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>

      {/* <div className="absolute bottom-4 right-1">
        {
          tags?.map((tag, index) => {
            return <span key={index} className="p-1 px-3 mr-2 bg-secondary rounded-full text-xxs font-semibold tracking-widest text-white">{tag}</span>
          })
        }
      </div> */}
    </div>
  );
}
