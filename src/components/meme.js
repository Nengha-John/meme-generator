import React from "react";
import memData from "../helpers/memData";

export default function Meme(){
    let [memeImage, setMemeImage] = React.useState('')

    function getMemeImage(args){
        let newImg = memData.data[Math.floor(Math.random() * memData.data.length)].url
        setMemeImage(prevImg => newImg)
    }

    let thingsArray = ['Thing 1', 'Thing 2', 'Thing 3']
    let[things, setThings] = React.useState(thingsArray)
    console.log(things)
    let thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    function addItem(){
        setThings(oldArray => [...oldArray,`Thing ${oldArray.length + 1}`])
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
                {/* <img src={} className='col alt='image'></img> */}
                <a href={memeImage } > {memeImage}</a>
            </div>

            <div className="things mt-4">
                <button className="btn btn-success" onClick={addItem}>
                    Add Item
                </button>
                {thingsElements}
            </div>
        </div>
        </div>
    )
}