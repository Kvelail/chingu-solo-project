import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__box'>
                <a
                    href='https://github.com/Kvelail'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='footer__link'
                >
                    <AiFillGithub size='3rem' />
                </a>
                <a
                    href='https://www.linkedin.com/in/tarik-alikadic/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='footer__link'
                >
                    <AiFillLinkedin size='3rem' />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
