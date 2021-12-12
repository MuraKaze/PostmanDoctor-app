import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className="min-h-screen">
                {children}
            </div>
            <Footer/>
        </div>
    )
}
