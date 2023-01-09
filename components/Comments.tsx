import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import parse from "html-react-parser";

const Comments = ({ slug }: any) => {
  const [comments, setComments] = useState([]);
  return <h1>Comments</h1>;
};

export default Comments;
