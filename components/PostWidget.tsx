import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
    console.log(relatedPosts);
  }, []);
  return <div>PostWidget</div>;
};

export default PostWidget;
