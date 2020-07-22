import React, { useContext } from 'react';
import Card from './Card.js';
import Jumbotron from './Jumbotron.js';
import logo from './logo.svg';
import Footer from './Footer.js';
import AppBar from './AppBar';
// import NavBar2 from './NavBar2';


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
  },
  {
    price: 'AED 189',
    description: '3-Stripes Tee Dress',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/9df78eab33525d08d6e5fb8d27136e95/G/P/GP1913-1.jpg"
  },
  {
    price: 'AED 199',
    description: 'ColorBlack Tights',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/9df78eab33525d08d6e5fb8d27136e95/F/S/FS6145-1.jpg"
  },
  {
    price: 'AED 115',
    description: 'Boyfriend Trefoil Tee',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/9df78eab33525d08d6e5fb8d27136e95/F/M/FM3316-1.jpg"
  },
  {
    price: 'AED 479',
    description: 'Superstar Shoes',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/9df78eab33525d08d6e5fb8d27136e95/F/V/FV3452-1.jpg"
  },
  {
    price: 'AED 849',
    description: 'Ultraboost 20 Shoes',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/V/FV8336-1.jpg"
  },
  {
    price: 'AED 475',
    description: 'Falcon Shoes',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/500x/9df78eab33525d08d6e5fb8d27136e95/B/2/B28126-1.jpg"
  },
  {
    price: 'AED 99',
    description: 'Aeroready Runner Visor',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/K/FK0839-10.jpg"
  },
  {
    price: 'AED 115',
    description: 'Predator 20 Training Gloves',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/J/FJ5989-10.jpg"
  },
  {
    price: 'AED 89',
    description: 'Trail Water Bottle 750ML',
    image: "https://adidas-cdn.revton.com/media/catalog/product/cache/0/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/T/FT8937-10.jpg"
  }
 
]

const GearBoutique = () => {
  return (
    <div>
<AppBar></AppBar>
        
        <Jumbotron 
          title="Products" 
        
          description="Check out what we pick for you!"
        >

        <div className="row">
          {
            products.map(
              (product)=>

              <div className="container grid-3 center col-lg-4 col-sm-6">
                  <Card
                    title={product.price}
                    description={product.description}
                    image={product.image}
                    buttonLabel="Buy"
                    buttonLink="https://shop.adidas.ae/en/women"
                  />
                </div>
            )
          }
          </div>
        </Jumbotron>
        <Footer></Footer>
    </div>
  );
}


export default GearBoutique;