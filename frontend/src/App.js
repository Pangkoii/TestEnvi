import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage.jsx'; 
import FileUpload from './Pages/RestaurantRegistration/menuUpload.jsx';
import PostQueue from './Pages/PostQueue/postQueue.jsx';
function App() {
  return (
      <PostQueue/>

 
  );
}

export default App;
