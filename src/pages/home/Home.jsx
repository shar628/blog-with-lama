import Header from "../../components/header/Header";
import "./home.css";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sideBar/SideBar";
import { useState, useEffect } from "react";

import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
