
export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-700 to-purple-700 text-white w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] h-16 flex items-center justify-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Michael R Newman
            </p>
        </footer>
    );
}