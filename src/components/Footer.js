import linkedIn from '../resources/linkedIn.png'
import gitlab from '../resources/gitlab.png'
import discord from '../resources/discord.ico'
import github from '../resources/github.png'
import '../css/footer.css'
import link from '../resources/linkWhite.png'
import pdfRes from '../resources/Resume.pdf'
import docRes from '../resources/Resume.docx'
import word from '../resources/word.png'
import pdf from '../resources/pdf.png'
import download from '../resources/downloadWhite.png'
import web from '../resources/web.png'

export default function Footer() {
    return (
        <div className='footer'>
            <p>Thanks for visiting!</p>
            <div className='resume-links'>
                {/* <a className='link' href={pdfRes} download="Charles-Cowan-Resume" rel='noreferrer'>
                    <img className='link-icon' src={download} alt='#' />
                    Resume.pdf
                    <img className='link-icon' src={pdf} alt='PDF icon'/>
                </a>
                <a className='link' href={docRes} download="Charles-Cowan-Resume" rel='noreferrer'>
                    <img className='link-icon' src={download} alt='#' />
                    Resume.docx
                    <img className='link-icon' src={word} alt='MS Word icon'/>
                </a> */}
                <a className='link' href="https://docs.google.com/document/d/1qT5Eoqsz_WfJ-T6uWJBIrEs9vdnBpBn2xAveXxN9Z2A/edit?usp=sharing" download="Charles-Cowan-Resume" rel='noreferrer'>
                    <img className='link-icon' src={link} alt='PDF icon'/>
                    Resume
                    <img className='link-icon' src={web} alt='#' />
                </a>
            </div>

        </div>
    )
}
