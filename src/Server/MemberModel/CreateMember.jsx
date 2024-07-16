import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {useNavigate, Link} from 'react-router-dom';
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
                            <h1 className="display-4 fw-bold me-5">創建會員</h1>
                            <p className="d-inline-flex align-items-center fs-4 gap-1 mb-0 me-3">
                                <span className="material-symbols-outlined">info</span>
                                選擇會員模組，快速建立您的會員制！
                            </p>
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#upgradeLevelModal">
                                升級至SuperPRO 💎
                            </button>
                        </div>

                        <UpgradeLevel/>
                        <div className="cards-list mt-3" style={{minHeight: "80vh"}}>
                        <div className="row row-cols-2 g-3">
                            <div className="col">
                                <Link to="/createNormalMember">
                                    <div className="card">
                                        <div className="row g-0">
                                        <div className="col-md-4 bg-img-cover rounded text-center" style={{backgroundImage: `url('${base}images/member_img1.jpg')`}}>
                                            <div className="position-relative" style={{height: "100%", minHeight: "150px"}}>
                                                <h2 className="card-title position-absolute z-index-1 top-50 start-50 translate-middle text-white text-shadow text-stroke fw-bold">
                                                    <span className="d-inline-block">普通</span><span className="d-inline-block">會員</span>
                                                </h2>
                                                <div className="w-100 h-100 bg-light opacity-30"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                            <p className="card-text px-3">「普通會員」為所有的品牌提供專屬的基礎會員系統，高效且無成本的從零建立專屬的會員制，輕鬆開始累積會員！</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">適合第一次使用的品牌</li>
                                                <li className="list-group-item">集點與兌換</li>
                                                <li className="list-group-item">用戶KYC</li>
                                                <li className="list-group-item text-decoration-line-through text-black-50">CRM管理 💎</li>
                                                <li className="list-group-item text-decoration-line-through text-black-50">建立收費制 💎</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/createTieredMember" data-bs-toggle="modal" data-bs-target="#upgradeLevelModal">
                                    <div className="card">
                                        <div className="row g-0">
                                        <div className="col-md-4 bg-img-cover rounded text-center" style={{backgroundImage: `url('${base}images/member_img2.jpg')`}}>
                                            <div className="position-relative" style={{height: "100%", minHeight: "150px"}}>
                                                <h2 className="card-title position-absolute z-index-1 top-50 start-50 translate-middle text-white text-shadow text-stroke fw-bold">
                                                    <span className="d-inline-block">💎</span>
                                                    <span className="d-inline-block">分級</span><span className="d-inline-block">會員</span>
                                                </h2>
                                                <div className="w-100 h-100 bg-light opacity-30"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                            <p className="card-text px-3">運用「分級會員」與普通會員做出差異化，且能使用推薦碼、白名單與限制會員數量，讓會員對品牌產生更多忠誠度。</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">適合需要分級會員的品牌</li>
                                                <li className="list-group-item">集點與兌換</li>
                                                <li className="list-group-item">用戶KYC</li>
                                                <li className="list-group-item text-decoration-line-through text-black-50">CRM管理 💎</li>
                                                <li className="list-group-item text-decoration-line-through text-black-50">建立收費制 💎</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/createPaidMember" data-bs-toggle="modal" data-bs-target="#upgradeLevelModal">
                                    <div className="card">
                                        <div className="row g-0">
                                        <div className="col-md-4 bg-img-cover rounded text-center" style={{backgroundImage: `url('${base}images/member_img3.jpg')`}}>
                                            <div className="position-relative" style={{height: "100%", minHeight: "150px"}}>
                                                <h2 className="card-title position-absolute z-index-1 top-50 start-50 translate-middle text-white text-shadow text-stroke fw-bold">
                                                    <span className="d-inline-block">💎</span>
                                                    <span className="d-inline-block"><span className="d-inline-block">付費</span><span className="d-inline-block">會員</span></span>
                                                </h2>
                                                <div className="w-100 h-100 bg-light opacity-30"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                            <p className="card-text px-3">若成為品牌會員需要繳交會費或保證金等，有金流上的交易，則可以使用「付費會員」模組，輕而易舉結合會員線上付費機制。</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">處理會員現金流</li>
                                                <li className="list-group-item">集點與兌換</li>
                                                <li className="list-group-item">用戶KYC</li>
                                                <li className="list-group-item">CRM管理</li>
                                                <li className="list-group-item">建立收費制</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/createVVVIPMember" data-bs-toggle="modal" data-bs-target="#upgradeLevelModal">
                                    <div className="card">
                                        <div className="row g-0">
                                        <div className="col-md-4 bg-img-cover rounded text-center" style={{backgroundImage: `url('${base}images/member_img4.jpg')`}}>
                                            <div className="position-relative" style={{height: "100%", minHeight: "150px"}}>
                                                <h2 className="card-title position-absolute z-index-1 top-50 start-50 translate-middle text-white text-shadow text-stroke fw-bold"> 
                                                    <span className="d-block">💎</span>
                                                    <span className="d-block">VVVIP</span>
                                                </h2>
                                                <div className="w-100 h-100 bg-light opacity-30"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                            <p className="card-text px-3">VVVIP包含所有會員模組功能，並能解鎖SuperID功能，加強鎖定深度會員，用更豐富與獨享的互動，建立更長遠的會員關係。</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">適合會員導向的品牌</li>
                                                <li className="list-group-item">集點與兌換</li>
                                                <li className="list-group-item">用戶KYC</li>
                                                <li className="list-group-item">CRM管理</li>
                                                <li className="list-group-item">建立收費制</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    );
}

export default function CreateMember() {
    return (
        <>
            <Header kind = "design"/>
            <Body/>
            <Footer/>
        </>
    )
}