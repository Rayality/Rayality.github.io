import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css'
import linkedIn from '../resources/linkedIn.png'
import gitlab from '../resources/gitlab.png'
import discord from '../resources/discord.ico'
import github from '../resources/github.png'

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
            <div className='contact-text'>
                <h2>Interested in working together?</h2>
                <p>Professionally or recreationally, feel free to fill out the email form or connect on socials.</p>
                            <div className='links'>
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
                    <img className='icon' src={discord} alt='Discord icon' />
                </a>
                <a
                    className='social'
                    href='https://github.com/Rayality'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img className='icon' style={{background:'white', borderRadius:'50%'}} src={github} alt='Github icon' />
                </a>
            </div>
            </div>
            <div className='group-col'>
                <div className='border-effect'/>
                <h2>Email</h2>
                <form id='form' className='email-wrapper' ref={form} onSubmit={sendEmail}>
                    <div id='name'>
                        <label className=''>Name</label>
                        <input className='form-control' type="text" name="name" />
                    </div>
                    <div id='email'>
                        <label>Return Email</label>
                        <input className='form-control' type="email" name="email"/>
                    </div>
                    <div id='textfield' className=''>
                        <label>Message/Feedback</label>
                        <textarea className='form-control' rows="3" name="message" />
                    </div>
                    <button id='emailButton' type="submit" value="Send" >Submit</button>
                </form>
            </div>
        </div>
  );
};
