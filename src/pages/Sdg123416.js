import React from "react";
import { useState} from "react";
import '../style/blob.css'
import Typed from "typed.js"

const iconPaths = [];
const importAll = (myKey) => myKey.keys().forEach(key => iconPaths.push(myKey(key)));
// Import all icons from the Inverted-Icons directory
importAll(require.context('../img/Inverted-Icons/', false, /\.png/));


// Create CONTENT_MASTERLIST dynamically
const CONTENT_MASTERLIST = iconPaths.map((iconPath, index) => ({
  imgsrc: iconPath,
  key: index+1,
}));

function SDG123416(props){
    const el = React.useRef(null);
    const [state,setState] = useState({opacity:0});
    const circles = props.data;
    const [index,setIndex] = useState(2);


    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<b>FOR THE</b> <i>PEOPLE</i>'],
            typeSpeed: 50,
            backSpeed: 100,
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

   

    return (
       
        <div className="section-3" id="sdg1">
             <div className="header1 gradient-title">
                <span ref={el}></span>
            </div>
      
        <div className="circles-sdg-1">
            <div className="circle-container">
                <img className="circle-item img-1" src={CONTENT_MASTERLIST[3].imgsrc}/>
                <div className="blob-container">
                    <div className="blob" onMouseEnter = {(event)=> {
                        setIndex(0);
                        setState({opacity: 100, transition: "ease-in .5s"})
                        
                    }} onMouseLeave={(event) => {
                        setState({opacity: 0, transition: "ease-out .5s"})
                    }}></div>
                </div>
            </div>
    
            <div className="circle-container">
                <img className="circle-item img-2" src={CONTENT_MASTERLIST[1].imgsrc}/> 
                <div className="blob-container-2">
                    <div className="blob-2"  onMouseEnter = {(event)=> {
                        setIndex(1);
                        setState({opacity: 100, transition: "ease-in .5s"})
                        
                    }} onMouseLeave={(event) => {
                        setState({opacity: 0, transition: "ease-out .5s"})
                    }}></div>
                </div>
            </div>

            <div className="circle-container">
                <img className="circle-item img-3" src={CONTENT_MASTERLIST[0].imgsrc}/> 
                <div className="blob-container-3">
                    <div className="blob-3" onMouseEnter = {(event)=> {
                        setIndex(2);
                        setState({opacity: 100, transition: "ease-in .5s"})
                        
                    }} onMouseLeave={(event) => {
                        setState({opacity: 0, transition: "ease-out .5s"})
                    }}></div>
                </div>
            </div>

            <div className="circle-container">
                <img className="circle-item img-4" src={CONTENT_MASTERLIST[2].imgsrc}/> 
                <div className="blob-container-4">
                    <div className="blob-4"  onMouseEnter = {(event)=> {
                        setIndex(3);
                        setState({opacity: 100, transition: "ease-in .5s"})
                        
                    }} onMouseLeave={(event) => {
                        setState({opacity: 0, transition: "ease-out .5s"})
                    }}></div>
                </div>
            </div>

            <div className="circle-container">
                <img className="circle-item img-5" src={CONTENT_MASTERLIST[15].imgsrc}/> 
                <div className="blob-container-5">
                    <div className="blob-5"  onMouseEnter = {(event)=> {
                        setIndex(4);
                        setState({opacity: 100, transition: "ease-in .5s"})
                        
                    }} onMouseLeave={(event) => {
                        setState({opacity: 0, transition: "ease-out .5s"})
                    }}></div>
                </div>
            </div>
        </div>
        
            <div className="circle-whole-content" style={state}>
                <div className="circle-content" > 
                    <p id={index} >{circles[index].content}</p>
                </div>
                <div className="circle-data-container"> 
                    <div className="circle-container-2">
                        <div className="circle-items-2"> 
                            <div className="circle-item"> 
                                <h1> {circles[index].num[0][0]} </h1>
                                <p> {circles[index].num[0][1]} </p>
                            </div>
                        <div className="circle-item"> 
                                <h1> {circles[index].num[1][0]}</h1>
                                <p> {circles[index].num[1][1]} </p>
                            </div>
                        </div>
                    </div>
                    <div className="circle-container-2">
                        <div className="circle-items-2"> 
                            <div className="circle-item"> 
                            <h1> {circles[index].num[2][0]}</h1>
                                <p> {circles[index].num[2][1]} </p>
                            </div>
                            <div className="circle-item"> 
                            <h1> {circles[index].num[3][0]}</h1>
                                <p> {circles[index].num[3][1]} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>   
    );
 
}

export default SDG123416;

