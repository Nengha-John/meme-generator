import React from "react";
import memData from "../helpers/memData";
import Count from "./count";

export default function Meme(){
    let [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    let [allMemeImages, setAllMemeImages] = React.useState(memData)

    function getMemeImage(args){
        console.log(allMemeImages,setAllMemeImages)
        let newImg = memData.data[Math.floor(Math.random() * memData.data.length)].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: newImg
        }))
    }

    const [count, setCount] = React.useState(0)

    function increment(){
        setCount(prevCount => prevCount + 1)
    }

    function decrement(){
        setCount(prevCount => prevCount -1)
    }

   
    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
            <form>
                <div className="row">
                    <div className="col text-start">
                        <input type='text' className='form-control' placeholder="Top Text"></input>
                    </div>
                    <div className="col text-start">
                    <input type='text'  className='form-control' placeholder="Bottom Text"></input>
                    </div>
                </div>
            </form>
            <input type='submit' onClick={getMemeImage}  className="btn col-12 text-white mt-4 fs-bold" style={{'backgroundColor': "#672280",fontSize: '16px'}} value='Get new meme image'></input>

            <div className="mt-4">
                <img src={meme.randomImage} className='col' alt={meme.randomImage}></img>
                <a href={meme.randomImage } > {meme.randomImage}</a>
            </div>
        </div>

        <Count number= {count}/>
        <br/>
        <div className="row">

        <div className="col btn btn-success fs-3 p-3" onClick={increment}>  + </div>
        <div className="col btn btn-danger fs-3 p-3" onClick={decrement}>  - </div>
        </div>
        </div>
    )
}