import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/email.css'
import linkedIn from '../resources/linkedIn.png'
import gitlab from '../resources/gitlab.png'
import discord from '../resources/discord.ico'

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oby9qfq', 'template_aiqokax', form.current, 'LYXkEjEpxfxrPA8Yk')
        .then((result) => {
            console.log(result.text);
            if (result.text === 'OK') {
                let success = document.createElement('h2');
                success.classList.add('alert', 'alert-info');
                success.innerText = 'Email successfully sent!'
                let wrapper = document.getElementById('form-wrapper')
                let formNode = document.getElementById('form')
                formNode.classList.add('d-none')
                wrapper.appendChild(success)
            }
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='contact'>
            <div className='gray-section-bg'/>
            <h2 className='title-span'>Interested in working together?</h2>
            <div className='group-col'>
                <h2>Connect!</h2>
                <div className='group'>
                    <a
                        className='social'
                        href='https://www.linkedin.com/in/charles-cowan-286764265/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img className='icon' src={linkedIn} alt='LinkedIn icon' />
                    </a>
                    <a
                        className='social'
                        href='https://gitlab.com/CharlesRay'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img className='icon' src={gitlab} alt='LinkedIn icon' />
                    </a>
                    <a
                        className='social'
                        href='https://discord.com/channels/@Rayality'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img className='icon' src={discord} alt='LinkedIn icon' />
                    </a>

                </div>
            </div>
            {/* <h2>or...</h2> */}
            <div className='group-col'>
                <h2>Email!</h2>
                <div id='form-wrapper'>
                    <form id='form' className='email-wrapper' ref={form} onSubmit={sendEmail}>
                        <div id='name'>
                            <label className=''>Name</label>
                            <input className='form-control' type="text" name="user_name" />
                        </div>
                        <div id='email'>
                            <label>Your Email</label>
                            <input className='form-control' type="email" name="user_email" />
                        </div>
                        <div id='textfield' className=''>
                            <label>Message</label>
                            <textarea className='form-control' rows="3" name="message" ></textarea>
                        </div>
                        <button id='emailButton' type="submit" value="Send" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
  );
};
