import React from "react";
import Header from "../components/header";
import Link from "gatsby-link";

export default () => (
  <div style={{ color: `purple` }}>
    <Header headerText="About Gatsby" />
    <Link to="/phrase1/">phrase1</Link>
    <p>What a world.</p>
  </div>
);
