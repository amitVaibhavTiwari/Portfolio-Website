
export default function Loader() {
    return (
        <div className="flex items-center justify-center h-[90vh] ">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-t-black dark:border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

