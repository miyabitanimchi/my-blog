import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { getRecentPosts } from "../services";

const PostWidget = ({ categories, slug }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, []);
  return <div>PostWidget</div>;
};

export default PostWidget;
