import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../utils/BlogPosts";

const SingleBlogPost = () => {
  const param = useParams();
  const currentPost = blogPosts.find((post) => post.id === Number(param.id));

  const { id, title, date, author, description, tags, image, chapter } =
    currentPost;

  return (
    <div className="mt-[120px] lg:mt-[150px] px-4 lg:px-10 2xl:px-40 mb-10">
      <p className="text-[#A0A0A0] text-sm mb-6">{date}</p>
      <h1 className="mb-4 text-3xl font-semibold">{title}</h1>
      <p className="mb-8">{description}</p>
      <img src={image} alt={title} className="w-full mb-8"></img>
      {chapter.map((el) => {
        return (
          <section key={el.id}>
            <p className="mb-2 text-xl font-semibold">{el.sectionTitle}</p>
            <p className="mb-8">{el.sectionDescription}</p>
          </section>
        );
      })}
      <p className="text-[#A0A0A0] text-sm">{author}</p>
    </div>
  );
};

export default SingleBlogPost;
