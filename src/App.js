import React from 'react';
import Component from './Component.js';
import validation from './validation.js';
import './style.css';

function App(){
    const valid = validation;
    return(
        <div>
            <Component valid={valid} />
        </div>
    );
}

export default App;