import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloReact from './react/index';

const root = createRoot(document.querySelector('#reactApp'));
root.render(<HelloReact />);
