import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/PostPreview';

const IndexPage = () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Charlotte!</p>
      <Link to="/about/">Learn about me! &rarr; </Link>

      <h2>Read my Blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default IndexPage;
