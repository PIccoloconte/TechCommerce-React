import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import ImageComponents from "./ImageComponents";

const BlogArticle = ({
  id,
  title,
  date,
  author,
  description,
  tags,
  image,
  variant,
  hash,
  imgStyle,
}) => {
  return (
    <article
      key={id}
      className={`${
        variant === "list" ? "md:flex" : "block"
      }  w-full first:mb-4`}
    >
      <div className={`w-full overflow-hidden md:flex-1`}>
        <ImageComponents
          src={image}
          hash={hash}
          className={imgStyle}
        ></ImageComponents>
      </div>
      <Link
        to={`/SingleBlogPost/${id}`}
        className="text-xl font-semibold text-[#181313] hover:underline md:flex-1"
      >
        <div className="p-4 ">
          <p className="text-sm text-secondary">
            {author} • {date}
          </p>
          <div className="flex items-center justify-between gap-6 text-xl text-black">
            <h3 className="mt-2 mb-4 text-lg font-semibold">{title}</h3>
            <ImArrowUpRight2 className="text-xl font-semibold text-[#181313] hover:underline"></ImArrowUpRight2>
          </div>
          <p className="mb-4 text-sm text-secondary line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogArticle;
