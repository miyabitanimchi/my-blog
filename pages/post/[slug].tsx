import React from "react";
import { getPosts } from "../../services";
import {
  PostWidget,
  Categories,
  Author,
  PostDetail,
  Comments,
  CommentsForm,
} from "../../components";

const PostDetails = () => {
  return (
    <div className="container mx-auto px-10 mb-8 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
