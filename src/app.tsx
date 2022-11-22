import "./app.css"

import Header from './components/Header/Header'
import NavMenu from './components/NavMenu/NavMenu'
import ProductItem from './components/ProductItem/ProductItem'
import React from "react";

export default function App() {

    return (
        <div className="app">
            <Header />
            <NavMenu />
        </div>
    );
}