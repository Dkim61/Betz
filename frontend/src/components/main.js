import React from "react";
import { Routes ,Route } from 'react-router-dom';
import GroupList from "./group-list";
import GroupDetails from "./group-details";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path='/' element={<GroupList/>} />
        <Route path='/details/:id' element={<GroupDetails/>} />
      </Routes>
    </div>
  );
}

export default Main;
