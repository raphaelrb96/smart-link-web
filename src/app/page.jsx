'use client'
import RootLayout from './layout';
import Home from '../layouts/Home';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import "../Assets/css/icons.css";
import "../Assets/css/global.css";
import "../Assets/css/pages.css";
import "../index.scss";


export default function App() {
  return (
    <RootLayout title="Home">
      <Home />
    </RootLayout>
  );
};
