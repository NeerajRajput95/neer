import Carousel from 'react-bootstrap/Carousel';


function Carouser() {
  return (
    <Carousel>
 
      

      <Carousel.Item className='img'>
        <img
          className="d-block w-100 h-1" style={{height:500}}
          src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='img'>
        <img
          className="d-block w-100" style={{height:500}}
          src="https://images.unsplash.com/photo-1585503913867-f3382c5d1122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          alt="Second slide"
        />

        <Carousel.Caption >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='img'>
        <img
          className="d-block w-100" style={{height:500}}
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
   
  );
}

export default Carouser;