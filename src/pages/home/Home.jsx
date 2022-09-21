import Header from '../../components/header/Header'
import './home.css'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sideBar/SideBar'
export default function Home() {
  return (
    <>
        <Header />
         <div className='home' >
         <Posts />
         <SideBar />
        </div>
   </>
  )
}
