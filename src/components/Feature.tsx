import React, { ReactNode } from 'react';
import { classNames } from '@/utils/functions'

import * as SolidIcons from '@heroicons/react/solid';
import * as OutlineIcons from '@heroicons/react/outline';

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;

interface Props {
  icon: IconName;
  className?: string;
  outline?: boolean;
}

export const HeroIcon = (props: Props): JSX.Element => {
  const { icon, className = 'w-6 h-6 text-gray-600', outline = false } = props;
  const Icon = outline ? OutlineIcons[icon] : SolidIcons[icon];
  return <Icon className={className} />;
};


interface FeatureProps {
  icon: string;
  text: string;
  description: string;
  className?: string;
  tags?: string[];
}


export default function Feature({ icon, text, description, className, tags }: FeatureProps) {
  return (
    <div className={classNames(className ? className : '', "p-7 bg-white text-secondary rounded-xl shadow relative")}>
      <div className="flex items-start gap-6 mb-2">
        <div className="mt-3 p-3 rounded-full bg-primary text-white text-center">
          <HeroIcon icon={icon as IconName} className="w-7" outline />
        </div>
        <div>
          <span className="text-2xl capitalize font-semibold tracking-wider leading-loose">{text}</span>
          <p className="leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 right-1">
        {
          tags?.map((tag, index) => {
            return <span key={index} className="p-1 px-3 mr-2 bg-secondary rounded-full text-xxs font-semibold tracking-widest text-white">{tag}</span>
          })
        }
      </div>
    </div>
  )
}
