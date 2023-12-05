import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function Resume() {
  return (
    <main>
    <Nav />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      
      <embed src="public/images/Evie-Resume-2023.pdf" type="application/pdf" width="80%" height="900px" />
    
    </div>
    <Footer />
    </main>
  );
}

export default Resume;
