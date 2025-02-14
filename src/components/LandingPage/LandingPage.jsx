import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './HomePage/HomePage'
import SignIn_SignUp from './SignIn_SignUp/SignIn_SignUp'
import DetailRegistration from './DetailRegistration/DetailRegistration'
import PortfolioWebsite from '../PortfolioWebsite/PortfolioWebsite'
import BlogMain from './Blog/BlogMain'


const LandingPage = () => {
    return (
        <Layout>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn_SignUp />} />
            <Route path="/detail-registration" element={<DetailRegistration />} />
            <Route path="/portfolio-website" element={<PortfolioWebsite />} />
            <Route path="/blog" element={<BlogMain />} />
            </Routes>
        </Layout>
    )
}

export default LandingPage
