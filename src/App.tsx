import NotFound from '@Pages/NotFound';
import HomePage from '@Pages/home/HomePage';
import PrivacyPolicyPage from '@Pages/privacy-policy/PrivacyPolicyPage';
import TermsAndConditionsPage from '@Pages/terms-and-conditions/TermsAndConditionsPage';
import ProductsListPage from '@Pages/products-list/ProductsListPage';
import ProductPage from '@Pages/product/ProductPage';
import ContactPage from '@Pages/contact/ContactPage';
import AboutPage from '@Pages/about/AboutPage';
import CartPage from '@Pages/cart/CartPage';
import CheckoutPage from '@Pages/checkout/CheckoutPage';
import ProfilePage from '@Pages/profile/ProfilePage';
import Footer from '@Components/layout/footer/Footer';
import Header from '@Components/layout/header/Header';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';
import Breadcrumbs from '@Components/ui/Breadcrumbs';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import './App.scss';

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== RouterPaths.SHOP && (
        <a className='skip-to-content-link' href='#main'>
          Skip to content
        </a>
      )}

      <Header />
      <div id='search-overlay-container'>
        {location.pathname !== RouterPaths.HOME &&
        location.pathname !== RouterPaths.NOT_FOUND ? (
          <Breadcrumbs />
        ) : (
          ''
        )}
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Routes>
            <Route path='*' element={<Navigate to={RouterPaths.NOT_FOUND} />} />
            <Route path={RouterPaths.NOT_FOUND} element={<NotFound />} />
            <Route path={RouterPaths.HOME} element={<HomePage />} />
            <Route path={RouterPaths.SHOP}>
              <Route index element={<ProductsListPage />} />
              <Route path=':id' element={<ProductPage />} />
            </Route>
            <Route path={RouterPaths.CONTACT} element={<ContactPage />} />
            <Route path={RouterPaths.CART}>
              <Route index element={<CartPage />} />
              <Route path={RouterPaths.CHECKOUT} element={<CheckoutPage />} />
            </Route>
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
        </QueryParamProvider>
        <Footer />
      </div>
    </>
  );
};

export default App;
