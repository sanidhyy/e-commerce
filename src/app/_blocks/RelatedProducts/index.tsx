import React from "react";

import { Product } from "../../../payload/payload-types";
import { Card } from "../../_components/Card";
import { Gutter } from "../../_components/Gutter";

import classes from "./index.module.scss";

export type RelatedProductsProps = {
  blockType: "relatedProducts";
  blockName: string;
  introContent?: any;
  docs?: (string | Product)[];
  relationTo: "products";
};

export const RelatedProducts: React.FC<RelatedProductsProps> = (props) => {
  const { docs, relationTo } = props;

  return (
    <div className={classes.relatedProducts}>
      <Gutter>
        <h3 className={classes.title}>Related Products</h3>
        <div className={classes.grid}>
          {docs?.map((doc, index) => {
            if (typeof doc === "string") return null;

            return (
              <Card
                key={index}
                relationTo={relationTo}
                doc={doc}
                showCategories
              />
            );
          })}
        </div>
      </Gutter>
    </div>
  );
};
