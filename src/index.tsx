import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "react-query";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theming/theme";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n/i18n";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Suspense fallback={"loading"}>
        <I18nextProvider i18n={i18n}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </QueryClientProvider>
        </I18nextProvider>
        </Suspense>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
