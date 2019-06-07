import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { kebabCase } from 'lodash';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';

export const ProjectPageTemplate = ({
  content,
  contentComponent,
  images,
  description,
  body,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      {images &&
        <div className="silde-container">
          <Carousel>
            {images.map(edge =>
                <Img fluid={edge.node.childImageSharp.fluid} className="slide-imag"/>
              // <img src={edge.node.childImageSharp.fluid.src} alt={edge.node.name}/>
            )}  
          </Carousel>
        </div>
      }
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

ProjectPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        images={post.frontmatter.images}
        body={post.frontmatter.body}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        body
        tags
      }
    }
  }
  `
  
  // featuredimage {
  //   childImageSharp {
  //     fluid(maxWidth: 120, quality: 100) {
  //       ...GatsbyImageSharpFluid
  //     }
  //   }
  // }