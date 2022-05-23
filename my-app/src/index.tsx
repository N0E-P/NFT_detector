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
    <MoralisProvider serverUrl="https://zxhf5v44ppmy.usemoralis.com:2053/server" appId="FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP">
      <App />
    </MoralisProvider>
  </React.StrictMode>
);