import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home" >
                    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" className="mx-2" width={50} height={33}/>
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkdin.com/in/your_linkedin-profile"
                target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                    <FaLinkedin />
                </a>
                <a href="https://www.linkdin.com/in/your_linkedin-profile"
                target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.linkdin.com/in/your_linkedin-profile"
                target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                </a>
            </div>
        </nav>
    )
}

export default Navbar