import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog";
import Create from "./Components/Create";
import './Stayle/Blog.css'




const App = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={<Blog />} />
                <Route path="/create" element={<Create />} />


            </Routes>


        </>
    );
}


export default App;
