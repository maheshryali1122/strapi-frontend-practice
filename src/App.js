import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
// import { css } from "styled-components/macro"; //eslint-disable-line

import BlogIndex from "pages/BlogIndex";
import Blog from "pages/Blog.js";
// import Blog from "Blog.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useFetch from "hooks/useFetch";


export default function App() {
  const {loading, error,data} = useFetch('http://ipaddress:1337/api/blogs?populate=*');
  if(loading) return <p>Loading...</p>
  if(error) return console.log(error)



  return (
    <Router>
      <Switch>

      <Route path="/blog/">
          <Blog  />
      </Route>

        <Route path="/">
          <BlogIndex posts={data} />
        </Route>
      </Switch>
    </Router>
  );
}
