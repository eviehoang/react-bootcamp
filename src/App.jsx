import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
    return (
        <main>
            <Nav />
            <div className="box">
                <div className='text-white'>
                    <h1 className='m-1'>Hi! I'm <u>Nhi Hoang</u> </h1>
                    <h4 className='m-1'>It's nice to meet you!</h4>
                    <h5 className='m-1'>Take a <b className="animate-flicker">click </b>around</h5>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default App;
