import type { Metadata } from "next";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  siteName: "Tech Haven",
  title: "Tech Haven",
  description:
    "An open-source e-commerce store built with Payload and Next.js.",
};

export const mergeOpenGraph = (
  og?: Metadata["openGraph"]
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
