import React from 'react';
import './App.css';
import github from './assets/icons/github.svg';
import twitter from './assets/icons/twitter.svg';
import linkedin from './assets/icons/linkedin.svg';

 export default app => 
  <div className='container'>
    <img className='contener__img'
    src='https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-9/45655343_1962461960506426_6096299377628807168_n.jpg?_nc_cat=103&_nc_ht=scontent.frec3-2.fna&oh=9488733f9bd11bd49f340d1be14a8288&oe=5C8ED33C'/>
    <div className='container__content'>
      <h1 className='content__name'> Dbby </h1>
      <p className='content__description'> Meu primeiro HTML + CSS </p>
      <ul className='content__redessociais'>
        <li className='content__redessociais__item'>
            <a className='twitter' href='#' target='_blanck'><img src={twitter} alt='Link Twitter'/></a>         
        </li>
        <li className='content__redessociais__item'>
            <a className='linkedin' href='#' target='_blanck'><img src={linkedin}alt='Link linkedin'/></a>
        </li>
        <li className='content__redessociais__item'>
            <a className='github' href='#' target='_blanck'><img src={github}alt='link github'/></a>
        </li>
      </ul>
    </div>
  </div>

 