import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="d-flex justify-content-center flex-wrap mb-5">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className="col-sm-6 col-m-3 col-lg-3 col-xl-3"
              key={post.id}
            >
              <div className="card shadow">
                <Link className="" to={post.fields.slug}>
                  <img
                    src={".." + post.frontmatter.images[0].image}
                    className="card-img-top"
                    alt=""
                    style={{
                      height: "12rem"
                    }}
                  />
                </Link>
                <div className="card-footer">{post.frontmatter.title}</div>
                <div className="card-body">
                  <p className="card-text">
                    {post.frontmatter.shortDescription}
                  </p>
                  <hr />
                  <span className="">{post.frontmatter.date}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                images {
                  image
                }
                shortDescription
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
