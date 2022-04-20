import { useState } from 'react';
import './App.css';
import Counter from './components/Counter'

const prodactsFromServer = [
  {
    id: 1,
    title: 'Iphon 200',
    price: 2000,
    rest: 10,
    cnt: 1
  },
  {
    id: 2,
    title: 'Huaway',
    price: 2000,
    rest: 10,
    cnt: 1
  },
  {
    id: 3,
    title: 'LG',
    price: 3400,
    rest: 40,
    cnt: 1
  },
  {
    id: 4,
    title: 'Samsung',
    price: 4000,
    rest: 10,
    cnt: 1
  },
]
function App() {

  const [products, setProducts] = useState(prodactsFromServer)

  function changeCnt(idProduct, ctnProduct) {
    setProducts(products.map((pr) => pr.id !==idProduct ? pr : {...pr, cnt:ctnProduct}))
  }
  
  function delProduct(id) {
    setProducts(products.filter((e)=>e.id!==id))
  }

  let totalSumCard = products.reduce((acc, elem) => {
    return acc + elem.cnt * elem.price
  }, 0)

  let prodactsCardList =
    products.map((pr)=>(
      <tr key={pr.id}>
        <td>{pr.title}</td>
        <td>{pr.price}</td>
        <td><Counter min={1} max={pr.rest} changeCntP={val => changeCnt(pr.id, val)} curent={pr.cnt} /></td>
        <td>{pr.price*pr.cnt}</td>
        <td><button onClick={()=>delProduct(pr.id)}>Delate</button></td>
      </tr>
    ))

  return (
    <div className="App">
      <header>
        <h1>Card</h1>
        <hr/>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Count</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {prodactsCardList}
            <tr>
              <td>{totalSumCard}</td>
            </tr>
          </tbody>
        </table>
        
      </main>
    </div>
  );
}

export default App;
