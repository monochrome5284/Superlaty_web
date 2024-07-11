import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate, useLocation, Link} from 'react-router-dom';
import WithoutLogin from '../WithoutLogin';

function Body(params){
    let navigate = useNavigate();
    return(
        <div className="container-fluid bg-blue-gradient" style={{marginTop:"68px"}}>
            <div className="container">
                <div className="row">
                    <div className="col py-4">
                        <h1 className="display-3 font-family-OleoScript text-secondary text-center">The Web3 Membership System</h1>
                        <div className="row justify-content-center mt-3">
                            <form className="col-sm-10 d-flex">
                                <input className="form-control search-bg-img border-primary rounded-pill bg-color-none m-1 ps-5" id="searchBar_index" type="search" placeholder="Search anything......" aria-label="Search" disabled/>
                            </form>
                        </div>
                        <div id="toolCarousel" className="carousel border-bottom mt-5">
                            <h2 className="ps-3">工具列表</h2>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item">
                                <Link to="/createMember" className='text-center'>
                                    <div className="card">
                                    <div className="img-wrapper ratio ratio-1x1">
                                        <img src="../images/tool_img1.jpg" className="card-img-top" alt="tool_img1"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">創建會員</h5>
                                    </div>
                                    </div>
                                </Link>
                                </div>
                                <div className="carousel-item">
                                <Link to="/createCertificate" className='text-center'>
                                    <div className="card">
                                    <div className="img-wrapper ratio ratio-1x1">
                                        <img src="../images/tool_img2.jpg" className="card-img-top" alt="tool_img2"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">發行憑證</h5>
                                    </div>
                                    </div>
                                </Link>
                                </div>
                                <div className="carousel-item">
                                <button className="button-as-link w-100">
                                    <div className="card">
                                    <div className="img-wrapper ratio ratio-1x1">
                                        <img src="../images/tool_img3.jpg" className="card-img-top" alt="tool_img3"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">建立池子</h5>
                                    </div>
                                    </div>
                                </button>
                                </div>
                                <div className="carousel-item">
                                <button className="button-as-link w-100">
                                    <div className="card">
                                    <div className="img-wrapper ratio ratio-1x1">
                                        <img src="../images/tool_img4.jpg" className="card-img-top" alt="tool_img4"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">新增社群</h5>
                                    </div>
                                    </div>
                                </button>
                                </div>
                                <div className="carousel-item">
                                <button className="button-as-link w-100">
                                    <div className="card">
                                    <div className="img-wrapper ratio ratio-1x1">
                                        <img src="../images/tool_img5.jpg" className="card-img-top" alt="tool_img5"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">顧客管理</h5>
                                    </div>
                                    </div>
                                </button>
                                </div>
                            </div>
                            <button className="carousel-control-prev w-auto" type="button" data-bs-target="#toolCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next w-auto me--3" type="button" data-bs-target="#toolCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div id="memberCarousel" className="carousel border-bottom mt-5">
                            <h2 className="ps-3">會員</h2>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item">
                                    <button className="button-as-link w-100">
                                        <div className="card">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_10.jpg" className="card-img-top" alt="MemberCard 1"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">會員名稱</h5>
                                            <p className="card-text">會員類別</p>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="carousel-item">
                                    <button className="button-as-link w-100">
                                        <div className="card">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_3.jpg" className="card-img-top" alt="MemberCard 2"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">會員名稱</h5>
                                            <p className="card-text">會員類別</p>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="carousel-item">
                                    <button className="button-as-link w-100">
                                        <div className="card">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_1.jpg" className="card-img-top" alt="MemberCard 3"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">會員名稱</h5>
                                            <p className="card-text">會員類別</p>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="carousel-item">
                                    <button className="button-as-link w-100">
                                        <div className="card">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_8.jpg" className="card-img-top" alt="MemberCard 4"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">會員名稱</h5>
                                            <p className="card-text">會員類別</p>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="carousel-item">
                                    <button className="button-as-link w-100">
                                        <div className="card">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_6.jpg" className="card-img-top" alt="MemberCard 5"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">會員名稱</h5>
                                            <p className="card-text">會員類別</p>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <button className="carousel-control-prev w-auto" type="button" data-bs-target="#memberCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next w-auto me--3" type="button" data-bs-target="#memberCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            <div className="d-flex justify-content-center align-items-center">
                                <Link to="/createMember" type="button" className="btn btn-primary border-0 rounded-pill bg-2blues-gradient px-5 mb-3">創建會員</Link>
                            </div>
                        </div>
                        <div id="certificateCarousel" className="carousel border-bottom mt-5">
                            <h2 className="ps-3">憑證</h2>
                            <div className="carousel-inner" role="listbox">       
                                <div className="carousel-item">
                                    <button className="button-as-link w-100">
                                        <div className="card">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_7.jpg" className="card-img-top" alt="Certificate 1"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">憑證名稱</h5>
                                            <p className="card-text">憑證類別</p>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="carousel-item">
                                    <button className="button-as-link w-100">
                                        <div className="card">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_9.jpg" className="card-img-top" alt="Certificate 2"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">憑證名稱</h5>
                                            <p className="card-text">憑證類別</p>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="carousel-item">
                                    <button className="button-as-link w-100">
                                        <div className="card">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_4.jpg" className="card-img-top" alt="Certificate 3"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">憑證名稱</h5>
                                            <p className="card-text">憑證類別</p>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="carousel-item">
                                    <button className="button-as-link w-100">
                                        <div className="card">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_5.jpg" className="card-img-top" alt="Certificate 4"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">憑證名稱</h5>
                                            <p className="card-text">憑證類別</p>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="carousel-item">
                                    <button className="button-as-link w-100">
                                        <div className="card">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_2.jpg" className="card-img-top" alt="Certificate 5"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">憑證名稱</h5>
                                            <p className="card-text">憑證類別</p>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <button className="carousel-control-prev w-auto" type="button" data-bs-target="#certificateCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next w-auto me--3 w-auto me--3" type="button" data-bs-target="#certificateCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            <div className="d-flex justify-content-center align-items-center">
                                <Link to="/createCertificate" type="button" className="btn btn-primary border-0 rounded-pill bg-blue-red-gradient px-5 mb-3">發行憑證</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function HomePage() {
    return (
        <>
            <Header kind = "home"/>
            <Body/>
            <Footer/>
        </>
    )
}