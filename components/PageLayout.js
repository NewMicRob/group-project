import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default function PageLayout({ title, children, className = ""}) {
    return (
        <div className={`flex flex-col bg-gradient-to-r from-blue-600 to-purple-600 w-full min-h-screen ${className}`}>
            <Header title={title} />
            <NavBar />
            <div className="flex-1">
                <MainContent>
                    {children}
                </MainContent>
            </div>
            <Footer />
        </div>
    )
}