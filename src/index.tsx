import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import 'swiper/css';
import 'swiper/css/bundle';
import { Provider } from 'react-redux';
import { Store } from './services/store/Store';
import { Toaster } from 'react-hot-toast';
import ThankYou from './pages/others/ThankYou';
import PrivacyPolicyPage from './pages/others/PrivacyPolicyPage';
import ReturnPolicyPage from './pages/others/ReturnPolicyPage';
import ShippingPolicyPage from './pages/others/ShippingPolicyPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
    <Router>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/' element={<Index />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/return-policy' element={<ReturnPolicyPage />} />
        <Route path='/shipping-policy' element={<ShippingPolicyPage />} />
      </Routes>
    </Router>
    <Toaster
      reverseOrder={false}
      gutter={10}
    />
  </Provider>
);

reportWebVitals();
