import React, { Fragment, useState, useEffect } from "react";

import { Tab } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps } from "next";
import { OsTypes, isWindows, isMacOs } from "react-device-detect";

import Releases from "@/components/Releases";
import {
  useGetDownloadUrlQuery,
  GetDownloadUrlDocument,
  GetDownloadUrlQuery,
} from "@/graphql/graphql";
import Footer from "@/layout/Footer";
import Menu from "@/layout/Menu";
import { classNames } from "@/utils/functions";
import { allSlideLists, allHeros } from "contentlayer/generated";
import { allFeatureLists } from "contentlayer/generated";
import FeatureSection from "src/home/FeatureList";
import SlidesGroup from "src/home/Slides";


const graphQLUrl = process.env.GRAPHQL_URL;
const token = process.env.GITHUB_TOKEN;

const client = new GraphQLClient(graphQLUrl as string, {
  headers: {
    authorization: `Bearer ${token as string}`,
  },
});

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const data: GetDownloadUrlQuery = await client.request(
      GetDownloadUrlDocument
    );

    return {
      props: { repo: data },
      revalidate: 21600, // revalidate every 6 hours
    };
  } catch (error: any) {
    throw new Error(error);
  }
};

interface category {
  title: string;
  image: string;
  isComingSoon?: boolean;
}

export default function Index({ repo }: { repo: GetDownloadUrlQuery }) {
  const relAssets = repo?.repository?.releases?.nodes![0]?.releaseAssets.edges;
  const version = repo?.repository?.releases?.nodes![0]?.tagName;

  const categoriesItems: category[] = [
    {
      title: "Translation mode",
      image: "/images/editor.png",
      isComingSoon: false,
    },
    {
      title: "OBS Mode",
      image: "/images/editor-obs.png",
    },
    {
      title: "Audio Mode",
      image: "/images/editor-audio.png",
      isComingSoon: true,
    },
    // {
    //   title: "Machine Translation",
    //   image: "/images/editor.png",
    //   isComingSoon: true,
    // },
  ];

  const [categories] = useState(categoriesItems);

  const [downloadUrl, setDownloadUrl] = useState("#");

  useEffect(() => {
    relAssets?.map((element, index) => {
      if (element?.node?.name.endsWith(".exe") && isWindows) {
        setDownloadUrl(element?.node?.downloadUrl);
      } else if (element?.node?.name.endsWith(".dmg") && isMacOs) {
        setDownloadUrl(element?.node?.downloadUrl);
      } else if (
        element?.node?.name.endsWith(".deb") &&
        !isMacOs &&
        !isWindows
      ) {
        setDownloadUrl(element?.node?.downloadUrl);
      }
    });
  }, []);

  return (
    <>
      <Menu />

      <Tab.Group as={Fragment}>
        <div className="bg-primary bg-gradient-to-tr from-primaryDHue to-primaryLHue pb-52">
          <div className="container mx-auto">
            {/* <Menu /> */}
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
                  Scripture editing made simple
                </p>
              </motion.div>

              <div className="my-24 mx-auto justify-center md:flex xl:w-2/5">
                {/* <div className="mx-4 mb-10 flex flex-col items-center md:mb-0 md:w-1/2 xl:mx-10">
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
                </div> */}
                <div className="mx-4 flex flex-col items-center md:w-1/2 xl:mx-10">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={downloadUrl}
                    className="block items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-secondary 
                                p-2 px-4 text-base font-bold 
                                text-white shadow-sm hover:bg-white hover:text-secondary xl:px-8 xl:py-4 xl:text-2xl"
                  >
                    Download {version}
                  </motion.a>
                  <div className="my-5 flex gap-5">
                    <Releases repo={repo} />
                  </div>
                </div>
              </div>

              <Tab.List className="mx-4 flex space-x-1 border-b border-secondary/30 xl:mx-auto xl:w-2/3">
                {categories.map((category, index) => (
                  <Tab
                    key={index}
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
