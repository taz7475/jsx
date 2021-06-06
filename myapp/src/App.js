/** @format */
import "./App.css";
import ReactPlayer from "react-player";
import image from "./images/party.jpg"
import "./style.css"
function App() {
  return (
    <>
    <div className="page">
      <div
        style={{
          border: "solid black",
          maxWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          color:'black',
          padding:'20px'
        }}>
      
        <h1>Moatez Boazizi</h1>
        </div>
      
      <br />
      <div style={{display:'flex' , justifyContent:'center',marginTop:'10px'}}>
        <img src="/dj.jpg" height={200} width={300} />
        </div>
        <br />
        <div style={{display:'flex' , justifyContent:'center' , margin:'20px'}}>
        <img src={image} height={500} width={1000} />
        </div>
        

      <div className="stepbystep">
        <ReactPlayer url="https://www.youtube.com/watch?v=-ObdvMkCKws" />
      </div>
      </div>
    </>
  );
}

export default App;
