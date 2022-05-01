import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="minha-carteira/dashboard" element={<Dashboard />}/>
            <Route path="minha-carteira/list/:type" element={<List />}/>
        </Routes>
    </Layout>
);

export default AppRoutes;