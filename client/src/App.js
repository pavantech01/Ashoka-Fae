import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Added Navigate import
import { useState, useEffect } from 'react'; // Combined imports
import ProductDetail from './components/Products/ProductDetail'; // Import the ProductDetail component
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services';
import Events from './components/Events/Events';
import Products from './components/Products/Products';
import AddProduct from './components/Products/AddProduct';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Account from './components/Account/Account';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Profile from './pages/Profile/Profile';
import { jwtDecode } from 'jwt-decode';
import EventsAdd from './pages/Events/EventsAdd';
import EditEventForm from './components/EditEventForm';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Cart from './pages/Cart';
import Razorpay from './pages/Razorpay';

function App() {
  const [isPaymentActive, setIsPaymentActive] = useState(false); // State to track payment process
  const [user, setUser] = useState(null); // State to hold user information

  useEffect(() => {
    // Fetch user data from the server or local storage
    const fetchUser = async () => {
      const token = localStorage.getItem('token'); // Get token from local storage
      if (token) {
        const decodedToken = jwtDecode(token); // Decode the token to get user info
        setUser({ id: decodedToken.userId, role: decodedToken.role }); // Set user state with role
      }
    };

    fetchUser();
  }, []);

  const isLoggedIn = !!user; // Determine if the user is logged in
  const userRole = user ? user.role : null; // Get user role if logged in

  return (
    <div className='max-w-full mx-auto p-0 md:p-0 overflow-x-hidden'>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} userRole={userRole} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/add" element={<EventsAdd />} />
          <Route path="/events/edit" element={<EditEventForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/detail" element={<ProductDetail />} /> {/* Route for product details */}
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart setIsPaymentActive={setIsPaymentActive} />} />
          <Route path="/razorpay" element={isPaymentActive ? <Razorpay /> : <Navigate to="/" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
