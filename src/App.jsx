
import './App.css'
import Carts from './Carts';
import { useGlobalContext } from './context'
import Header from './Header'

function App() {

  const { amount, clearCart, total } = useGlobalContext();

  return (
    <>
      <Header />
      
      <Carts />

      <button onClick={() => clearCart()}>clealAll</button>

      <p>total price { total}</p>
        
    </>
  )
}

export default App
