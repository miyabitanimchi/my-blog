import React from 'react';

interface PostProp {
  title: string;
  excerpt: string;
}

const PostCard = ({ title, excerpt }: PostProp) => {
  return (
    <div>
      {title}
      {excerpt}
    </div>
  );
};

export default PostCard;
