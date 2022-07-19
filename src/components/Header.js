import React from 'react'
import '../assets/css/Header.css';
import miniLogo from '../assets/img/miniLogo.png'
import salaEstar from '../assets/img/salaEstar.jpg'
import logoCoopers from '../assets/img/BG.png'
import downArrow from  '../assets/img/icon-scroll.png'

function Header() {
  return (
    <div>
        <header>
            <div id='logoLogin'>
                <nav id="navLogo">
                    <img id='miniLogo' src={miniLogo} alt="Logo Coopers"/>
                    <h1 id='coopersText'>coopers</h1>
                </nav>            
                <nav id='login'>
                    <button id='loginButton'> Login </button>
                </nav>
            </div>
            <section id='presentation'>
                <div id='presentation-text'>
                    <h1 id='organize'>Organize</h1>
                    <p id='dailyJobs'>your daily jobs</p>
                    <p id='thingsDone'> The only way to get things done</p>
                    <button id='buttonGotoList'>Go to To-do list</button>
                </div>
                <div id='presentation-imgs'>
                    <img id='logoCoopers' src={logoCoopers} />
                    <img id='img-salaEstar' src={salaEstar} />
                </div>
            </section>
            <div id='seta'>
                <img src={downArrow} />
            </div>
            <section id='to-do-title'>
                <h1 id='to-do'>To-Do List</h1>
                <p id="to-do-text">Organize your tasks with this To-Do List</p>
                <p id="to-do-text"> and make your day easier  </p>
            </section>
        </header>
    </div>
  )
}

export default Header