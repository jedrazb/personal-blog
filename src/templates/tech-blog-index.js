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

class TechBlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMdx.edges');

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      url: 'https://j.blaszyk.me/tech-blog/',
      name: 'Tech Blog',
    };

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={'Tech Blog'}
          location={this.props.location}
          description={'Tech blog by Jedr Blaszyk.'}
          structuredData={structuredData}
        />
        <aside>
          <h1 style={{ marginTop: 0 }}>Tech Blog</h1>
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
                to={`/${node.fields.category}${node.fields.slug}`}
                rel="bookmark"
              >
                <article
                  key={node.fields.slug}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '20px',
                    border: 'solid 1px var(--post-outline)',
                    marginBottom: '1.5rem',
                  }}
                >
                  <header>
                    <h3
                      style={{
                        color: 'var(--textLink)',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: rhythm(4 / 5),
                        marginBottom: rhythm(1 / 3),
                        marginTop: rhythm(1 / 3),
                        paddingTop: rhythm(1 / 3),
                        paddingLeft: rhythm(1 / 3),
                        paddingRight: rhythm(1 / 3),
                        paddingBottom: rhythm(1 / 6),
                      }}
                    >
                      {title}
                    </h3>

                    {indexImage && (
                      <GatsbyImage
                        image={getImage(indexImage)}
                        alt={'Blog Image'}
                      />
                    )}

                    <div
                      style={{
                        padding: rhythm(1 / 3),
                        paddingBottom: 0,
                        paddingTop: rhythm(1 / 5),
                      }}
                    >
                      <small>
                        {formatPostDate(node.frontmatter.date)}
                        <span style={{ margin: '0 0.15rem' }}>{` • `}</span>
                        {formatReadingTime(node.timeToRead)}
                      </small>
                    </div>
                  </header>
                  <p
                    style={{
                      padding: rhythm(1 / 3),
                      marginBottom: 0,
                      paddingTop: rhythm(1 / 6),
                    }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler,
                    }}
                  />
                </article>
              </Link>
            );
          })}
        </main>
      </Layout>
    );
  }
}

export default TechBlogIndexTemplate;

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
      filter: { fields: { category: { eq: "tech-blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
            category
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
