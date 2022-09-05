import { Link, graphql } from 'gatsby';
import {
  formatPostDate,
  formatReadingTime,
  formatNumberOfPhotos,
} from '../utils/helpers';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMdx.edges');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <aside>
          <Bio />
        </aside>
        <main>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            const indexImage = get(node, 'frontmatter.indexImage');
            return (
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'var(--textNormal)',
                }}
                to={node.fields.slug}
                rel="bookmark"
              >
                <article key={node.fields.slug}>
                  <header>
                    <h3
                      style={{
                        color: 'var(--textLink)',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: rhythm(4 / 5),
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      {title}
                    </h3>
                    <small>
                      {formatPostDate(node.frontmatter.date)}
                      <span style={{ margin: '0 0.15rem' }}>{` • `}</span>
                      {formatReadingTime(node.timeToRead)}
                      <span style={{ margin: '0 0.15rem' }}>{` • `}</span>
                      {formatNumberOfPhotos(node.frontmatter)}
                    </small>
                  </header>
                  <p
                    style={{ marginTop: '5px' }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler,
                    }}
                  />

                  {indexImage && (
                    <GatsbyImage
                      image={getImage(indexImage)}
                      alt={'Blog Image'}
                    />
                  )}
                </article>
              </Link>
            );
          })}
        </main>
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { category: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            indexImage {
              childImageSharp {
                gatsbyImageData(width: 800, layout: CONSTRAINED)
              }
            }
            images {
              id
            }
            blogImages {
              id
            }
          }
        }
      }
    }
  }
`;
