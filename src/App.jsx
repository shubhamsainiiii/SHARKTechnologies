// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import { ScrollToTop } from "./components/common";
// import Navbar from './components/common/Navbar';
// import HomePage from "./pages/HomePage";
// import Footer from './components/common/Footer';


// export default function App() {
//   return (
//     <HelmetProvider>
//       <BrowserRouter>
//         <ScrollToTop />

//         <Navbar />

//         <main>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//           </Routes>
//         </main>

//         <Footer />
//       </BrowserRouter>
//     </HelmetProvider>
//   );
// }


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { ScrollToTop } from './components/common';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import Footer from './components/common/Footer';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ServiceDetailPage from './pages/Servicedetailpage';



export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.875rem',
            },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  );
}