const initialState = {
   post: [""]
 };
 
 const fetchThePost = (state = initialState, action) => {
   switch (action.type) {
     case "FETCHPOST":
       return {
         ...state,
         post: action.payload
       };
     default:
       return state;
   }
 };
 export default fetchThePost;