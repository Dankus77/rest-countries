import React from 'react';

const Header = () =>{

const colorToggle = () =>{
const bgToggle = document.querySelector('.fa-moon');
const header = document.querySelector('.header');
const input = document.querySelector('#search');
const select = document.querySelector('select');
const info = document.querySelectorAll('.info');

bgToggle.addEventListener('click', colorToggle);
document.body.classList.toggle('light-theme');
header.classList.toggle('light-theme');
input.classList.toggle('light-theme');
select.classList.toggle('light-theme'); 

info.forEach((list) =>{
    list.classList.toggle('light-theme');
})
}



return <div className="header">
    <div>
    <h1>Where in the world?</h1>
    </div>
    
    <div>
    <i className="fas fa-moon" onClick={colorToggle}> Dark Mode</i>
    </div>

</div>
}

export default Header;