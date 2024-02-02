import React from "react"
import './App.css'
import Header from "./Components/Header";
import Card from "./Components/card";
import Array from "./Components/Array";

function App() {
  const arr1 = Array.map((data)=>{
    return <Card 
    {...data}
    // img={data.img}
    // img1={data.img1}
    // num={data.num}
    // city={data.city}
    // line={data.line}
    // line1={data.line1}
    // line2={data.line2} />
    />
  }
    )
  return (
    <>
<Header />
<div className="card">
{arr1}
</div>
{/* <Card img="../src/images/image 12.png" img1="../src/images/Star 1.png" num={5.0} num1={6}
city="USA" line="Life lessons with Katie Zaferes" line1="From $136"line2="/ person" />
<Card img="../src/images/wedding-photography 1.png" img1="../src/images/Star 1.png" num={5.0} num1={30}
city="USA" line="Learn wedding photography" line1="From $125"line2="/ person" />
<Card img="../src/images/mountain-bike 1.png" img1="../src/images/Star 1.png" num={4.8} num1={2}
city="USA" line="Group Mountain Biking" line1="From $50"line2="/ person" /> */}

    </>
  )
}
export default App
