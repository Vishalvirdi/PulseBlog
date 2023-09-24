import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./components/UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPage";
function App() {
  return (
    <UserContextProvider >
      <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />}></Route>
        <Route path={"/login"} element={<LoginPage />}></Route>
        <Route path={"/register"} element={<RegisterPage />}></Route>
        <Route path={"/create"} element={<CreatePost />}></Route>
        <Route path={"/post/:id"} element={<PostPage />}></Route>
        <Route path="/edit/:id" element={<EditPost />} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
