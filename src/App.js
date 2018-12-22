import React, { Component } from 'react';
import './App.css';
import github from './assets/icons/github.svg';
import twitter from './assets/icons/twitter.svg';
import linkedin from './assets/icons/linkedin.svg';

 export default app => 
  <div className='container'>
    <img className='container__img' scr=''></img>
    <div>
      <h1 className='content__name'> Nome do Título </h1>
      <p className='content__description'> Corpo do texto </p>
      <ul className='content__redessociais'> Redes sociais
        <li className='content__redessociais__instagram'>
            <a className='twitter' href='' target='_blanck'><img src={twitter}/></a>         
        </li>
        <li className='content__redessociais__github '>
            <a className='linkedin' href='' target='_blanck'><img src={linkedin}/></a>
        </li>
        <li className='content__redessociais__linkedin'>
            <a className='github' href='' target='_blanck'><img src={github}/></a>
        </li>
      </ul>
    </div>
  </div>

 