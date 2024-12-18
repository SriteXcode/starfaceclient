import react, { Suspense } from 'react'
import { LayoutCollection } from './Layout-collection'
import { Predesigned } from './Predesigned'
import Apps from './Home-hero'
import Introduction from './Introduction'
import Entertainment from './Entertainment'
import Services from './Services'
import Masterpiece from './Masterpiece'
import Team from './Team'
import Footer from './Footer'
import Whyus from './Whyus'



function Home() {
  
  return (
    <>
    <Suspense fallback={'Loading...'}>
       <Apps />
       <Introduction />
       <Masterpiece />
       <Services />
       <Team />
       <Whyus />
       <Footer />
       {/* <LayoutCollection /> */}
       {/* <Predesigned /> */}
    </Suspense>
    </>
  )
}

export default Home
