// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const data = [
    {
      productImage:
        "https://www.desjardin.fr/hs-fs/hubfs/Images/Blog-Images/Fancy-tins-make-the-difference.jpg?width=1417&name=Fancy-tins-make-the-difference.jpg",
      productName: "Fancy Product",
      price1: "$40.00 - ",
      price2: "$80.00",
      rating: "",
    },
    {
      productImage:
        "https://d2gkxhozwhdchh.cloudfront.net/__uploads/collections/18-special-items-banner.jpg",
      productName: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://thumbs.dreamstime.com/z/special-sale-all-item-vector-template-design-illustration-148661862.jpg",
      productName: "Sale Item",
      price1: "$50.00",
      price2:"$25.00",
      rating: "",
    },
    {
      productImage:
        "https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-hand-painted-personalized-artisan-wooden-dolls-set-of-2--154283-m.jpg",
      productName: "Popular Item",
      price1: "$40.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://images-na.ssl-images-amazon.com/images/I/81lgUs0-NdL.jpg",
      productName: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
      rating: "",
    },
    {
      productImage:
        "https://2.bp.blogspot.com/--5Gv-w_HdfQ/Va4H8qBOLSI/AAAAAAAAAH0/jB3KLlpKIZc/s640/PicMonkey%2BCollage.jpg",
      productName: "Fancy Product",
       price1: "$120.00 - ",
      price2: "$280.00",
      rating: "",
      
    },
    {
      productImage:
        "https://www.fnp.com/images/pr/l/v20200206131642/sweet-chocolate-hamper_1.jpg",
      productName: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://www.lifestorage.com/blog/wp-content/uploads/2017/11/life-storage-collectible-items-7.jpg",
      productName: "Popular Item",
      price1: "$40.00",
      rating: "⭐⭐⭐⭐⭐",
    },

  ]
  const[count, setCount] = useState(0)
  return (
    <div className="App">

       <div className='cart-value'>
          <Badge bg="success">
           Cart {count}
          </Badge>
        </div>
      
        <header class="bg-dark py-5 mb-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

      <div className='card-container'>
        {data.map((prodduct, idx)=>(
          <Product
          key = {idx}
          prod = {prodduct}
          count = {count}
          setCount = {setCount}
          />
          
        ))}
      
    </div>
    </div>
  );
}

export default App;

function Product({prod, count, setCount}) {
  const[show, setShow] = useState(false) 

  function addtoCart(){
    setCount(count+1);
    setShow(!show);
  }

  function removeCart(){
    setCount(count-1);
    setShow(!show);
  }
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img className='images' variant="top" src={prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>{prod.rating}</Card.Text>
        <Card.Text>{prod.price1} {prod.price2}</Card.Text>
        

        {!show ?
        <Button variant="primary"
        onClick={addtoCart}
        >Add to Cart</Button> : "" }
        
        {show ?
        <Button variant="danger"
        onClick={removeCart}
        >Remove Cart</Button> 
        : ""}
        
      </Card.Body>
    </Card>
    </div>
  );
}