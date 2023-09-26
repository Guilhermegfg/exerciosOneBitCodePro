import Poster  from "./components/poster.jsx";
import Title from "./components/title.jsx"
import Desc from "./components/desc.jsx"
import Button from "./components/button.jsx"




export default function App() {
  return (
    <div className="app" >
      <div>
        <Poster/>
      </div>
      
      <div className="text">
        <Title/>
        <Desc/>
        <Button/>
      </div>
     
    </div>
  )
}


