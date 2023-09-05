import './styles.css';

function App({product}) {

  return (
    <div className="container-product">
      <h1>Produto/Pacote Atualizado!</h1>
      <h3>{`Código ${product.code}`}</h3>
      <h4>{product.name}</h4>
      <p>{`Custo R$${product.cost_price}`}</p>
      <p>{`Valor R$${product.sales_price}`}</p>
    </div>
  );
}

export default App;
