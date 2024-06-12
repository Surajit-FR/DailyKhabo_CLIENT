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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
    <Router>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/' element={<Index />} />
      </Routes>
    </Router>
    <Toaster
      reverseOrder={false}
      gutter={10}
    />
  </Provider>
);

reportWebVitals();
