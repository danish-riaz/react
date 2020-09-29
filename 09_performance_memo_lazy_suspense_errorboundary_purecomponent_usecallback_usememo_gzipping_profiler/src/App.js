import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

const MainPage = lazy(() => import('./pages/main-page/main-page.component'));
const Home = lazy(() => import('./pages/home/home.component'));
const About = lazy(() => import('./pages/about/about.component'));

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Main Page</Link> <Link to="/home">Home</Link>{' '}
        <Link to="/about">About</Link>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading .....</h1>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
