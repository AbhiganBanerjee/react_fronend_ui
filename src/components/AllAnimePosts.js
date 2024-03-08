import { ChevronLeft, ChevronRight, MoreHoriz } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, CssBaseline, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const AllAnimePosts = ()=>{

    //Load all animes into an array of jsons
    const[animes,setAnimes] = useState([{}]);
    const[len,setLen] = useState(0);
    const[idx,setIdx] = useState(0);
    const[timer,setTimer] = useState(0);
 
    useEffect(()=>{
        axios("https://node-versel.onrender.com/")
        .then((res)=>{
            setAnimes(res.data);
            setLen(res.data.length);
        })
    },[])

    const favClick = (e)=>{
        var btn = document.getElementById("favBtn");
        if(btn.className === "bi bi-heart text-white"){
            btn.className = "bi bi-heart-fill text-danger";
            alert(`Item Added to Favaourites.`);
        }else{
            btn.className = "bi bi-heart text-white";
            alert(`Item Removed from Favourites!`);
        }
    }

    const sendClick = ()=>{
        var btn = document.getElementById("sendBtn");
        if(btn.className === "bi bi-send text-white"){
            btn.className = "bi bi-send-fill text-danger";
        }else{
            btn.className = "bi bi-send text-white";
        }
    }

    const chatClick = ()=>{
        var btn = document.getElementById("chatBtn");
        if(btn.className === "bi bi-chat text-white"){
            btn.className = "bi bi-chat-fill text-danger";
        }else{
            btn.className = "bi bi-chat text-white";
        }
    }

    const bookClick = ()=>{
        var btn = document.getElementById("bookBtn");
        if(btn.className === "bi bi-bookmark text-white"){
            btn.className = "bi bi-bookmark-fill text-danger";
            alert('Bookmark added...');
        }else{
            btn.className = "bi bi-bookmark text-white";
            alert('Bookmark removed...');
        }
    }

    const prevClick = ()=>{
        setIdx((idx-1+len)%len);
    }

    const nextClick = ()=>{
        setIdx((idx+1)%len);
    }

    const playPauseClick = ()=>{
        var btn = document.getElementById("playPauseBtn");
        var sts = document.getElementById("status");
        if(btn.className === "bi bi-play-circle-fill text-white"){
            btn.className = "bi bi-pause-circle-fill text-danger";
            sts.innerHTML = `SlideShow has started :)`.bold().fontcolor('white');
            setTimer(setInterval(()=>{
                setIdx((prevIdx)=>(prevIdx+1)%len);
            },2000))
        }else{
            btn.className = "bi bi-play-circle-fill text-white";
            sts.innerHTML = `SlideShow has stopped! :(`.bold().fontcolor('white');
            clearInterval(timer);
        }
    }

    return(
        <Container className="container-fluid">
            <header className="text-center m-2" style={{color:"green",border:"3px solid green"}}> 
                <h4>All Animes Are Displayed Here</h4>
            </header>

            <Container component="main" className="mt-3 mb-3" maxWidth="xs">
                <CssBaseline/>
                <Card className="text-bg-dark text-white">

                    {/* Card Header */}
                    <CardHeader 
                        avatar = {<Avatar src={animes[idx].image}/>}
                        action = {
                            <IconButton className="text-white">
                                <MoreHoriz/>
                            </IconButton>
                        }
                        title = {animes[idx].title}
                    />

                    {/* Card Body */}
                    <CardContent className="card-body">
                        <Typography>
                            Author : <b>{animes[idx].author}<br/></b>
                            Price : <b>{animes[idx].price}</b>
                        </Typography>
                        <div className="row mt-2">
                            <CardActions className="col-1 d-flex flex-column justify-content-center">
                                <Button onClick={prevClick} size="small" variant="text" color="info"><ChevronLeft/></Button>
                            </CardActions>
                            
                            <div className="col-10 d-flex flex-column">
                                <CardMedia
                                    component="img"
                                    image={animes[idx].image}
                                    height={340}
                                    alt={animes[idx].title}
                                />
                                <p className="text-center" id="status"></p>
                            </div>
                            
                            <CardActions className="col-1 d-flex flex-column justify-content-center">
                                <Button onClick={nextClick} size="small" variant="text"  color="info"><ChevronRight/></Button>
                            </CardActions>
                        </div>
                    </CardContent>

                    {/* Card Footer */}
                    <div className="card-footer row" style={{borderTop:"1px solid white"}}>
                        <div className="col-1 d-flex flex-column" style={{marginLeft:"15px"}}>
                            <IconButton  onClick={favClick}>
                                <span  id="favBtn" className="bi bi-heart text-white"></span>
                            </IconButton>
                        </div>
                        <div className="col-1 d-flex flex-column">
                            <IconButton onClick={chatClick}>
                                <span id="chatBtn" className="bi bi-chat text-white"></span>
                            </IconButton>
                        </div>
                        <div className="col-1 d-flex flex-column">
                            <IconButton onClick={sendClick}>
                                <span id="sendBtn" className="bi bi-send text-white"></span>
                            </IconButton>
                        </div>

                        <div className="col-6 d-flex flex-column"/>

                        <div className="col-1 d-flex flex-column">
                            <IconButton onClick={playPauseClick}>
                                <span id="playPauseBtn" className="bi bi-play-circle-fill text-white"></span>
                            </IconButton>
                        </div>
                        <div className="col-1 d-flex flex-column">
                            <IconButton onClick={bookClick}>
                                <span id="bookBtn" className="bi bi-bookmark text-white"></span>
                            </IconButton>
                        </div>
                    </div>
                </Card>
            </Container>
        </Container>
    )
}
export default AllAnimePosts;