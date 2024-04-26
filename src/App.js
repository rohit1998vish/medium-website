import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Write from "./Components/Write/Write";
import MemberShip from "./Components/memberShip/MemberShip";
import OurStory from "./Components/ourStory/OurStory";
import SignUp from "./Components/signIn/SignUp";
import SignIn from "./Components/signIn/SignIn";
import Open from "./Components/signIn/accountOpen";
import GetUnlimited from "./Components/GetUnlimited/GetUnlimited";


function App() { 
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<OurStory />} />
          <Route path="/membership" element={<MemberShip />} />
          <Route path="/write" element={<Write />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/accountOpen" element={<Open />} />
          <Route exact path="/getunlimited" element={<GetUnlimited />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
