import { React } from "react";



function Card(props){
    const {img, alt, titulo, precio, btnNom} = props
    return (

        <div className="card">
            <div>
            <img style={{width: '60%'}} src={img} alt={alt} />
            </div>
            <h3>{titulo}</h3>
            <span>{precio}</span>
            <div>
            <button className="btn">{btnNom}</button>
            </div>
            
        </div>

    )
}

export default Card;