import React from "react";

import {  GetDownloadUrlQuery } from "@/graphql/graphql";

import AppleLogo from "../../public/logos/apple.svg";
import LinuxLogo from "../../public/logos/linux.svg";
import WindowsLogo from "../../public/logos/windows.svg";
import styles from "../../styles/Home.module.css";


export default function Releases({ repo }: { repo: GetDownloadUrlQuery }) {

  const filtered = repo?.repository?.releases?.nodes?.filter(a => a?.isPrerelease === false);


  // const relAssets = repo?.repository?.releases?.nodes![0]?.releaseAssets.edges;

  const relAssets = filtered![0]?.releaseAssets.edges;

  // let relAssets = repoNode?.releaseAssets?.edges;

  // relAssets = relAssets?.filter(
  //   (el) => el?.node?.contentType == "application/octet-stream"
  // );

  // if (isLoading) {
  //   return <h1 className={styles.title}>Loading</h1>;
  // }

  // if (isError) {
  //   return <h1 className={styles.title}> ERROR</h1>;
  // }

  // if (isFetching) {
  //   return <h1 className={styles.title}> Fetching</h1>;
  // }

  // function download(url: string) {
  //   if (typeof window !== "undefined") {
  //     window.location.href = url;
  //   }
  // }

  return (
    <div className="flex gap-5 text-xs font-medium tracking-wider text-white xl:text-base">
      {relAssets?.map((element, index) => {
      
        if (element?.node?.name.endsWith(".exe"))
          return (
            <a
              className="flex flex-col items-center justify-center gap-3"
              target="_blank"
              rel="noreferrer"
              href={element?.node?.downloadUrl}
              key={index}
            >
              <WindowsLogo className="h-4 text-white xl:h-8" />
              Windows
            </a>
          );
        if (element?.node?.name.endsWith(".deb"))
          return (
            <a
              className="flex flex-col items-center justify-center gap-3"
              target="_blank"
              rel="noreferrer"
              href={element?.node?.downloadUrl}
              key={index}
            >
              <LinuxLogo className="h-4 text-white xl:h-8" />
              Linux
            </a>
          );
        if (element?.node?.name.endsWith(".dmg"))
          return (
            <a
              className="flex flex-col items-center justify-center gap-3"
              target="_blank"
              rel="noreferrer"
              href={element?.node?.downloadUrl}
              key={index}
            >
              <AppleLogo className="h-4 text-white xl:h-8" />
              MacOSX
            </a>
          );
      })}
    </div>
  );
}
