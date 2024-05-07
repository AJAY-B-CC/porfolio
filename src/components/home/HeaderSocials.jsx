import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';



const HeaderSocials = () => {
    return (
        <div className='home__socials'>
          

            <a href='https://github.com/AjayB101' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/ajay-b-4a2aa2228' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
      

            <a href='https://www.facebook.com/profile.php?id=100010687354089' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

         
        </div>
    );
};

export default HeaderSocials;
