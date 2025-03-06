import headerImg from '../assets/headshot.jpg';
import reactLogo from '../assets/react.svg';

const Header = () => {
    return (
        <header className='justify-center flex flex-col items-center py-8 mt-24'>
            <img className='rounded-full aspect-square object-cover h-40 w-40 mb-4' src={headerImg} alt="Headshot" />
            <h1 className='text-5xl font-bold text-gray-800 mb-4'>Enyinna Ukattah</h1>
            <div className='bg-gray-200 bg-opacity-75 shadow-lg rounded-lg p-8 max-w-4xl mx-auto""'>
                <p className='text-lg text-gray-700 max-w-2xl text-center px-4'>
                    Welcome to my page👋! Here, I share my experiences with technology and my thoughts on how it shapes the world.
                    I developed this site using Vite, React and Tailwind CSS. Thanks for stopping by!
                </p>
            </div>

        </header>
    );
};

export default Header;
