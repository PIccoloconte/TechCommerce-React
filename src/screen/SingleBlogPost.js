import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../utils/BlogPosts";
import ImageComponents from "../components/ImageComponents";
import Container from "../components/Container";
const SingleBlogPost = () => {
  const param = useParams();
  const currentPost = blogPosts.find((post) => post.id === Number(param.id));

  const { id, title, date, author, description, tags, image, chapter, hash } =
    currentPost;

  return (
    <Container className="mt-[120px] lg:mt-[150px] px-4 lg:px-10 2xl:px-40 mb-10">
      <p className="mb-6 text-sm text-secondary">{date}</p>
      <h1 className="mb-4 text-3xl font-semibold">{title}</h1>
      <p className="mb-8 text-secondary">{description}</p>

      <ImageComponents
        src={image}
        hash={hash}
        className="object-contain lg:w-[736px] lg:h-[736px] mx-auto mb-8"
      ></ImageComponents>

      {chapter.map((el) => {
        return (
          <section key={el.sectionTitle}>
            <p className="mb-2 text-xl font-semibold">{el.sectionTitle}</p>
            <p className="mb-8">{el.sectionDescription}</p>
          </section>
        );
      })}
      <p className="text-sm text-secondary">{author}</p>
    </Container>
  );
};

export default SingleBlogPost;
