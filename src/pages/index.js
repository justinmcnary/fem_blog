import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello Charlotte!</p>
    <Link to="/about/">Learn about me! &rarr; </Link>
  </Layout>
);

export default IndexPage;
