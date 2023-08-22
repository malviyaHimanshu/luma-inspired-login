import { useLocation } from "react-router-dom"

export default function NotFound() {

    const location = useLocation();

    return (
        <div className="animate-[fadeIn_0.3s_ease-in-out_forwards]">
            <div className="max-w-5xl mx-auto p-5 mt-10">
                <h1 className='text-3xl font-bold'>404: Not found</h1>
            </div>
            <hr className="border-primary-light" />
            <div className="max-w-5xl mx-auto p-5">
                <p><span className="font-mono font-bold text-sm text-error">`{location.pathname}`</span> does not exist.</p>
            </div>
        </div>
    )
}