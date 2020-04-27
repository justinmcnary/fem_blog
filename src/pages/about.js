import React from 'react';
import { Link } from 'gatsby';

export const about = () => (
  <>
    <h1>About Me</h1>
    <p>This is a personal website</p>
    <Link to="/">&larr; back to home</Link>
  </>
);

export default about;
