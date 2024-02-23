import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>Welcome Home !!!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
};

export default Home;
