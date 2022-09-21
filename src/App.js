import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./components/write/Write";
import Single from "./pages/home/single/Single";
import Settings from "./pages/settings/Settings";
import {
  Route,
  // Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
function App() {
  const user = false;
  return (
    < BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/register" element={user ? <Home /> : <Register />} ></Route>
        <Route path="/login" element={user ? <Home /> : <Login />} ></Route>
        <Route path="/write" element={user ? <Write /> : <Register />} ></Route>
        <Route path="/settings" element={user ? <Settings /> : <Register />} ></Route>
        <Route path="/post/:postId" element={<Single />} ></Route>

      </Routes>

      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </BrowserRouter>
  );
}

export default App;
