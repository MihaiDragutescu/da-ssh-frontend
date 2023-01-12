import HomePage from '@Pages/home/HomePage';
import PrivacyPolicyPage from '@Pages/privacy-policy/PrivacyPolicyPage';
import TermsAndConditionsPage from '@Pages/terms-and-conditions/TermsAndConditionsPage';
import ContactPage from '@Pages/contact/ContactPage';
import AboutPage from '@Pages/about/AboutPage';
import Footer from '@Components/layout/Footer';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route
          path='/terms-and-conditions'
          element={<TermsAndConditionsPage />}
        />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
