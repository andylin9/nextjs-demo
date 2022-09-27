import type { NextPage } from "next";
import { GetStaticProps } from 'next'

const Home:NextPage<Post> = ({ post: { id } }: Post) => {
  return (
    <div>
      {id.map((id) => (
        <div key={id}>{id}</div>
      ))}
    </div>
  );
};

export default Home;

// https://nextjs.org/docs/basic-features/typescript#static-generation-and-server-side-rendering
// 必須要用箭頭函數的寫法
export const getStaticProps: GetStaticProps<Post> = async (context) => {
  const res = await fetch("http://localhost:3333/post");
  const post = await res.json();

  return {
    props: {
      post,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 20, // In seconds
  };
}
