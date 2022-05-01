import React, { Suspense } from 'react';
// import {
//   BrowserRouter,
//   Route,
//   Link,
  
// } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';

import QuizForm from './components/QuizForm';
import LogForm from './components/LogForm';
import QuizMainMenu from './components/QuizMainMenu';
import QuizPrompt from './components/QuizPrompt';


const RoutingConfig = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
        <Route exact path="/" element={<QuizForm/>} />
        <Route path="/log" element={<LogForm/>} />
        <Route path="/quiz" element={<QuizPrompt/>} />
      </Routes>
    </Router>
);

export default RoutingConfig;
