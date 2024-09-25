import Hero from "@/components/hero";
import Container from "@/components/container";
import Meta from "@/components/meta";
import { getAllPosts } from "@/lib/api";
import Posts from "@/components/posts";
import { eyecatchLocal } from "@/lib/constants";

import { getPlaiceholder } from "plaiceholder";

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログ記事一覧" />
      <Hero title="Blog" subtitle="Blogだわっしょい" />

      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}
