import React, { useState } from "react";
import Post from "./Post"

function App() {
  const [categories] = useState(["Gaming", "Tech", "Sports"]);
  const [category, setCat] = useState();
  const [post, setPost] = useState("");
  const [GamingPost, setGamingPost] = useState([]);
  const [TechPost, setTechPost] = useState([]);
  const [SportsPost, setSportsPost] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editValue, setEditValue] = useState(" ");
  const [editCat, setEditCat] = useState();
  const [updatedValue, setUpdatedValue] = useState();

  const handleSelect = (e) => {
    setCat(e.target.value);
    console.log(e.target.value);
  };

  const handlePost = (e) => {
    setPost(e.target.value);
    console.log(e.target.value)
    
  };
 
  const handleDelete = (cat, post) => {
    if (cat === "Gaming") {
      setGamingPost(GamingPost.filter((deletedpost) => deletedpost !== post));
    } else if (cat === "Tech") {
      setTechPost(TechPost.filter((deletedpost) => deletedpost !== post));
    } else if (cat === "Sports") {
      setSportsPost(SportsPost.filter((deletedpost) => deletedpost !== post));
    }
  };

  const handleSubmit = (e) => {
    if (category === "Gaming") {
      setGamingPost([...GamingPost, post]);
    } else if (category === "Tech") {
      setTechPost([...TechPost, post]);
    } else if (category === "Sports") {
      setSportsPost([...SportsPost, post]);
    }
    e.preventDefault();
    e.target.reset();
    
  };
  const handleEdit = (cat, post) => {
    setEditValue(post);
    setShowForm(true);
    setEditCat(cat);
    setUpdatedValue(post);
  };

  const getpost = (cat) => {
    if (cat === "Gaming") {
      return (
        <>
          {GamingPost.map((gp) => (
            <li>
              {gp}
              <button onClick={() => handleDelete(cat, gp)}>delete</button>
              <button onClick={() => handleEdit(cat, gp)}>edit</button>
            </li>
          ))}
        </>
      );
    } else if (cat === "Tech") {
      return (
        <>
          {TechPost.map((tp) => (
            <li>
              {tp}
              <button onClick={() => handleDelete(cat, tp)}>delete</button>
              <button onClick={() => handleEdit(cat, tp)}>edit</button>
            </li>
          ))}
        </>
      );
    } else if (cat === "Sports") {
      return (
        <>
          {SportsPost.map((sp) => (
            <li>
              {sp}
              <button onClick={() => handleDelete(cat, sp)}>delete</button>
              <button onClick={() => handleEdit(cat, sp)}>edit</button>
            </li>
          ))}
        </>
      );
    }
  };

  const form = () => {
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>categories:</label>
          <select onChange={(e) => handleSelect(e)}>
            <option>select from category</option>
            {categories.map((cat) => (
              <option>{cat}</option>
            ))}
          </select>
          <br />
          <br />
          <label>Post</label>
          <textarea onChange={(e) => handlePost(e)}></textarea>
          {/* <input type="reset" defaultValue="Reset" />    */}
          <br />
          <br />
          <button>submit</button>
        </form>
      </div>
    );
  };
  const inputEditChange = (e) => {
    setEditValue(e.target.value);
  };
  const editSubmitData = () => {
    console.log(editValue);
    console.log(updatedValue);

    if (editValue) {
      if (editCat === "Gaming") {
        const UpdatedPost = GamingPost.map((gp) => {
          if (gp === updatedValue) {
            console.log(gp);
            return editValue;
          } else return gp;
        });

        setGamingPost(UpdatedPost);
      } else if (editCat === "Tech") {
        const UpdatedPost = TechPost.map((tp) => {
          if (tp === updatedValue) {
            return editValue;
          } else return tp;
        });
        setTechPost(UpdatedPost);
      } else if (editCat === "Sports") {
        const UpdatedPost = SportsPost.map((sp) => {
          if (sp === updatedValue) {
            return editValue;
          } else return sp;
        });
        setSportsPost(UpdatedPost);
      }
    }
    setShowForm(false);
  };

  const editForm = () => {
    return (
      <div>
        <h3>Edit Form</h3>
        <label>Post</label>
        {""}
        <input
          defaultValue={post}
          onChange={(e) => inputEditChange(e)}
          type="text"
        />
        <br />
        <br />
        <button onClick={() => editSubmitData()}>Submit</button>
      </div>
    );
  };

  const Blog = categories.map((cat) => (
    <div>
      <h2>{cat}</h2>
      <p>{getpost(cat)}</p>
    </div>
  ));
  return (
    <>
      <h1>My Application</h1>
      {form()}
      {showForm && editForm()}
      {Blog}
      <Post cat={categories}/>
    </>
  );
}
export default App;
