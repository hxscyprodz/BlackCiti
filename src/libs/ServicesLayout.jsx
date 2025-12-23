import Footer from "./footer"

export default function ServicesLayout({children}) {
    return(
        <div>
            {children}
            <Footer />
        </div>
    )
}