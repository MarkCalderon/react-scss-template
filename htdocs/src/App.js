import React from 'react'

// COMPONENTS
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './scss/reset.scss';
import './scss/variable.scss';
import './scss/base.scss';

const App = () => {
    return (
        <div className="mainContent">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App