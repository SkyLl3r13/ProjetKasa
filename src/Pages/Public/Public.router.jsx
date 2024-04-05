import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Logement, Error } from "@/Pages/Public/Index";

import Layout from "@/Layout/Layout";


const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;