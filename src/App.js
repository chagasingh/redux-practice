
import { useSelector } from 'react-redux';

import Cart from './components2/Cart/Cart';
import Layout from './components2/Layout/Layout';
import Products from './components2/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
