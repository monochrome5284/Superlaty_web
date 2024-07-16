import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function ClientHeader(params) {
    let navigate = useNavigate();
    let base = import.meta.env.VITE_BASE_URL || "../";
    return (
    <>
      <nav className ="navbar navbar-light bg-light navbar-expand-lg fixed-top fs-5 shadow-lg">
      <div className ="container-fluid">
          <Link to ="/clientHome" className ="navbar-brand font-family-OleoScript d-inline-flex align-items-center gap-2 me-5" >
              <img src={base + "images/Superlaty_LOGO.jpg"} alt="" width="48" height="48" className ="d-inline-block align-text-top img-circle"/>
              Superlaty
          </Link>
          <button className ="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className ="navbar-toggler-icon"></span>
          </button>
          <div className ="offcanvas offcanvas-end bg-light text-light" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className ="offcanvas-header">
                  <button className="button-as-link" data-bs-toggle="modal" data-bs-target="#accountModal">
                      <img src={base + "images/account_photo.jpg"} alt="" width="48" height="48" className ="img-circle d-inline-block align-text-top"/>
                  </button>
                  <button type="button" className ="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className ="offcanvas-body">
                  <ul className ="navbar-nav flex-grow-1 pe-3 gap-2">
                      <li className ="nav-item">
                          <Link to ="/clientHome" className ="nav-link active d-inline-flex align-items-center gap-1" aria-current="page" >
                              <span className ="material-symbols-outlined fill-icon">home</span>
                              首頁
                          </Link>
                      </li>
                      <li className ="nav-item">
                          <a className ="nav-link d-inline-flex align-items-center gap-1" aria-current="page" >
                              <span className ="material-symbols-outlined">badge</span>
                              你的會員
                          </a>
                      </li>
                      <li className ="nav-item">
                          <a className ="nav-link d-inline-flex align-items-center gap-1" aria-current="page" >
                              <span className ="material-symbols-outlined fill-icon">cached</span>
                              交易池子
                          </a>
                      </li>
                      <li className ="nav-item">
                          <a className ="nav-link d-inline-flex align-items-center gap-1" aria-current="page" >
                              <span className ="material-symbols-outlined">group</span>
                              會員社群
                          </a>
                      </li>
                      <li className ="nav-item">
                          <a className ="nav-link d-inline-flex align-items-center gap-1" aria-current="page" >
                              <span className ="material-symbols-outlined">support_agent</span>
                          關於我們
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <Link to ="#" className ="me-5 d-none d-lg-block"  data-bs-toggle="modal" data-bs-target="#accountModal">
              <img src={base + "images/account_photo.jpg"} alt="" width="48" height="48" className ="img-circle d-inline-block align-text-top"/>
          </Link>
      </div>
      </nav>

      <div className ="modal fade" id="accountModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className ="modal-dialog modal-dialog-centered">
          <div className ="modal-content">
            <div className ="modal-header border-bottom-0">
              <h5 className ="modal-title" id="exampleModalLabel">帳號資訊</h5>
              <button type="button" className ="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className ="modal-body">

              <form className="">
                <div className ="row g-3">
                  <div className ="col-6 mb-3">
                      <label htmlFor="accountName" className="form-label">帳號名稱</label>
                      <input type="text" className ="form-control" id="accountName" value=""/>
                  </div>
                  <div className ="col-6 mb-3">
                  <label htmlFor="UID" className="form-label">UID</label>
                      <input type="text" className="form-control border-0 text-gray" id="UID" value={params.user?params.user._id:""} disabled readOnly/>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-6 mb-3">
                      <label htmlFor="accountName" className="d-block form-label">性別</label>
                      <input className="form-control border-0 text-gray" type="text" id="sex" value="" disabled readOnly/>
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="birthday" className="form-label">生日</label>
                    <input type="date" className="form-control border-0 text-gray" id="birthday" aria-label="input time" value="" disabled readOnly/>
                  </div>
                </div>
                <div className ="mb-3">
                  <label htmlFor ="walletAdd" className ="form-label">錢包地址</label>
                  <input type="text" className="form-control border-0 text-gray" id="walletAdd" value="" disabled readOnly/>
                </div>
                <div className ="mb-3">
                  <label htmlFor="registInfo" className ="form-label">註冊資訊</label>
                  <div className ="input-group">
                    <input type="email" className="form-control border-0 text-gray" id="registInfo" value="Superlaty@gmail.com" disabled readOnly/>                
                    <Link to="https://secure.walletconnect.com/"  className ="col-4 btn btn-secondary d-inline-flex justify-content-center align-items-center">
                      <span className ="material-symbols-outlined">upgrade</span>
                      升級錢包
                    </Link>
                  </div>
                </div>
                <div className ="mb-3">
                  <label htmlFor ="referralCode" className ="form-label">推薦碼</label>
                  <div className ="input-group">
                  <input type="text" className="form-control border-0 text-gray" id="referralCode" value="" aria-label="referral code" disabled readOnly/>                  
                    <button onClick={() => {navigator.clipboard.writeText(params.user?params.user.referral_code:"")}} className ="col-4 btn btn-secondary d-inline-flex justify-content-center align-items-center">
                      <span className ="material-symbols-outlined fs-5">content_copy</span>
                      複製推薦碼
                    </button>
                  </div>
                </div>
              </form>


            </div>
            <div className ="modal-footer border-top-0">
              <button onClick={()=>{navigate("/login", {state:"client"})}} type="button" className ="btn btn-light px-3 me-3" data-bs-dismiss="modal" >登出</button>
              <button onClick={()=>{navigate("/clientHome")}} type="submit" className="btn btn-info d-inline-flex justify-content-center align-items-center px-3" data-bs-dismiss="modal">            
              <span className ="material-symbols-outlined fs-5">edit</span>
                確認修改
              </button>
            </div>
          </div>
        </div>
      </div>

    </>


    );
}

export default ClientHeader;