import react from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
export default function App(){
    return(
        <>
        
        <BrowserRouter>
            <Link to="/a">go to /a </Link>
            <Routes>
                <Route path="/" element={<h1>root</h1>}>
                    
                </Route>
                <Route exact path="/a" element={<h1>about us page </h1>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}