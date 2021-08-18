import axios from "axios";

export const fetchPost = () => async (dispatch) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      dispatch({
        type: "FETCHPOST",
        payload: response.data
      });
    });
};

export const DeletePost = () => {
  return {
    type: "DELETEPOST"
  };
};

//dispatch== send