import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Post from "./pages/Post";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/post" element={<Post />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
     
    </Routes>
 </BrowserRouter>
   
  );
}

export default App;
