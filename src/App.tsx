// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import AppList from './components/AppList';
import Home from './components/Home';
import AndroidPrivacyPolicy from './components/AndroidPrivacyPolicy'
import Donate from './components/Donate';
import GameList from './components/GameList';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/apps">Apps</Link></li>
                        <li><Link to="/games">Games</Link></li>
                        <li><Link to="/android-privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/donate">Donate</Link></li>
                    </ul>
                </nav>

                <hr />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/apps" element={<AppList />} />
                    <Route path="/games" element={<GameList />} />
                    <Route path="/android-privacy-policy" element={<AndroidPrivacyPolicy />} />
                    <Route path="/donate" element={<Donate />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
