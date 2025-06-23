import React, { Suspense } from "react";
import Loader from "./Component/Loader/Loader";
const Home = React.lazy(() => import(`./Pages/Home/Home`));
const Navbar = React.lazy(() => import("./Component/Navbar/Navbar"));
const Footer = React.lazy(() => import("./Component/Footer/Footer"));
const App = () => {
  return (
    <div>
       <div>
      
      <Suspense fallback={<Loader />}>
      
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </Suspense>
    </div>
    </div>
  );
};

export default App;
