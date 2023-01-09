// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Any file inside the folder pages/api is mapped to /api/* and
// will be treated as an API endpoint instead of a page.

import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient, gql } from "graphql-request";

// endpoint for comments
const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "";

const comments = async (req: NextApiRequest, res: NextApiResponse) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });
  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, req.body);
  } catch (error) {
    console.log(error);
  }

  // return res.status(200).send(result);
};

export default comments;
