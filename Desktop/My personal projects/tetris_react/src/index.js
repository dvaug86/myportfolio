import * as React from 'react';

import { StrictMode } from "react";
import App from "./App";

import './styles.css';

import { createRoot } from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

