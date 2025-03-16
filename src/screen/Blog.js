import React from "react";
import BlogArticle from "../components/BlogArticle";
import { blogPosts } from "../utils/BlogPosts";
import Container from "../components/Container";

const Blog = () => {
  return (
    <Container className="mt-[97px] lg:mt-[150px] px-4 lg:px-10 2xl:px-40">
      {" "}
      <header className="py-10 text-center border-b-2">
        <h1 className="text-5xl font-extrabold">CYBER BLOG</h1>
      </header>
      <h2 className="mt-10 mb-8 text-2xl font-bold">Recent blog Post</h2>
      {/* First Banner */}
      <div className="xl:flex xl:gap-8">
        <section className="my-10 text-3xl font-bold xl:flex-1">
          <BlogArticle
            key={blogPosts[0].id}
            {...blogPosts[0]}
            variant="single"
            imgStyle="w-[300px] h-[300px] object-contain"
          ></BlogArticle>
        </section>
        <section className="my-10 xl:flex-1">
          <div className="">
            {blogPosts.slice(1, 3).map((post) => (
              <BlogArticle
                key={post.id}
                {...post}
                variant="list"
                imgStyle="w-[300px] h-[300px] xl:w-[250px] xl:h-[250px] object-contain"
              ></BlogArticle>
            ))}
          </div>
        </section>
      </div>
      {/* Grid section */}
      <section className="my-10">
        <h2 className="mb-4 text-2xl font-bold">All blog posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {blogPosts.slice(1).map((post) => (
            <BlogArticle
              key={post.id}
              {...post}
              imgStyle="w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] object-contain"
            ></BlogArticle>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Blog;
