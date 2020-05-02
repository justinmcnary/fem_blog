import React from 'react';
import Layout from '../components/Layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/PostPreview';
import Hero from '../components/Hero';

const IndexPage = () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};

export default IndexPage;
