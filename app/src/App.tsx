import React, {useEffect} from 'react';
import Navbar from "./components/navbar/navbar";
import NavElement from "./components/navbar/navElement";
import './theme/nummarit.css'
import './theme/webteema.css'
import MessageWrapper from "./pages/message";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import {onAuthStateChanged, User} from "firebase/auth";
import {auth, getAppCheckTokenForApiCall, getIdTokenForApiCall, verifyClaim} from "./firebaseConfig";
import Error from "./pages/error";
import Main from "./pages/main";
import axios from "axios";

export const core = axios.create({
  baseURL: process.env.BASE_URL
});

core.interceptors.request.use(async config => {
  config.headers = {
    "X-Firebase-IdToken": await getIdTokenForApiCall(),
    "X-Firebase-AppCheck": await getAppCheckTokenForApiCall()
  }
  return config;
});

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      if (user == null && window.location.pathname != "/login") {
        location.replace("/login")
      }
      verifyClaim(user, "admin");
    })
  }, [])

  return (
    <>
      <Navbar>
        <NavElement text="LÄHETÄ VIESTI" linksTo="/whatsapp/send"/>
        <NavElement text="PROFIILI" linksTo="/login"/>
        <NavElement text="PÄÄSIVULLE" linksTo="https://nummenpojat.fi"/>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/whatsapp/send" element={<MessageWrapper/>}/>
          <Route path="/*" element={<Error statusCode={404} message="Page not found"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
