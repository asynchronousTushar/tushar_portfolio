import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebook } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkdin.com" targget="_blank" ><BsLinkedin /></a>
            <a href="https://github.com" target="_blank"><FaGithub /></a>
            <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
        </div>
    );
}

export default HeaderSocials;