import "./app.css"

import Header from './components/Header/Header'
import NavMenu from './components/NavMenu/NavMenu'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

export default function App() {

    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <NavMenu />
                <Routes>
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/status" element={
                        <div>
                            Status of the API microservice (health availability etc.)
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}