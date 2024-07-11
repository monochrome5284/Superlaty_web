import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Body () {
    return (
        <div className="container-fluid" style={{marginTop:"68px"}}>
            <div className="container">
            <div className="row">
                <div className="col py-4">
                    <h1 className="display-3 font-family-OleoScript text-secondary text-center">Create SUPER Loyalty</h1>
                    <p className="text-center fs-5">暢享所有使用功能，打造超級會員生態！💎</p>
                </div> 
            </div>
            <div className="row row-cols-1 row-cols-lg-3 g-4 mb-5">
                <div className="col">
                    <button className="text-decoration-none button-as-link" style={{width:"100%"}}>
                        <div className="card h-100 shadow border-0">
                            <div className="card-body">
                                <div className="border-bottom border-dark text-center font-family-TiroBangla mb-3">
                                    <h2 className="card-title fs-4 mb-1">Free</h2>
                                    <p className="text-black-50">USD $0/month</p>
                                </div>
                                <p className="mb-2">適合剛開始使用的品牌：</p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        創建<strong className="border-bottom border-dark">普通會員</strong>與<strong className="border-bottom border-dark">分級會員</strong>
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        發行<strong className="border-bottom border-dark">會員點數</strong>與<strong className="border-bottom border-dark">賦能票券</strong>
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        建立<strong className="border-bottom border-dark">交易池子</strong>與<strong className="border-bottom border-dark">新增社群</strong>
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        擁有<span className="badge bg-secondary">3個</span>設計數量
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        可使用<span className="badge bg-secondary">1GB</span>儲存空間
                                    </li>
                                </ul>
                                <div className="text-center">
                                    <button className="btn btn-secondary">您目前的專案</button>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="col">
                    <button className="text-decoration-none button-as-link"  style={{width:"100%"}}>
                        <div className="card h-100 shadow border-0">
                            <div className="card-body">
                                <div className="border-bottom border-dark text-center font-family-TiroBangla mb-3">
                                    <h2 className="card-title fs-4 mb-1">PRO</h2>
                                    <p className="text-black-50">USD $30/month</p>
                                </div>
                                <p className="mb-2">包含所有Free方案內容，以及：</p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        創建<strong className="border-bottom border-dark">付費會員</strong>與<strong className="border-bottom border-dark">抽獎禮物</strong>
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        管理<strong className="border-bottom border-dark">交易池子</strong>與<strong className="border-bottom border-dark">社群</strong>
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        CRM<strong>初階</strong>數據分析
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        擁有<span className="badge bg-secondary">20個</span>設計數量
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        可使用<span className="badge bg-secondary">13GB</span>儲存空間
                                    </li>
                                </ul>
                                <div className="text-center">
                                    <button className="btn btn-outline-secondary">$0免費開始試用</button>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="col">
                    <button className="text-decoration-none button-as-link"  style={{width:"100%"}}>
                        <div className="card h-100 shadow border-0">
                            <div className="card-body">
                                <div className="border-bottom border-dark text-center font-family-TiroBangla mb-3">
                                    <h2 className="card-title fs-4 mb-1">SuperPRO</h2>
                                    <p className="text-black-50">USD $80/month</p>
                                </div>
                                <p className="mb-2">包含所有Pro方案內容，以及：</p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        創建<strong className="border-bottom border-dark">VVVIP</strong>與<strong className="border-bottom border-dark">聯名合作</strong>
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        設定<strong className="border-bottom border-dark">會員交易抽成</strong>
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        CRM<strong>進階</strong>數據分析
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        擁有<span className="badge bg-secondary">無限</span>設計數量
                                    </li>
                                    <li className="list-group-item d-inline-flex justify-content-start align-items-center gap-1 border-0">
                                        <span className="material-symbols-outlined">check</span>
                                        可使用<span className="badge bg-secondary">50GB</span>儲存空間
                                    </li>
                                </ul>
                                <div className="text-center">
                                    <button className="btn btn-outline-secondary">$0免費開始試用</button>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>  
      </div>
    );
}

export default function SuperPro() {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}