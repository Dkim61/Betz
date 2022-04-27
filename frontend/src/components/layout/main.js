import React from "react";
import { Routes ,Route } from 'react-router-dom';
import GroupList from "../group/group-list";
import GroupDetails from "../group/group-details";
import { useAuth } from '../hooks/useAuth';
import Register from "../user/register";
import Account from "../user/account";

function Main() {

  const { authData } = useAuth();

  return (
    <div className="main">
      {authData && <h3>{authData.user.username}</h3>}
      <Routes>
        <Route path='/' element={<GroupList/>} />
        <Route path='/details/:id' element={<GroupDetails/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/account' element={<Account/>} />
      </Routes>
    </div>
  );
}

export default Main;
