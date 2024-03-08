import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const AniStoreDashboard = ()=>{
    return(
        <div className="container-fluid">
            <header className="text-bg-white text-center text-success" style={{border:"5px solid green"}}>
                <h2>Welcome to Anime Store Dashboard</h2>
            </header>
            <section className="row mt-2 mb-2">
                <nav className="col-3 mt-2 mb-2">
                    <div className="mt-2 mb-2">
                        <Link to="getAnimes"><Button variant="contained" size="small" className="text-bg-success w-100"><b>All Anime Posts</b></Button></Link>
                    </div>
                </nav>
                <main className="mt-2 mb-2 col-8">
                    <Outlet/>
                </main>
            </section> 
        </div>
    )
}
export default AniStoreDashboard;