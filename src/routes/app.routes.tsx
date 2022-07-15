import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="" element={
                <Navigate to="dashboard" />
            } />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="list/:type" element={<List />} />
        </Routes>
    </Layout>
);

export default AppRoutes;