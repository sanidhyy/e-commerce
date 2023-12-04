import Link from "next/link";

import { Category, Media } from "../../../payload/payload-types";

import classes from "./index.module.scss";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media;
  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage: `url(${media.url})` }}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  );
};

export default CategoryCard;
