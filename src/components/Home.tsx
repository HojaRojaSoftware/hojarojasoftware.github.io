import React from 'react';
import './../styles/Home.css';

const Home: React.FC = () => {
    return (
        <section>
            <h2>Welcome!</h2>
            {/* Home content goes here */}
            <p>In a nutshell</p>
            <h3>🙋 About Me:</h3>
            <p>One-man band for whom React Native is a hobby. Mobile app development is my pastime.</p>
            <h3>💻 Tech Stack:</h3>
            <p>React Native, Typescript, ChatGPT (to facilitate development)</p>
            <h3>🚀 Focus Areas:</h3>
            <p>Simple utility apps, foreign languages, simple games</p>
            <h3>❓Why HojaRoja?</h3>
            <p>'Hoja Roja 'simply means 'Red Leaf'. Sounds cool in Spanish. And my favorite color is red. And 'Software' makes it sound solid. Incidentally, 'Software' is 'Software' in Spanish.</p>
        </section>
    );
};

export default Home;