import HomePage from '@Pages/home/HomePage';
import PrivacyPolicyPage from '@Pages/privacy-policy/PrivacyPolicyPage';
import TermsAndConditionsPage from '@Pages/terms-and-conditions/TermsAndConditionsPage';
import ProductsListPage from '@Pages/products-list/ProductsListPage';
import ContactPage from '@Pages/contact/ContactPage';
import AboutPage from '@Pages/about/AboutPage';
import CartPage from '@Pages/cart/CartPage';
import ProfilePage from '@Pages/profile/ProfilePage';
import Footer from '@Components/layout/Footer';
import Header from '@Components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import { Provider } from '@Context/activeMenuLink';
import './App.scss';

const App = () => {
  return (
    <Provider>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route
          path='/terms-and-conditions'
          element={<TermsAndConditionsPage />}
        />
        <Route path='/shop' element={<ProductsListPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;
