import NotFound from '@Pages/NotFound';
import HomePage from '@Pages/home/HomePage';
import PrivacyPolicyPage from '@Pages/privacy-policy/PrivacyPolicyPage';
import TermsAndConditionsPage from '@Pages/terms-and-conditions/TermsAndConditionsPage';
import ProductsListPage from '@Pages/products-list/ProductsListPage';
import ProductPage from '@Pages/product/ProductPage';
import ContactPage from '@Pages/contact/ContactPage';
import AboutPage from '@Pages/about/AboutPage';
import CartPage from '@Pages/cart/CartPage';
import ProfilePage from '@Pages/profile/ProfilePage';
import Footer from '@Components/layout/footer/Footer';
import Header from '@Components/layout/header/Header';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Provider } from '@Context/activeMenuLink';
import { RouterPaths } from '@Types/routerPaths';
import Breadcrumbs from '@Components/ui/Breadcrumbs';
import './App.scss';

const App = () => {
  const location = useLocation();

  return (
    <Provider>
      <Header />
      <div id='search-overlay-container'>
        {location.pathname !== RouterPaths.HOME &&
        location.pathname !== RouterPaths.NOT_FOUND ? (
          <Breadcrumbs />
        ) : (
          ''
        )}
        <Routes>
          <Route path='*' element={<Navigate to={RouterPaths.NOT_FOUND} />} />
          <Route path={RouterPaths.NOT_FOUND} element={<NotFound />} />
          <Route path={RouterPaths.HOME} element={<HomePage />} />
          <Route path={RouterPaths.SHOP}>
            <Route index element={<ProductsListPage />} />
            <Route path=':id' element={<ProductPage />} />
          </Route>
          <Route path={RouterPaths.CONTACT} element={<ContactPage />} />
          <Route path={RouterPaths.CART} element={<CartPage />} />
          <Route path={RouterPaths.PROFILE} element={<ProfilePage />} />
          <Route
            path={RouterPaths.PRIVACY_POLICY}
            element={<PrivacyPolicyPage />}
          />
          <Route
            path={RouterPaths.TERMS_AND_CONDITIONS}
            element={<TermsAndConditionsPage />}
          />
          <Route path={RouterPaths.ABOUT} element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
