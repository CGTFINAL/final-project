import './index.css';
import App from './App.tsx';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { CartProvider } from './contexts/CartContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </AuthProvider>
    </StrictMode>
);
