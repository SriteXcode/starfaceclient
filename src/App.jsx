import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Service from './Pages/Services';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';
import Logout from './Pages/Logout';
import { AdminLayout } from './Components/Layouts/Admin-Layout';
import { AdminUsers } from './Pages/Admin-Users';
import { AdminContacts } from './Pages/Admin-Contacts';
import { AdminUpdate } from './Pages/Admin-Update';
import { Countdown } from './Pages/Infographics/Countdown';
import ModellingAgency from './Pages/MainHome/Modelling_Agency';
import FashionShow from './Pages/MainHome/FashionShow';
import DanceShow from './Pages/MainHome/DanceShow';
import MusicShow from './Pages/MainHome/MusicShow';
import VendorsFashionStore from './Pages/MainHome/FashionStore_Vendors';
import FullscreenShowcase from './Pages/MainHome/FullscreenShowcase';
import PortfolioMagazine from './Pages/MainHome/PortfolioMagazine';
import VendorsMakeupHair from './Pages/MainHome/Makeup_Hair_Vendors';
import ShootTeam from './Pages/MainHome/Shoot_Team';
import FashionDesiner from './Pages/MainHome/FashionDesiner';
import JwelleryShop from './Pages/MainHome/JwelleryShop';
import Portfolios from './Pages/MainHome/Portfolios';
import { LayoutCollection } from './Pages/Layout-collection';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import { Countex } from './Pages/Infographics/Countex';
import { GoogleMap } from './Pages/Infographics/GoogleMap';
import { IconwithTrust } from './Pages/Infographics/IconwithTrust';
import { PieChart } from './Pages/Infographics/PieChart';
import { PricingTable } from './Pages/Infographics/PricingTable';
import { ProgressBar } from './Pages/Infographics/ProgressBar';              
import Accordions from './Pages/Classic/Accordions';
import Buttons from './Pages/Classic/Buttons';
import Clients from './Pages/Classic/Clients';
import ContactForm from './Pages/Classic/ContactForm';
import MembershipForm from './Pages/Classic/MembershipForm';
import Gallary from './Pages/Classic/Gallary';
import Tabs from './Pages/Classic/Tabs';
import Vendors from './Pages/Classic/Vendors';
import AboutMe from './Pages/Page/AboutMe';
// import AboutUs from './Pages/Page/AboutUs';
import Collab from './Pages/Page/Collab';
// import ContactUs from './Pages/Page/ContactUs';
import GetInTouch from './Pages/Page/GetInTouch';
import OurClient from './Pages/Page/OurClient';
import OurServices from './Pages/Page/OurServices';
import PortfolioMagzine from './Pages/Page/PortfolioMagzine';
import ShopPages from './Pages/Page/ShopPages';
import Showcase from './Pages/Page/Showcase';
import SponsorDataPortfolio from './Pages/Page/SponsorDataPortfolio';
import Team from './Pages/Page/Team';
import Entertainment from './Pages/Entertainment';
import Services from './Pages/Services';
import Faq from './Pages/Faq';
import TandQ from './Pages/TandQ';




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/faq" element={<Faq />}/>
      <Route path="/tandq" element={<TandQ />}/>
      <Route path="/Blog" element={<Blog />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/logout' element={<Logout />}/>
      <Route path='/Layout-collection' element={<LayoutCollection />}/>
      <Route path='/MainHome/Modelling_Agency' element={<ModellingAgency />}/>
      <Route path='/MainHome/FashionShow' element={<FashionShow />}/>
      <Route path='/MainHome/DanceShow' element={<DanceShow />}/>
      <Route path='/MainHome/MusicShow' element={<MusicShow />}/>
      <Route path='/MainHome/FashionStore_Vendors' element={<VendorsFashionStore />}/>
      <Route path='/MainHome/FullscreenShowcase' element={<FullscreenShowcase />}/>
      <Route path='/MainHome/PortfolioMagazine' element={<PortfolioMagazine />}/>
      <Route path='/MainHome/Makeup_Hair_Vendors' element={<VendorsMakeupHair />}/>
      <Route path='/MainHome/Shoot_Team' element={<ShootTeam />}/>
      <Route path='/MainHome/FashionDesiner' element={<FashionDesiner />}/>
      <Route path='/MainHome/JwelleryShop' element={<JwelleryShop />}/>
      <Route path='/MainHome/Portfolios' element={<Portfolios />}/>
      <Route path='/Infographics/Countdown' element={<Countdown />}/> 
      <Route path='/Infographics/Countex' element={<Countex/>}/>
      <Route path='/Infographics/GoogleMap' element={<GoogleMap/>}/> 
      <Route path='/Infographics/IconwithTrust' element={<IconwithTrust />}/>
      <Route path='/Infographics/PieChart' element={<PieChart />}/> 
      <Route path='/Infographics/PricingTable' element={<PricingTable />}/> 
      <Route path='/Infographics/ProgressBar' element={<ProgressBar />}/>
      <Route path='/Classic/Accordions' element={<Accordions />}/> 
      <Route path='/Classic/Buttons' element={<Buttons />}/> 
      <Route path='/Classic/Clients' element={<Clients />}/>
      <Route path='/Classic/ContactForm' element={<ContactForm />}/> 
      <Route path='/Classic/Gallary' element={<Gallary />}/> 
      <Route path='/Classic/MembershipForm' element={<MembershipForm />}/> 
      <Route path='/Classic/Tabs' element={<Tabs />}/> 
      <Route path='/Classic/Vendors' element={<Vendors/>}/>       
      <Route path='/Page/AboutMe' element={<AboutMe />}/> 
      {/* <Route path='/Page/AboutUs' element={<AboutUs />}/>  */}
      <Route path='/Page/Collab' element={<Collab />}/>
      {/* <Route path='/Page/ContactUs' element={<ContactUs />}/> */}
      <Route path='/Page/GetInTouch' element={<GetInTouch />}/>
      <Route path='/Page/OurClient' element={<OurClient />}/>
      <Route path='/Page/OurServices' element={<OurServices />}/>
      <Route path='/Page/PortfolioMagazine' element={<PortfolioMagazine />}/>
      <Route path='/Page/ShopPages' element={<ShopPages />}/>
      <Route path='/Page/Showcase' element={<Showcase />}/>
      <Route path='/Page/SponsorDataPortfolio' element={<SponsorDataPortfolio />}/>
      <Route path='/Page/Team' element={<Team />}/>
      <Route path="*" element={<Error />} />
    

       <Route path='/admin' element ={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />}/>
          <Route path="contacts" element={<AdminContacts />}/>
          <Route path="users/:id/edit" element={<AdminUpdate/>}/>
       </Route>

       <Route path="/" element={<Services />} />
       <Route path="/service/:id" element={<Entertainment />} />

    </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
