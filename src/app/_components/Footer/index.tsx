import React from "react";

import { Footer } from "../../../payload/payload-types";
import { fetchFooter } from "../../_api/fetchGlobals";
import FooterComponent from "./FooterComponent";

export async function Footer() {
  let footer: Footer | null = null;

  try {
    footer = await fetchFooter();
  } catch (error) {
    console.error(error);
  }

  const navItems = footer?.navItems || [];

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  );
}
