import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className='flex flex-col justify-center items-center h-screen '>
            <div className='flex flex-col items-center space-y-4'>
                <div className='flex items-center space-x-4'>
                    <FaLinkedin className='text-3xl text-blue-600' />
                    <a href='https://www.linkedin.com/in/enyinna-ukattah-036648276/' className='text-xl font-medium text-blue-600 hover:underline'>LinkedIn</a>
                </div>
                <div className='flex items-center space-x-4'>
                    <FaGithub className='text-3xl text-black' />
                    <a href='https://github.com/ukattah' className='text-xl font-medium text-black hover:underline'>GitHub</a>
                </div>
            </div>
        </div>
    );
}
