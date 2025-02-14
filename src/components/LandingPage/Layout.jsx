import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
    return (
        <section>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </section>
    )
}

export default Layout