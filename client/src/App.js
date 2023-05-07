import React, { useState } from "react";
import Navbar from "./components/pages/Navbar/Navbar";
import Composer from "./components/pages/Composer/Composer";
import Repertoires from "./components/pages/Repertoire/Repertoire";
import Repertoire from "./components/pages/Repertoire/Repertoire.detail";

import Instrument from "./components/pages/Instrument/Instrument";
import Recommendation from "./components/pages/Recommendation/Recommendation";
import Forum from "./components/pages/Forum/scrollforum";
import Home from "./components/pages/Home/Home";
import Sidebar from "./components/pages/Sidebar/Sidebar";
import { Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import Flute from "./components/pages/Instrument/Flute";
import Search from "./components/pages/Search/Search";
import InstrumentChild from "./components/pages/Instrument/InstrumentChild";
import Admin from "./components/pages/Admin/Admin";
import Login from "./components/pages/Authentication/login";
import Register from "./components/pages/Authentication/registration";
import ComposerMongodb from "./components/pages/Composer/Profile";
import Profile from "./components/pages/Profile/Profile";
import AdminComposer from "./components/pages/Admin/AdminComposer";
import AddComposer from "./components/pages/Admin/Addcomposer";
import RemoveComposer from "./components/pages/Admin/RemoveComposer";
import AdminPiece from "./components/pages/Admin/AdminPiece";
import AddPiece from "./components/pages/Admin/Addpiece";
import RemovePiece from "./components/pages/Admin/RemovePiece";
import { DefaultContext } from "react-icons/lib";
import WithoutNav from "./WithoutNav";
import WithNav from "./WithNav";
import RecommChild from "./components/pages/Recommendation/RecommChild";
import AdminRecomm from "./components/pages/Admin/AdminRecomm";
import AddRecomm from "./components/pages/Admin/AddRecomm";
import RemoveRecomm from "./components/pages/Admin/RemoveRecomm";

import Logout from "./components/pages/Authentication/logout";
import Profiles from "./components/pages/Composer/Profile-piece";
import About from "./components/pages/AboutUs/about";

const App = () => {
    
  return (
    <>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/admin/composer" element={<AdminComposer />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/addcomposer" element={<AddComposer />} />
          <Route path="/admin/removecomposer" element={<RemoveComposer />} />
          <Route path="/admin/piece" element={<AdminPiece />} />
          <Route path="/admin/addpiece" element={<AddPiece />} />
          <Route path="/admin/removepiece" element={<RemovePiece />} />
          <Route path="/admin/recommendation" element={<AdminRecomm />} />
          <Route path="/admin/addrecommendation" element={<AddRecomm />} />
          <Route path="/admin/removerecommendation" element={<RemoveRecomm />} />

        </Route>
        <Route  element={<WithNav />}>
          {/* <Navbar toggle={toggle} />
          <Sidebar isopen={isopen} toggle={toggle} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/api/composers" element={<Composer />} />
          <Route path="/pieces" element={<Repertoires />} />
          <Route path="/instrument" element={<Instrument />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/api/composers/:id" element={<ComposerMongodb />} />
          <Route path="/api/pieces/:id" element={<Repertoire />} />
          
          <Route path="/recommendation/:title" element={<RecommChild />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/instrument/:instrument" element={<InstrumentChild />} />
          <Route path="/api/auth" element={<Login />} />
          <Route path="/api/users" element={<Register />} />

          <Route path="/api/logout" element={<Logout />} />
          <Route path="/about" element={<About/>} />
          <Route path="/piece/:piece" element={<Profiles />} />

        </Route>
      </Routes>
      
        <br/><br/><br/>
        </>
    
  );

};

export default App;
