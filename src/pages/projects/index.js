import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="p-5 text-center"/>
        <section className="">
          <div className="">
            <div className="" >
              <BlogRoll/>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
