import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/layout"
import PageNotFound from "../pages/404"
import AboutPage from "../pages/about"
import HomePage from "../pages/home"


const AppRouter = () => {
   return (

      <Layout>
         <BrowserRouter>
            <Routes>
               <Route path="/" default element={<HomePage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </BrowserRouter>
      </Layout>
   )
}

export default AppRouter