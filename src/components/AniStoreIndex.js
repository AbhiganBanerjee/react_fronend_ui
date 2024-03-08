import { Button } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AniStoreDashboard from "./AniStoreDashboard";
import AllAnimePosts from "./AllAnimePosts";
import AniStoreHome from "./AniStoreHome";


const AniStoreIndex = ()=>{
    return(
        <div className="container-fluid">
            <header className="text-center text-bg-success text-white m-2 p-2 mb-2">
                <h1>Welcome to Anime Store Index Page</h1>
            </header>
            <BrowserRouter>
                <section className="row mt-2 mb-2">   
                    <nav className="mt-2 mb-2 col-3">
                        <div className="mt-2 mb-2">
                            <Link to="/home"><Button variant="contained" size="large" className="text-bg-success w-100" ><b>Go To Home</b></Button></Link>
                        </div>
                        <div className="mt-2 mb-2">
                            <Link to="/dashboard"><Button variant="contained" size="large"  className="text-bg-success w-100" ><b>Dashboard</b></Button></Link>
                        </div>
                    </nav>
                    <main className="col-8 mt-2 mb-2">
                        <Routes>
                            <Route path="home" element={<AniStoreHome/>}></Route>
                            <Route path="dashboard" element={<AniStoreDashboard/>}>
                                <Route path="getAnimes" element={<AllAnimePosts/>}></Route>
                            </Route>
                        </Routes>
                    </main>
                </section>   
            </BrowserRouter>
        </div>
    )
}
export default AniStoreIndex;