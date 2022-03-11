import  React  from "react";
import Card from 'react-bootstrap/Card'
import  Button  from "react-bootstrap/Button"

function click(titulo) {
    
        
        alert(`Agregando ${titulo} al carrito`)
    
}

function CardTwo(props) {

    const { img , titulo, alt, precio, btnNom} = props
    return (


        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={alt}/>
            <Card.Body>
                <Card.Title style={{ color: 'black' }}>{titulo}</Card.Title>
                <Card.Text style={{ color: 'black' }}>
                    {precio}
                </Card.Text>
                <Button onClick={() =>{ click(titulo)}} variant="primary" >{btnNom}</Button>
            </Card.Body>
        </Card>
    )

}



export default CardTwo;