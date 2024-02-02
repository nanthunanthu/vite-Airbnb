

export default function Card(props){
   return(
<>
    <div>
<div>
    {props.batch==0&&<span className="Card-comp">SOLDOUT</span>}
<img className="card-img" src={props.img} alt="Man in swimming pool"></img></div>
<div><img src={props.img1} alt="star image"></img>
<p>{props.num}<span>{props.num1}{props.city}</span></p></div>
<p>{props.line}</p>
<p>{props.line1}<span>{props.line2}</span> </p>

</div>
</>    
   )
}