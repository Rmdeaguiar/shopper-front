import './styles.css';
import { useState } from 'react';
import api from '../services/axios'
import Product from '../Components/Product';

function Home() {
  const [codeProduct, setCodeProduct] = useState(0);
  const [codePack, setCodePack] = useState(0);

  const [newPriceProduct, setNewPriceProduct] = useState(0);
  const [newPricePack, setNewPricePack] = useState(0);

  const [errorProduct, setErrorProduct] = useState(null);
  const [errorPack, setErrorPack] = useState(null);

  const [updateProduct, setUpdateProduct] = useState();

  const [showProduct, setShowProduct] = useState(false);

  async function handleProduct(e) {
    e.preventDefault();
    setErrorProduct(null);
    setErrorPack(null);
    setShowProduct(false);
    setCodePack(0);
    setNewPricePack(0);

    try {
      const response = await api.post('updateProductPrice', {
        code: codeProduct,
        newPrice: newPriceProduct
      },
        {
          headers: {
            'Authorization': `Bearer `,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })

        setUpdateProduct(response.data);
        setShowProduct(true);

    } catch (error) {
      setErrorProduct(error.response.data.message);
      setShowProduct(false);
    }
  }

  async function handlePack(e) {
    e.preventDefault();
    setErrorProduct(null);
    setErrorPack(null);
    setShowProduct(false)
    setNewPriceProduct(0);
    setCodeProduct(0);

    try {
      const response = await api.post('updatePackPrice', {
        pack_id: codePack,
        newPrice: newPricePack
      },
        {
          headers: {
            'Authorization': `Bearer `,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })

        setUpdateProduct(response.data);
        setShowProduct(true);

    } catch (error) {
      setErrorPack(error.response.data.message);
      setShowProduct(false);
    }
  }

  return (
    <div className="container">
      <div className='edit-price'>
        <form className='change-price'>
          <h2>ALTERAR PREÇO PRODUTO</h2>
          <label htmlFor='codeProduct'>Código Produto</label>
          <input type='number' name='codeProduct' value={codeProduct} onChange={(e) => setCodeProduct(e.target.value)} />
          <label htmlFor='priceProduct'>Preço</label>
          <input type='number' name='priceProduct' value={newPriceProduct} onChange={(e) => setNewPriceProduct(e.target.value)} />
          <button onClick={(e) => handleProduct(e)} className='green-btn'>VALIDAR</button>
          <h3>{errorProduct}</h3>
        </form>
        <form className='change-price'>
          <h2>ALTERAR PREÇO PACOTE</h2>
          <label htmlFor='codeProduct'>Código Pacote</label>
          <input type='number' name='codeProduct' value={codePack} onChange={(e) => setCodePack(e.target.value)} />
          <label htmlFor='priceProduct'>Preço</label>
          <input type='number' name='priceProduct' value={newPricePack} onChange={(e) => setNewPricePack(e.target.value)} />
          <button onClick={(e) => handlePack(e)} className='green-btn'>VALIDAR</button>
          <h3>{errorPack}</h3>
        </form>
      </div>
      <div className='product-pack'>
       {showProduct
       && <Product 
        product={updateProduct}/>}
      </div>
    </div>
  );
}

export default Home;
