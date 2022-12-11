import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  const fetchProducts = () => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res && res.products) {
          setProducts(res.products)
        }
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10) {
      setPage(selectedPage)
    }
  }

  return (
    <div className="App">
      {products.length > 0 && <ul class="product_results">
        {products.slice(page * 10 - 10, page * 10).map((prod) => {
          return <li key={prod.id}>{prod.title}</li>
        })}
      </ul>}
      {products.length > 0 && <div class="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "disable"}>◀</span>
        {
          [...Array(products.length / 10)].map((_, i) => {
            return <span className={page === i + 1 ? "selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
          })
        }
        <span onClick={() => selectPageHandler(page + 1)} className={page < products.length / 10 ? "" : "disable"}>▶</span>
      </div>}
    </div>
  );
}

export default App;
