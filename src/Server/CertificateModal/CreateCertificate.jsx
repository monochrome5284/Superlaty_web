import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {useNavigate, useLocation, Link} from 'react-router-dom';
import UpgradeLevel from '../UpgradeLevel';

function Body () {
    let navigate = useNavigate();
    let base = import.meta.env.VITE_BASE_URL || "../";
    return (
        <div className="container-fluid bg-blue-gradient" style={{marginTop:"68px"}}>
            <div className="container">
                <div className="row">
                    <div className="col py-4">
                        <div className="d-flex flex-wrap align-items-center ps-3">
                            <button onClick={() => navigate(-1)} className="btn p-2 d-inline-flex justify-content-center align-items-center ms-return-key-halfrem">
                                <span className="material-symbols-outlined fs-2">arrow_back</span>
                            </button>
                            <h1 className="display-4 fw-bold me-5">發行憑證</h1>
                            <p className="d-inline-flex align-items-center fs-4 gap-1 mb-0 me-3">
                                <span className="material-symbols-outlined">info</span>
                                選擇憑證模組，與會員增添火花！
                            </p>
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#upgradeLevelModal">
                                    升級至SuperPRO 💎
                            </button>
                        </div>
                        <div className="cards-list mt-3" style={{minHeight: "80vh"}}>
                            <div className="row row-cols-2 g-3">
                                <div className="col">
                                    <Link to="/issuedMembershipPoint">
                                        <div className="card shadow-sm">
                                            <div className="row g-0">
                                            <div className="col-md-4 bg-img-cover rounded text-center" style={{backgroundImage: `url('${base}images/certificate_img1.jpg')`}}>
                                                <div className="position-relative" style={{height: "100%", minHeight: "150px"}}>
                                                    <h2 className="card-title position-absolute z-index-1 top-50 start-50 translate-middle text-white text-shadow text-stroke fw-bold">
                                                        <span className="d-inline-block">會員</span><span className="d-inline-block">點數</span>
                                                    </h2>
                                                    <div className="w-100 h-100 bg-light opacity-30"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                <p className="card-text px-3">設置品牌專屬點數，為會員制注入靈魂，使會員更加積極參與品牌的活動和服務，吸引更多潛在客戶並促進回購率。</p>
                                                <p className="card-text px-3">使用ERC20協議為標準，以同質化代幣形式發行，將模組規格統一，讓品牌更方便管理；且可在交易池實際部署上鏈，讓會員點數流通世界。</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/issuedTicket">
                                        <div className="card shadow-sm">
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-img-cover rounded text-center" style={{backgroundImage: `url('${base}images/certificate_img2.jpg')`}}>
                                                    <div className="position-relative" style={{height: "100%", minHeight: "150px"}}>
                                                        <h2 className="card-title position-absolute z-index-1 top-50 start-50 translate-middle text-white text-shadow text-stroke fw-bold">
                                                            <span className="d-inline-block">賦能</span><span className="d-inline-block">票券</span>
                                                        </h2>
                                                        <div className="w-100 h-100 bg-light opacity-30"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <p className="card-text px-3">賦能票券為數位票券，品牌提供專屬的賦能，並整合收費系統，帶來多元獨特的會員體驗，適合舉辦活動、實體兌換等需要票券驗證的品牌。</p>
                                                        <p className="card-text px-3">使用ERC1155協議為標準，以非同質化代幣形式發行，未來可在交易池實際部署上鏈，讓賦能票券得以流通，創造二級市場。</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/issuedLuckyDraw" data-bs-toggle="modal" data-bs-target="#upgradeLevelModal">
                                        <div className="card shadow-sm">
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-img-cover rounded text-center" style={{backgroundImage: `url('${base}images/certificate_img3.jpg')`}}>
                                                    <div className="position-relative" style={{height: "100%", minHeight: "150px"}}>
                                                        <h2 className="card-title position-absolute z-index-1 top-50 start-50 translate-middle text-white text-shadow text-stroke fw-bold">
                                                            <span className="d-block">💎</span>
                                                            <span className="d-inline-block">抽獎</span><span className="d-inline-block">禮物</span>
                                                        </h2>
                                                        <div className="w-100 h-100 bg-light opacity-30"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <p className="card-text px-3">給會員來點驚喜！若是想吸引眼球，或是要慶祝特定時刻，抽獎禮物都是品牌的好方法！建立起與會員及非會員的互動，提高品牌的人情味。</p>
                                                        <p className="card-text px-3">抽獎禮物的憑證可用ERC20或ERC1155協議標準發行，為品牌對抽獎的禮物提供更大操作空間，並促進更有趣的會員環境。</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/issuedCooperation" data-bs-toggle="modal" data-bs-target="#upgradeLevelModal">
                                        <div className="card shadow-sm">
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-img-cover rounded text-center" style={{backgroundImage: `url('${base}images/certificate_img4.jpg')`}}>
                                                    <div className="position-relative" style={{height: "100%", minHeight: "150px"}}>
                                                        <h2 className="card-title position-absolute z-index-1 top-50 start-50 translate-middle text-white text-shadow text-stroke fw-bold">
                                                            <span className="d-block">💎</span>
                                                            <span className="d-inline-block">聯名</span><span className="d-inline-block">合作</span>
                                                        </h2>
                                                        <div className="w-100 h-100 bg-light opacity-30"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <p className="card-text px-3">品牌+品牌=擴大受眾！聯名合作可以將品牌間的受眾合併，帶來獨特的產品或服務體驗，吸引更多會員，創造前所未有的品牌價值和特色形象。</p>
                                                        <p className="card-text px-3">聯名合作的憑證可用ERC20或ERC1155協議標準發行，為品牌對抽獎的禮物提供更大操作空間，並促進更有趣的會員環境。</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <UpgradeLevel/>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default function CreateCertificate() {
    return (
        <>
            <Header kind = "design"/>
            <Body/>
            <Footer/>
        </>
    )
}