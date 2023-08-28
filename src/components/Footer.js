import linkedIn from '../resources/linkedIn.png'
import gitlab from '../resources/gitlab.png'
import discord from '../resources/discord.ico'
import github from '../resources/github.png'
import '../css/footer.css'


export default function Footer() {
    return (
        <div className='footer'>
            <p>Thanks for visiting!</p>
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
                    href='https://discord.com/channels/@Rayality'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img className='icon' style={{background:'white', borderRadius:'50%'}} src={github} alt='Github icon' />
                </a>
            </div>
        </div>
    )
}
