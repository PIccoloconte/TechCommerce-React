import React from "react";
import AirPods from "../assets/img/AirPods.png";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from "react-router-dom";

const BlogArticle = ({
  id,
  title,
  date,
  author,
  description,
  tags,
  image,
  variant,
  chapter,
}) => {
  return (
    <article
      key={id}
      className={`${variant === "list" ? "md:flex" : "block"}  w-full`}
    >
      <img
        src={image}
        alt={title}
        className={`${
          variant === "list" ? "w-full md:max-w-[320px] md:h-52  " : "w-full"
        } object-contain `}
      />
      <Link
        to={`/SingleBlogPost/${id}`}
        className="text-xl font-semibold text-footer_color hover:underline"
      >
        <div className="p-4">
          <p className="text-sm text-[#A0A0A0]">
            {author} • {date}
          </p>
          <div className="flex items-center justify-between gap-6 text-xl text-black">
            <h3 className="mt-2 mb-4 text-lg font-semibold">{title}</h3>
            <ImArrowUpRight2 className="text-xl font-semibold text-footer_color hover:underline"></ImArrowUpRight2>
          </div>
          <p className="mb-4 text-sm text-[#A0A0A0] line-clamp-2">
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
