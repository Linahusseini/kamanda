import React from 'react';
import Card from './Card.js';
import Jumbotron from './Jumbotron.js';


const products = [
  {
    price: 'AED 139',
    description: '3-Stripes Tee',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/9df78eab33525d08d6e5fb8d27136e95/E/D/ED7593-1.jpg"
  },
  {
    price: 'AED 165',
    description: 'Graphic Tee',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/9df78eab33525d08d6e5fb8d27136e95/F/L/FL4080-1.jpg"
  },
  {
    price: 'AED 165',
    description: 'Skirt',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/9df78eab33525d08d6e5fb8d27136e95/F/M/FM1935-10.jpg"
  }
]

const GearBoutique = () => {
  return (
    <div>

        
        <Jumbotron 
          title="Products" 
        
          description="Check out what we pick for you!"
        >

        <div className="row">
          {
            products.map(
              (product)=>

              <div className="container grid-3 center">
                  <Card
                    title={product.price}
                    description={product.description}
                    image={product.image}
                    buttonLabel="Buy"
                    buttonLink="price"
                  />
                </div>
            )
          }
          </div>
        </Jumbotron>
    </div>
  );
}


export default GearBoutique;