// Wrapper for main content
export default function MainContent({ children }) {
    return (
        <div className="flex-grow w-full">
            <main className="w-full py-8 px-6">
                {children}
            </main>
        </div>
    );
}
