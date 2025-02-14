import { BrowserRouter } from 'react-router-dom';

import LandingPage from "./components/LandingPage/LandingPage"
import PortfolioWebsite from "./components/PortfolioWebsite/PortfolioWebsite"

const App = () => {



  return (
    <BrowserRouter>
      <LandingPage/>
    </BrowserRouter>
  )
}

export default App

