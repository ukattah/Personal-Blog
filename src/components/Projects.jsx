export default function Projects() {
    return (
        <div className='flex flex-col justify-center items-center h-screen '>
            <div className='flex flex-col items-center space-y-4'>
                <div className='flex items-center space-x-4'>
                    <a href='projects/1' className='text-xl font-medium text-blue-600 hover:underline'>Project 1</a>
                </div>
                <div className='flex items-center space-x-4'>
                    <a href='projects/2' className='text-xl font-medium text-black hover:underline'>Project 2</a>
                </div>
            </div>
        </div>
    );
}
