import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Blog(props) {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    }
    getData();
  }, []);
  console.log(props);
  return (
    <div>
      <h2>this is Blog page{props.match.params.name}</h2>
      <button onClick={() => props.history.goBack()}> Go Back</button>
      {Posts.map((post) => (
        <Link to={`/body/${post.id}`}>{post.title}</Link>
      ))}
    </div>
  );
}
