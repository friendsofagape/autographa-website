import React, { useState } from "react";

import Link from "next/link";

import { useGetDownloadUrlQuery } from "../graphql/generated/graphql";

import AppleLogo from "../../public/logos/apple.svg";
import WindowsLogo from "../../public/logos/windows.svg";
import LinuxLogo from "../../public/logos/linux.svg";

import styles from "../../styles/Home.module.css";

export default function Releases() {
  const { data, isFetching, isLoading, isError } = useGetDownloadUrlQuery(
    undefined,
    { cacheTime: 43200000, staleTime: Infinity }
  );

  const repoNode = data?.repository?.releases?.nodes![0];

  let relAssets = repoNode?.releaseAssets?.edges;
  relAssets = relAssets?.filter(
    (el) => el?.node?.contentType == "application/octet-stream"
  );

  if (isLoading) {
    return <h1 className={styles.title}>Loading</h1>;
  }

  if (isError) {
    return <h1 className={styles.title}> ERROR</h1>;
  }

  if (isFetching) {
    return <h1 className={styles.title}> Fetching</h1>;
  }

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