import Nav from "./Component/Nav"
import './App.css'
import Page1 from "./Component/Page1";
import Page2 from "./Component/page2";
import Page3 from "./Component/Page3";
import Page4 from "./Component/Page4";
function App() {
  

  return (
    <div style={{margin:"0 60px 0 60px"}}>
      <Nav/>
      <Page1/>
      <Page2/>
      <br /> <br /><br />  <br />
      <Page3/>
      <br /> <br /><br />  <br />
      
    </div>
  )
}

export default App
