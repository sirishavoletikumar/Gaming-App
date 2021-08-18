

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPost} from './actions'

function Blogredux() {
  const myPost = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  console.log(myPost);
  
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <>
      {myPost.post.map((p) => (
        <li>{p.body} {" "} {p.title}</li>
       
      ))}
    </>
  );
}
export default Blogredux;