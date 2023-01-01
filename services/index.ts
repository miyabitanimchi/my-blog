import { request, gql } from "graphql-request";

const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

// String! means that the field is non-nullable
export const getSimilarPosts = async (categories: string, slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_on: $categories } }
          last: 3
        }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};
