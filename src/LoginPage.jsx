import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import ParticleComponent from './scss/components/particles';

let base = import.meta.env.VITE_BASE_URL || "../";

function Common(state){
  let navigate = useNavigate();

  function Direct() {
    if(state.state === "server"){
      navigate("/home");
    }
    else if(state.state === "client"){
      navigate("/clientHome");
    }
  }
  return(                    
    <div className="card shadow border-0 p-3">
      <h2 className="text-center border-bottom border-dark border-2 font-family-TiroBangla p-4">Connect your wallet</h2>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item border-0 py-0">
            <button className="d-inline-block bg-light rounded w-100 p-2 ps-3 mb-2 text-star text-decoration-none button-as-link text-start" onClick={() => { Direct(); }}>
              <img src={base + "images/WalletConnect-icon.svg"} alt="WalletConnect" className="me-2" width="24" />
              <span>WalletConnect</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Login() {
  let location = useLocation();
  if(location.state === "server"){
    return (
      <div className="comtainer-fluid d-flex flex-column justify-content-center align-items-center position-relative bg-img-cover bg-image-animation-bottomToTop" style={{ backgroundImage: `url(${base}images/logIn-background-img.jpg)`, height: "100vh" }}>
        <div className="position-absolute top-0 start-0 ms-5 mt-3">
          <h1 className="font-family-OleoScript display-1 text-white">Superlaty</h1>
        </div>
        <Common state={location.state}/>
        <p className="mt-3 text-center text-white text-stroke text-shadow">
            還是你是 <Link to="/login" state={"client"} className="text-white border-bottom border-white">會員</Link> ？
        </p>
      </div>
    );
  }
  else if(location.state === "client"){
    return (
      <>
        <div id="particles-js"><ParticleComponent/></div>

        <div className="comtainer-fluid d-flex flex-column justify-content-center align-items-center position-relative h-full-screen px-3">

          <div className="position-absolute top-0 start-0 ms-5 mt-3">
              <h1 className="font-family-OleoScript display-1 text-secondary">Superlaty</h1>
          </div>
          <Common state={location.state}/>
          <p className="mt-3 text-center text-white text-stroke text-shadow">
            還是你是 <Link to="/login" state={"server"} className="text-white border-bottom border-white">品牌</Link> ？
          </p>
        </div>
      </>
    );
  }
}