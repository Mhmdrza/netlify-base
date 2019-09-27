import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { kebabCase } from 'lodash';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import path from 'path'

export const ProjectPageTemplate = ({
  content,
  contentComponent,
  images,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="">
      {helmet || ''}
      {images &&
        <div className="">
          <Carousel>
            {images.map(edge => 
              {
                // <StaticQuery query={``} render={data=>
                //   <Img fluid={data.childImageSharp.fluid} className=""/>
                // }/>
                return(
                  <img src={edge.image} alt={""}/>
                )
              }
            )}  
          </Carousel>
        </div>
      }
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="">
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
  console.log(data)
  return (
    <Layout>
      <ProjectPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        images={post.frontmatter.images}
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
        images {
          image
        }
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
    
  }
  `