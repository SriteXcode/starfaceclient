import React, { Suspense } from "react";
import Loader from "./Loader";

// Dynamically import components
const Apps = React.lazy(() => import("./Home-hero"));
const Introduction = React.lazy(() => import("./Introduction"));
const Masterpiece = React.lazy(() => import("./Masterpiece"));
const Services = React.lazy(() => import("./Services"));
const Team = React.lazy(() => import("./Team"));
const Whyus = React.lazy(() => import("./Whyus"));
const Footer = React.lazy(() => import("./Footer"));
// const LayoutCollection = React.lazy(() => import('./Layout-collection'));
// const Predesigned = React.lazy(() => import('./Predesigned'));

function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Apps />
      <Introduction />
      <Masterpiece />
      <Services />
      <Team />
      <Whyus />
      <Footer />
      {/* Uncomment these if needed */}
      {/* <LayoutCollection /> */}
      {/* <Predesigned /> */}
    </Suspense>
  );
}

export default Home;
