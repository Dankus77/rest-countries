import React from 'react';

const Header = () =>{

const toggleTheme = () => {
    const header = document.querySelector('.header');
    const info = document.querySelector('.info');

    info.forEach((list) => {
        list.classList.toggle('light-theme')
    })

    header.classList.toggle('light-theme');
}

return <div className="header">
    <div>
    <h1>Where in the world?</h1>
    </div>
    
    <div>
        <button className='moon-btn' onClick={toggleTheme}>
        <i className="fas fa-moon"> Dark Mode</i>
        </button>
    </div>

</div>
}

export default Header;