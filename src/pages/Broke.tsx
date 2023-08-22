export default function Broke() {
    
    return (
        <div className="bg-primary h-screen w-screen absolute top-0 left-0 right-0 bottom-0 z-50 grid place-content-center">
            <div className="animate-[fadeIn_0.3s_ease-in-out_forwards] text-center">
                <div className="h-24 w-24 border border-primary-light bg-primary-dark rounded-full grid place-content-center mx-auto">
                    <h1 className='text-5xl font-bold select-none pointer-events-none'>👽</h1>
                </div>
                <p className="font-bold text-3xl mt-8 text-text-secondary max-w-md">You can close this page, <span className="text-white">and enjoy your life.</span> Supreme Leader loves you.</p>
            </div>
        </div>
    );
}