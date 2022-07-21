import React from 'react'
import '../assets/css/GetInTouchy.css'
import touchyVector from '../assets/img/touchVector.png'

function GetInTouchy() {
  return (
    <div className='GetInTouchy'>
        <section id='touchy-background'>
            <div id='touchy-title'>
                <div id='touchy-icon'>
                    <img src={touchyVector} />
                </div>                
                <p id='touchy-text'>GET IN <strong>TOUCH</strong></p>
            </div>
            <form id='touchy-form'>
                <label id='touchy-label'>Your name</label>
                <input
                    id='touch-input'
                    type='text'
                    placeholder='type your name here...'                    
                    name='name'>
                </input>
                <div id='touchy-form-info'>
                    <div id='touchy-form-email'>
                        <label id='touchy-label-email'>Email*</label>
                        <input 
                            id='touch-input-email'
                            type='email'
                            placeholder='example@example.com'                    
                            name='email'>
                        </input>
                    </div>
                    <div id='touchy-form-telephone'>
                        <label id='touchy-label-email'>Telephone*</label>
                        <input
                            id='touch-input-telephone'
                            type='number'
                            placeholder='(  ) ____-____'                    
                            name='telephone'>
                        </input>
                    </div>
                </div>
                <label id='touchy-label-email'>Message*</label>
                <textarea
                    placeholder='Type what you want to say to us' 
                    id="touch-message" name="message"
                    rows="10" cols="35">
                    
                </textarea>
                <button id='touchy-button'>Send Now</button>
            </form>
        </section>

    </div>
  )
}

export default GetInTouchy