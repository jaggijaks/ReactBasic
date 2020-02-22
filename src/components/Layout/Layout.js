import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
const Layout = (props) => {
    return (
        <Aux >
            <div>ToolBar , SideNav,.... </div>
            <main className='content'>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;