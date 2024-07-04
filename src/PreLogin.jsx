import React from 'react';
import { Link } from 'react-router-dom';



export default function PreLogin() {
    return(
        <div className="comtainer-fluid">
        <div className="row">
            <div className="col-sm-6 bg-primary h-full-screen position-relative">
                <div className="position-absolute top-0 start-50 translate-middle-x mt-5" style={{width: "80%"}}>
                    <div className="d-inline-flex justify-content-star align-items-center">
                        <img src="../images/Superlaty_LOGO.jpg" alt="Superlaty Logo Image" width="96" height="96"/>
                        <span className="text-white fs-1 font-family-OleoScript">Superlaty</span>
                    </div>
                    <p className="fs-4 text-white font-family-TiroBangla" style={{marginTop: "-1rem"}}>Connect The Next Generation Membership</p>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle" style={{width: "80%"}}>
                    <p className="text-white fs-3 mb-5">請選擇其中一種身份做登入</p>
                    <Link to="/login" state={"server"} className="d-inline-flex justify-content-star align-items-center text-decoration-none btn btn-outline-light w-100 mb-3">
                        <span className="fs-3">品牌</span>
                        <span className="fs-3 px-2"> │ </span>
                        <span>店家、電商、樂團、KOL...</span>
                    </Link>
                    <Link to="/login" state={"client"} className="d-inline-flex justify-content-star align-items-center text-decoration-none btn btn-outline-light w-100">
                        <span className="fs-3">會員</span>
                        <span className="fs-3 px-2"> │ </span>
                        <span>顧客、粉絲、品牌愛好者...</span>
                    </Link>
                </div>
            </div>
            <div className="col-sm-6 d-sm-block d-none bg-img-cover h-full-screen" style={{backgroundImage: "url(../images/tool_img1.jpg)"}}>
            </div>
        </div>
    </div>
    )
}