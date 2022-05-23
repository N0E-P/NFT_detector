import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://wujwxncolcrp.usemoralis.com:2053/server" appId="ScTXlRVJufluGTwrqXWi3ikOKjuPbtbYXw0bPzHG">
      <App />
    </MoralisProvider>
  </React.StrictMode>
);