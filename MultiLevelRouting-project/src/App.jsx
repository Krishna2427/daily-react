import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import UserList from './components/UserManagement/UserList';
import UserDetails from './components/UserManagement/UserDetails';
import UserForm from './components/UserManagement/UserForm';
import UserSettings from './components/UserManagement/UserSettings';
import NotComponent from './components/UserManagement/NotComponent';
import ProductList from './components/productManager/ProductList';
import ProductForm from './components/productManager/ProductForm';
import ProductDetails from './components/productManager/ProductDetails';
import ProductSettings from './components/productManager/ProductSettings';
import Services from './components/productManager/Services';



const App = () => {
  const [isdark, setDark] = useState(false);
  const [selectedTab, setSelectedTab] = useState("users"); 

  return (
    <Router>
      <Navbar onTabChange={setSelectedTab} isdark ={isdark} toggleTheme={setDark}/> 
      <Routes>
      
        {selectedTab === "users" ? (
          <>
            <Route path='/' element={<Services/>}/>
            <Route path="/" element={<UserList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/new" element={<UserForm />} />
            <Route path="/users/:userId" element={<UserDetails />}>
              <Route path="settings" element={<UserSettings />} /> {/* Nested route */}
            </Route>
            <Route path="/users/edit/:userId" element={<UserForm />} />
            <Route path="*" element={<NotComponent />} />
          </>
        ) : (
          <>
            <Route path='/' element={<Services/>}/>
            <Route path="/" element={<ProductList/>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/new" element={<ProductForm />} />
            <Route path="/products/:productId" element={<ProductDetails />}>
              <Route path="settings" element={<ProductSettings />} /> {/* Nested route */}
            </Route>
            <Route path="/products/edit/:productId" element={<ProductForm />} />
            <Route path="*" element={<NotComponent />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
