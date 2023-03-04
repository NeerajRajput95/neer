import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(probs) {
  let options=probs.options;
   let priceOption=Object.keys(options);
const handleAddCart=()=>{

}

  return (
    <Card className='card mt-6' style={{ width: '18rem'}}>
      <Card.Img variant="top" src={probs.imgSrc} />
      <Card.Body>
        <Card.Title>{probs.foodName}</Card.Title>
       
        {/* <Card.Select>Card Title</Card.Select> */}
        <select className='num' style={{width:50,backgroundColor:'green'}}>{
            Array.from(Array(6), (e,i)=>{
                return(
                    <option key={i+1} value= {i+1}>{i+1}</option>
                )
            })
        }</select>
        <select className='half' style={{width:70,backgroundColor:'green'}}>
                    {
                      priceOption.map((el)=>{
                        return(
                          <option>{el}</option>
                        )
                      })
                    }
                    
        </select>
        <div className='d-inline h-100 fs-5'>Total price</div>
        <div>
          <button className={'btn btn-success justify-center ms-2 '} onClick={handleAddCart}>Add to Cart</button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
