import React, { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab } from "@headlessui/react";
import { classNames } from "@/utils/functions";

import Menu from "@/layout/Menu";
import Footer from "@/layout/Footer";

import Releases from "@/components/Releases";

import SlidesGroup from "src/home/Slides";
import { allSlideLists, allHeros } from "contentlayer/generated";

import FeatureSection from "src/home/FeatureList";
import { allFeatureLists } from "contentlayer/generated";

import { useGetDownloadUrlQuery } from "@/graphql/graphql";

interface category {
  id: number;
  title: string;
  image: string;
  isComingSoon: boolean;
}

export default function Index() {
  const { data, isFetching, isLoading, isError } = useGetDownloadUrlQuery(
    undefined,
    { cacheTime: 43200000, staleTime: Infinity }
  );

  const repoNode = data?.repository?.releases?.nodes![0];

  let relAssets = repoNode?.releaseAssets?.edges;
  relAssets = relAssets?.filter(
    (el) => el?.node?.contentType == "application/octet-stream"
  );

  const categoriesItems: category[] = [
    {
      id: 1,
      title: "Translation mode",
      image: "/images/editor.png",
      isComingSoon: false,
    },
    {
      id: 2,
      title: "OBS Mode",
      image: "/images/editor-obs.png",
      isComingSoon: true,
    },
    {
      id: 3,
      title: "Audio Mode",
      image: "/images/editor-audio.png",
      isComingSoon: true,
    },
    {
      id: 4,
      title: "Machine Translation",
      image: "/images/editor.png",
      isComingSoon: true,
    },
  ];

  let [categories] = useState(categoriesItems);

  return (
    <>
      <Tab.Group as={Fragment}>
        <div className="bg-primary bg-gradient-to-tr from-primaryDHue to-primaryLHue pb-52">
          <div className="container mx-auto">
            <Menu />
            <div className="py-20 text-center xl:py-40">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, scale: 1, y: 0 },
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                }}
              >
                <h1 className="text-shadow-xl my-5 text-4xl font-bold uppercase tracking-wider text-white xl:text-8xl">
                  Autographa
                </h1>
                <p className="mx-auto w-1/2 text-base font-semibold xl:w-auto xl:text-xl xl:leading-8">
                  Scripture drafting and editing made simple
                </p>
              </motion.div>

              <div className="my-24 mx-auto md:flex xl:w-2/5">
                <div className="mx-4 mb-10 flex flex-col items-center md:mb-0 md:w-1/2 xl:mx-10">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="block items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-white 
                                p-2 px-4 text-base font-bold 
                                text-secondary shadow-sm hover:bg-secondary hover:text-white xl:px-8 xl:py-4 xl:text-2xl"
                  >
                    Try it online
                  </motion.a>
                </div>
                <div className="mx-4 flex flex-col items-center md:w-1/2 xl:mx-10">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="block items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-secondary 
                                p-2 px-4 text-base font-bold 
                                text-white shadow-sm hover:bg-white hover:text-secondary xl:px-8 xl:py-4 xl:text-2xl"
                  >
                    Download
                  </motion.a>
                  <div className="my-5 flex gap-5">
                    <Releases />
                  </div>
                </div>
              </div>

              <Tab.List className="mx-4 flex space-x-1 border-b border-secondary/30 xl:mx-auto xl:w-2/3">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        "relative w-full rounded-t-xl py-2 text-xxs font-semibold uppercase hover:bg-white/[0.12] md:text-sm xl:py-5 xl:text-base xl:leading-5",
                        selected
                          ? "border-b-2 border-white text-white "
                          : "text-secondary hover:text-white"
                      )
                    }
                  >
                    {category.title}
                    {!!category.isComingSoon && (
                      <span className="absolute right-0 left-0 mx-auto -mt-10 w-16 rounded-full bg-highlight p-1 text-xxxs font-bold text-white md:w-20 xl:w-24 xl:px-2 xl:text-xxs">
                        coming soon
                      </span>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </div>
        </div>

        <Tab.Panels as={Fragment}>
          {categories.map((posts, idx) => (
            <Tab.Panel key={idx} className="container mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mx-4 -mt-64 rounded-3xl bg-white/5 p-5 xl:mx-auto xl:-mt-80 xl:w-2/3">
                      <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="rounded-3xl bg-white/5 p-5">
                          <motion.div
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="rounded-3xl bg-white/5 p-5">
                              <motion.div
                                animate={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 1 }}
                              >
                                <img
                                  className="rounded-xl shadow-lg"
                                  src={posts.image}
                                  alt="Editor"
                                />
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      <SlidesGroup hero={allHeros[0]} slides={allSlideLists} />

      <FeatureSection features={allFeatureLists[0].features} />

      <Footer />
    </>
  );
}
