import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home';
import LoadingPage from '../pages/loadingPage';
import ViewCommitsPage from '../pages/viewCommitsPage';
import NoPage from '../pages/noPage';

function Router() {
  return (
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="loading" element={<LoadingPage />} />
                <Route path="view-commits" element={<ViewCommitsPage />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
  )
}

export default Router
