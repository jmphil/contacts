import React from 'react';
// import Footer from './Footer';
import Header from './Header';

const BaseLayout = (props) => {
    return (<>
        <Header />
        <br/>
        <br/>
        <br/>
        
        {props.children}
        <br/>
        
        </>
    )
}

export default BaseLayout