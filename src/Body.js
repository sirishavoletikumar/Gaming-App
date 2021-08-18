import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Body(props) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      );

      setPost(response.data);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
