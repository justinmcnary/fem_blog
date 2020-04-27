import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export const about = () => (
  <Layout>
    <h1>About Me</h1>
    <p>This is a personal website</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default about;
