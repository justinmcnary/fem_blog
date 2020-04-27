import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/Header';

const IndexPage = () => (
  <>
    <Header siteTitle="Home" />
    <p>Hello Charlotte!</p>
    <Link to="/about/">Learn about me! &rarr; </Link>
  </>
);

export default IndexPage;
