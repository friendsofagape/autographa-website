import React, { ReactNode } from 'react';
import { classNames } from '@/utils/functions'

interface FeatureProps {
  icon: ReactNode;
  text: string;
  className?: string;
  tags?: string[];
}


export default function Feature({ icon, text, className, tags }: FeatureProps) {
  return (
    <div className={classNames(className ? className : '', "p-10 bg-white text-secondary rounded-xl shadow relative")}>
      <div className="flex items-center gap-6 mb-2">
        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center">
          {icon}
        </div>
        <span className="text-2xl capitalize font-semibold tracking-wider">{text}</span>
      </div>
      <div className="absolute bottom-7 right-5">
      {
        tags?.map((tag, index) => {
          return <span key={index} className="p-1 px-3 mr-2 bg-secondary rounded-full text-xs tracking-widest text-white">{tag}</span>
        })
        }
      </div>
    </div>
  )
}
