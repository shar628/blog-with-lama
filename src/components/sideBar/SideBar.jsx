import './sideBar.css'

export default function SideBar() {
  return (
    <div className='sidebar' > 
<div className="sidebarItem">
  <span className="sidebarItem">
    ABOUT ME
  </span>
  <img className='sidebarImg' src="https://geoguessr.com/seterra/images/system/african-elephant.jpg" alt="duck" />
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. veritatis dolor, ullam quam cupiditate quae eum totam quos, maiores  animi!</p>
</div>
<div className="sidebarItem">
  <span className="sidebarTitle">CATEGORIES</span>
  <ul className="sidebarList">
    <li className="sidebarListItem">Life</li>
    <li className="sidebarListItem">Music</li>
    <li className="sidebarListItem">Stile</li>
    <li className="sidebarListItem">Sport</li>
    <li className="sidebarListItem">Tech</li>
    <li className="sidebarListItem">Cinema</li>
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
  )
}
