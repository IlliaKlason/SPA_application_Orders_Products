import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  HashRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';

import { App } from './App';
import { Orders } from './pages/OrdersPage/OrdersPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:orderId" element={<Orders />} />
          <Route path="products" element={<ProductsPage />} />

          <Route path='/' element={<Navigate to="/orders" />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>,
  </Provider>
)
