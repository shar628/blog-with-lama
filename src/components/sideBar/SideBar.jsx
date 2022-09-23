import { useEffect } from "react";
import { useState } from "react";
import "./sideBar.css";
import axios from "axios";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  console.log(cats);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarItem">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://geoguessr.com/seterra/images/system/african-elephant.jpg"
          alt="duck"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. veritatis
          dolor, ullam quam cupiditate quae eum totam quos, maiores animi!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">{c.name} </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}
