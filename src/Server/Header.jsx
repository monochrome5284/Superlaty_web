import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Header(params) {
    let navigate = useNavigate();
    let base = import.meta.env.VITE_BASE_URL || "../";
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary fs-5">
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand font-family-OleoScript d-inline-flex gap-2 align-items-center me-5">
                    <img src={base + "images/Superlaty_LOGO_NObg.png"} alt="" width="48" height="48" className="d-inline-block align-text-top"></img>
                    Superlaty
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button className="button-as-link black-background" data-bs-toggle="modal" data-bs-target="#accountModal">
                            <img src={params.user&&params.user.avatar?params.user.avatar:base + "images/account_photo.jpg"} alt="" width="48" height="48" className="img-circle d-inline-block align-text-top" />
                        </button>
                        <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav flex-grow-1 pe-3 gap-2">
                            <li className="nav-item">
                                <span onClick={()=>{navigate("/home")}} data-bs-dismiss="offcanvas" className={`nav-link ${params.kind === "home"?"active":""} d-inline-flex align-items-center gap-1`} aria-current="page" >
                                    <span className="material-symbols-outlined fill-icon">home</span>
                                    首頁
                                </span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className={`nav-link ${params.kind === "design"?"active":""} dropdown-toggle d-inline-flex align-items-center gap-1`} id="offcanvasNavbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="material-symbols-outlined">
                                        rocket_launch
                                    </span>
                                    設計
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown1">
                                    <li><button onClick={()=>{navigate("/design")}} data-bs-dismiss="offcanvas" className="dropdown-item">設計管理</button></li>
                                    <li><button onClick={()=>{navigate("/createMember")}} data-bs-dismiss="offcanvas" className="dropdown-item">創建會員</button></li>
                                    <li><button onClick={()=>{navigate("/createCertificate")}} data-bs-dismiss="offcanvas" className="dropdown-item" >發行憑證</button></li>
                                    <li><span className="dropdown-item" >服務介紹</span></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle d-inline-flex align-items-center  gap-1" id="offcanvasNavbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="material-symbols-outlined">
                                        cached
                                    </span>
                                    池子
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown2">
                                    <li><span className="dropdown-item" >交易池子</span></li>
                                    <li><span className="dropdown-item" >建立池子</span></li>
                                    <li><span className="dropdown-item" >管理池子</span></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle d-inline-flex align-items-center  gap-1" id="offcanvasNavbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="material-symbols-outlined">
                                        group
                                    </span>
                                    會員社群
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown3">
                                    <li><span className="dropdown-item" >新增社群</span></li>
                                    <li><span className="dropdown-item" >管理社群</span></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle d-inline-flex align-items-center  gap-1" id="offcanvasNavbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="material-symbols-outlined">
                                        bolt
                                    </span>
                                    儀表板
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown4">
                                    <li><span className="dropdown-item" >數據分析</span></li>
                                    <li><span className="dropdown-item" >C R M</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="/superPro" state={params} className="me-4 btn btn-light d-none d-lg-inline-flex align-items-center gap-1 text-decoration-none">
                    <span className="d-xl-block d-none">升級至</span>SuperPRO 💎
                </Link>
                <button className="me-5 d-none d-lg-block button-as-link black-backgroun"  data-bs-toggle="modal" data-bs-target="#accountModal">
                    <img src={params.user&&params.user.avatar?params.user.avatar:base + "images/account_photo.jpg"} alt="" width="48" height="48" className="img-circle d-inline-block align-text-top" />
                </button>
            </div>
        </nav>

        <div className="modal fade" id="accountModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0">
                        <h5 className="modal-title" id="exampleModalLabel">帳號資訊</h5>
                        <button type="button" id="close" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <div className="row g-3">
                                <div className="col-6 mb-3">
                                    <label htmlFor="accountName" className="form-label">帳號名稱</label>
                                    <input type="text" className="form-control" id="accountName" value="" disabled/>
                                </div>
                                <div className="col-6 mb-3">
                                    <label htmlFor="UID" className="form-label">UID</label>
                                    <input type="text" className="form-control" id="UID" value="" disabled/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="walletAdd" className="form-label">錢包地址</label>
                                <input type="text" className="form-control" id="walletAdd" value="" disabled/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="servicePlan" className="form-label">服務方案</label>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" id="servicePlan" value="Free" aria-label="Service Plan" disabled/>
                                    </div>
                                    <div className="col">
                                        <button  type="button" className="btn btn-primary w-100 d-inline-flex justify-content-center align-items-center">
                                            查看方案內容
                                            <span className="material-symbols-outlined fs-5">arrow_top_right</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="registInfo" className="form-label">註冊資訊</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" id="registInfo" value="Superlaty@gmail.com" disabled/>
                                    <Link to="https://secure.walletconnect.com/" className="col-4 btn btn-secondary d-inline-flex justify-content-center align-items-center">
                                        <span className="material-symbols-outlined">upgrade</span>
                                        升級錢包
                                    </Link>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="referralCode" className="form-label">推薦碼</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="referralCode" value="" aria-label="referral code" disabled/>
                                    <button onClick={() => {navigator.clipboard.writeText(params.user?params.user.referral_code:"")}} className="col-4 btn btn-secondary d-inline-flex justify-content-center align-items-center">
                                        <span className="material-symbols-outlined fs-5">content_copy</span>
                                        複製推薦碼
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-top-0">
                        <button className="btn btn-light px-3 me-3" onClick={()=>{navigate("/login", {state:"server"})}} data-bs-dismiss="modal">登出</button>
                        <button type="button" onClick={()=>{navigate("/BrandInfo")}} className="btn btn-info d-inline-flex justify-content-center align-items-center px-3" data-bs-dismiss="modal">
                            <span className="material-symbols-outlined fs-5">edit</span>
                            修改帳號資訊
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Header;