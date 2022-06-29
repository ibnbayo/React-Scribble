import memesData from "./memesData";
import {useState} from "react"

function Meme(){
    const [vibe, setVibe] = useState("Mandela")
    console.log(vibe)
    const [count, setCount] = useState(0)
    console.log(count)
    const [memeImage, setMemeImage] = useState('https://picsum.photos/seed/picsum/200/300') 
    console.log(memeImage)
    const [goingOut, setGoingOut] = useState(true)
    const [thingzArray, setThingz] = useState(["Thingz 1", "Thingz 2"])
    const pThingz = thingzArray.map(i => <p>{i}</p>)
    console.log(pThingz)
    const thingsArray=["Thing 1", "Thing 2"]

    
    const [meme, setMeme] = useState({
        topText: 'x',
        bottomText: 'y',
        randomImage: 'https://picsum.photos/seed/picsum/200/300'
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    let items = thingsArray.map(thing => <p>{thing}</p>)
    console.log(items)
    function handleClick() {
        console.log("I was clicked");
        setVibe('Malcolm X')
    }
    function incCount() {
        setCount(count+1)
        console.log(count)
    }
    function deCount() {
        setCount( prevCount => prevCount - 1)
        console.log(count)
    }
    function clickGoingOut() {
        setGoingOut(goingOut => !goingOut)
    }
    function handleHover(){
        console.log("Hovered over");
    }
    
    function getImg() {
        const memesArray= memesData.data.memes
        console.log(memesArray)
        const randomNum= Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        console.log(url)
        setMemeImage(url)
    }
    function addThing() {
        items.push("Thing " + (items.length+1))
        console.log(items)
    }
    function addThingz(){
        setThingz(prevThingz => [...prevThingz, `Thingz ${prevThingz.length + 1}`])

    }

    function getMemeImage(){
        setMeme(prevText => ({
            ...prevText,
            randomImage: allMemeImages.data.memes[`${Math.floor(Math.random()*allMemeImages.data.memes.length)}`].url
        }))
    }
    return(
        <>
        <div className="meme-form">
            <input className="form--input" type="text" placeholder="Top text" />
            <input className="form--input" type = "text" placeholder ="Bottom text"/>
            <button className="form--button" 
                onMouseEnter={handleHover} 
                onClick={getMemeImage}>Get a new meme image
            </button>
            <img src={meme.randomImage} alt="random meme" className="meme-image"/>
            <div>{items}</div>
            <div>{pThingz}</div>
            <button className="things-button" onClick={addThing}>Add Things</button>
            <button className="things-button" onClick={addThingz}>Add Thingz</button>
        </div>
        <div className="state">
            <h1 className="state--title">Is state important?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{vibe}</h1>
            </div>
        </div>
        <div className="counter">
            <button className="minus" onClick={deCount}> - </button>
            <h3 className="count"> {count} </h3>
            <button className="plus" onClick={incCount}> + </button>
        </div>
        <div className="going-out">
            <h2 className="question-out">Do you wanna go out tonight?</h2>
            <h3 className="answer-out" onClick={clickGoingOut}>{goingOut? 'Yes' : 'No'}</h3>
        </div>
        </>
    

    )
}

export default Meme