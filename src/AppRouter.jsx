import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from './LoginPage.jsx';
import HomePage from './Server/Home.jsx';
import Design from './Server/Design.jsx';
import CreateMember from './Server/MemberModel/CreateMember.jsx';
import CreateNormalMember from './Server/MemberModel/CreateNormalMember.jsx';
import CreatePaidMember from './Server/MemberModel/CreatePaidMember.jsx';
import CreateTieredMember from './Server/MemberModel/CreateTieredMember.jsx';
import CreateVVVIPMember from './Server/MemberModel/CreateVVVIPMember.jsx';
import SuperPro from './Server/SuperPro.jsx';
import CreateCertificate from './Server/CertificateModal/CreateCertificate.jsx';
import IssuedMembershipPoint from './Server/CertificateModal/IssuedMembershipPoint.jsx';
import IssuedTicket from './Server/CertificateModal/IssuedTicket.jsx';
import MemberList from './Server/MemberModel/MemberList.jsx';


import PreLogin from './PreLogin.jsx';
import ClientCreateMemberProfile from './Client/ClientCreateMemberProfile.jsx';
import ClientAssets from './Client/ClientAssets.jsx';
import BrandInfo from './Server/BrandInfo.jsx';
import CreateBrandProfile from './Server/CreateBrandProfile.jsx';
import ClientBrand from './Client/ClientBrand.jsx';
import ClientMemberCard from './Client/ClientMemberCard.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import 'material-symbols';
import './scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import './scss/components/particles.jsx';

// App component
export default function AppRouter() {
  return (
      <Router>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route element={<PreLogin/>} path={'/'}></Route>
          <Route element={<Login/>} path={'/login'}></Route>
          <Route element={<HomePage/>} path={'/home'}></Route>
          <Route element={<Design/>} path={'/design'}></Route>
          <Route element={<CreateMember/>} path={'/createMember'}></Route>
          <Route element={<CreateNormalMember/>} path={'/createNormalMember'}></Route>
          <Route element={<CreatePaidMember/>} path={'/createPaidMember'}></Route>
          <Route element={<CreateTieredMember/>} path={'/createTieredMember'}></Route>
          <Route element={<CreateVVVIPMember/>} path={'/createVVVIPMember'}></Route>
          <Route element={<SuperPro/>} path={'/superPro'}></Route>
          <Route element={<CreateCertificate/>} path={'/createCertificate'}></Route>
          <Route element={<IssuedMembershipPoint/>} path={'/issuedMembershipPoint'}></Route>
          <Route element={<IssuedTicket/>} path={'/issuedTicket'}></Route>
          <Route element={<BrandInfo/>} path={'/brandInfo'}></Route>
          <Route element={<CreateBrandProfile/>} path={'/createBrandProfile'}></Route>
          <Route element={<MemberList/>} path={'memberList/'}></Route>
          <Route element={<ClientMemberCard/>} path={'ClientMemberCard/'}></Route>

          <Route element={<ClientCreateMemberProfile/>} path={'/clientCreateMemberProfile'}></Route>
          <Route element={<ClientAssets/>} path={'/clientHome'}></Route>
          <Route element={<ClientBrand/>} path={'/clientBrand'}></Route>

        </Routes>
      </Router>
  );
}
