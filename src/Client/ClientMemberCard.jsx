import React from 'react';
import {Link} from 'react-router-dom';
function ClientMemberCard(){
    return(
        <>
            <div className="pt-5" style={{marginTop: '68px'}}>
                <div className="position-sticky div-sticy-top" style={{zIndex: '1025'}}>
                    <div className="row align-items-center flex-column">
                        <div className="col-xl-6 col-lg-7 col-md-8 col-10 bg-light rounded shadow p-2 mb-1">
                            <Link to =".collapse" data-bs-toggle="collapse"  aria-expanded="false" aria-controls="multiCollapse">
                                <div className="row g-2">
                                    <div className="col-sm-2 col-3 align-content-center">
                                        <div className="img-wrapper ratio ratio-1x1">
                                            <img src="../images/design_11.jpg" className="rounded" alt="Membership Card(Raccoon Club) Image"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-9">
                                        <div className="card-body d-flex flex-column h-100">
                                            <h1 className="card-title fs-5">科技鴨嘴獸</h1>
                                            <p className="card-text flex-grow-1 my-2">
                                                發行品牌：
                                                <span className="d-inline-flex align-items-center badge rounded-pill bg-primary text-truncate">
                                                    鴨嘴獸俱樂部
                                                </span>
                                            </p>
                                            <div className="collapse">
                                                <p className="card-text mb-1">
                                                    獨一無二的鴨嘴獸，鴨鴨。
                                                </p>
                                                <div className="text-muted">
                                                    領取時間：2024/06/18 17:26
                                                </div>
                                            </div>
                                            <p className="card-text text-end"><small className="text-muted">價值：$1314</small></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="collapse text-center">
                            <button type="button" className="btn btn-light btn-sm rounded shadow-sm d-inline-flex justify-content-center align-items-center px-2" >
                            {/* <button type="button" className="btn btn-light btn-sm rounded shadow-sm d-inline-flex justify-content-center align-items-center px-2" onClick="location.href='client_brand_202405301608.html'"> */}
                                前往品牌 <span className="material-symbols-outlined fs-6 fill-icon">outbound</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container pb-3">
                    <h2 className="fs-2 fw-bold text-center py-3 my-3">持有品牌憑證</h2>

                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3 mb-5">
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none">
                                    <div className="row g-0">
                                        <div className="col-4 align-content-center p-2">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src="../images/design_12.jpg" className="rounded" alt="Certificate(鴨嘴獸飛行點數) Image"/>
                                            </div>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <h4 className="card-title text-dark d-flex justify-content-between align-items-center mb-1">鴨嘴獸飛行點數
                                                </h4>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="text-muted">價值：$520</span>
                                                    </span>
                                                    <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                        <span className="material-symbols-outlined fill-icon fs-6">hexagon</span>
                                                        520
                                                    </span>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證說明憑證說明憑證說明憑證說明<br/>
                                                    憑證說明憑證說明憑證說明...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none">
                                    <div className="row g-0">
                                        <div className="col-4 align-content-center p-2">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src="../images/design_14.jpg" className="rounded" alt="Certificate(鴨嘴獸飛行體驗券) Image"/>
                                            </div>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <h4 className="card-title text-dark d-flex justify-content-between align-items-center mb-1">鴨嘴獸飛行體驗券
                                                </h4>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="text-muted">價值：$794</span>
                                                    </span>
                                                    <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                        <span className="material-symbols-outlined fill-icon fs-6">label</span>
                                                        票券
                                                    </span>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證說明憑證說明憑證<br/>
                                                    憑證說明說明憑證說明...
                                                </p>
                                                <div className="d-flex justify-content-end">
                                                    <p className="card-text"><small className="text-danger">期限：06/28</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100">
                                    <div className="row g-0">
                                        <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                            <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                <span className="text-muted fs-3">預設圖片</span>
                                            </div>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">憑證名稱
                                                </h4>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="text-muted">價值：$﹡﹡﹡</span>
                                                    </span>
                                                    <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                        <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                        ﹡﹡
                                                    </span>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證說明憑證說明憑證<br/>
                                                    憑證說明憑證說明憑證<br/>
                                                    憑證說明說明憑證說明...
                                                </p>
                                                <div className="d-flex justify-content-end">
                                                    <p className="card-text"><small className="text-danger">期限：﹡﹡/﹡﹡</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100">
                                    <div className="row g-0">
                                        <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                            <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                <span className="text-muted fs-3">預設圖片</span>
                                            </div>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">憑證名稱
                                                </h4>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="text-muted">價值：$﹡﹡﹡</span>
                                                    </span>
                                                    <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                        <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                        ﹡﹡
                                                    </span>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證說明憑證說明憑證<br/>
                                                    憑證說明憑證說明憑證<br/>
                                                    憑證說明說明憑證說明...
                                                </p>
                                                <div className="d-flex justify-content-end">
                                                    <p className="card-text"><small className="text-danger">期限：﹡﹡/﹡﹡</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100">
                                    <div className="row g-0">
                                        <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                            <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                <span className="text-muted fs-3">預設圖片</span>
                                            </div>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">憑證名稱
                                                </h4>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="text-muted">價值：$﹡﹡﹡</span>
                                                    </span>
                                                    <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                        <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                        ﹡﹡
                                                    </span>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證說明憑證說明憑證<br/>
                                                    憑證說明憑證說明憑證<br/>
                                                    憑證說明說明憑證說明...
                                                </p>
                                                <div className="d-flex justify-content-end">
                                                    <p className="card-text"><small className="text-danger">期限：﹡﹡/﹡﹡</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100">
                                    <div className="row g-0">
                                        <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                            <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                <span className="text-muted fs-3">預設圖片</span>
                                            </div>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">憑證名稱
                                                </h4>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="text-muted">價值：$﹡﹡﹡</span>
                                                    </span>
                                                    <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                        <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                        ﹡﹡
                                                    </span>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證說明憑證說明憑證<br/>
                                                    憑證說明憑證說明憑證<br/>
                                                    憑證說明說明憑證說明...
                                                </p>
                                                <div className="d-flex justify-content-end">
                                                    <p className="card-text"><small className="text-danger">期限：﹡﹡/﹡﹡</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center gap-3">
                            <li className="page-item">
                                <Link to ="#" className="page-link border-0 rounded shadow"  aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </Link>
                            </li>
                            <li className="page-item active  border-0 rounded shadow" aria-current="page">
                                <span className="page-link  border-0 rounded shadow">1</span>
                            </li>
                            <li className="page-item">
                                <Link to ="#" className="page-link  border-0 rounded shadow" >2</Link>
                            </li>
                            <li className="page-item">
                                <Link to ="#" className="page-link  border-0 rounded shadow" >3</Link>
                            </li>
                            <li className="page-item d-sm-inline-block d-none">
                                <Link to ="#" className="page-link  border-0 rounded shadow" >4</Link>
                            </li>
                            <li className="page-item d-sm-inline-block d-none">
                                <Link to ="#" className="page-link  border-0 rounded shadow" >5</Link>
                            </li>
                            <li className="page-item">
                                <Link to ="#" className="page-link  border-0 rounded shadow"  aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="bg-light pt-4 pb-3 section-shadow-inset">
                    <div className="container">
                        <div className="d-flex py-2">
                            <div className="border-bottom flex-grow-1 h-50 fs-6">&nbsp;</div>
                            <h3 className="text-gray text-center pt-1 px-2">尚未持有憑證</h3>
                            <div className="border-bottom flex-grow-1 h-50 fs-6">&nbsp;</div>
                        </div>

                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3 mt-3 mb-5">
                            <div className="col">
                                <div className="card h-100 border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 align-content-center p-2">
                                                <div className="img-wrapper ratio ratio-1x1">
                                                    <img src="../images/design_10.jpg" className="rounded" alt="Certificate(鴨嘴獸區塊鏈連動) Image"/>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">鴨嘴獸區塊鏈連動
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="text-muted">價值：$xxx</span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">linked_services</span>
                                                            合作
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證說明憑證說明
                                                    </p>
                                                    <button className="btn border-0 rounded-0 d-flex align-items-center gap-1 text-secondary hover-fill-icon fw-bolder align-self-end lh-1 pe-0">
                                                        <span className="material-symbols-outlined fs-3">bookmark_add</span>
                                                        取得
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">價值：$﹡﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                    <button className="btn border-0 rounded-0 d-flex align-items-center gap-1 text-secondary hover-fill-icon fw-bolder align-self-end lh-1 pe-0">
                                                        <span className="material-symbols-outlined fs-3">bookmark_add</span>
                                                        取得
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">價值：$﹡﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                    <button className="btn border-0 rounded-0 d-flex align-items-center gap-1 text-secondary hover-fill-icon fw-bolder align-self-end lh-1 pe-0">
                                                        <span className="material-symbols-outlined fs-3">bookmark_add</span>
                                                        取得
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">價值：$﹡﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                    <button className="btn border-0 rounded-0 d-flex align-items-center gap-1 text-secondary hover-fill-icon fw-bolder align-self-end lh-1 pe-0">
                                                        <span className="material-symbols-outlined fs-3">bookmark_add</span>
                                                        取得
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">價值：$﹡﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                    <button className="btn border-0 rounded-0 d-flex align-items-center gap-1 text-secondary hover-fill-icon fw-bolder align-self-end lh-1 pe-0">
                                                        <span className="material-symbols-outlined fs-3">bookmark_add</span>
                                                        取得
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">價值：$﹡﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                    <button className="btn border-0 rounded-0 d-flex align-items-center gap-1 text-secondary hover-fill-icon fw-bolder align-self-end lh-1 pe-0">
                                                        <span className="material-symbols-outlined fs-3">bookmark_add</span>
                                                        取得
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link >
                                </div>
                            </div>
                        </div>

                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center gap-3 mb-5">
                                <li className="page-item">
                                    <Link to ="#" className="page-link border-0 rounded shadow-sm"  aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item active  border-0 rounded shadow-sm" aria-current="page">
                                    <span className="page-link  border-0 rounded shadow-sm">1</span>
                                </li>
                                <li className="page-item">
                                    <Link to ="#" className="page-link  border-0 rounded shadow-sm" >2</Link>
                                </li>
                                <li className="page-item">
                                    <Link to ="#" className="page-link  border-0 rounded shadow-sm" >3</Link>
                                </li>
                                <li className="page-item d-sm-inline-block d-none">
                                    <Link to ="#" className="page-link  border-0 rounded shadow-sm" >4</Link>
                                </li>
                                <li className="page-item d-sm-inline-block d-none">
                                    <Link to ="#" className="page-link  border-0 rounded shadow-sm">5</Link>
                                </li>
                                <li className="page-item">
                                    <Link to ="#" className="page-link  border-0 rounded shadow-sm"  aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="d-flex py-2">
                            <div className="border-bottom flex-grow-1 h-50 fs-6">&nbsp;</div>
                            <h3 className="text-gray text-center pt-1 px-2">已失效憑證</h3>
                            <div className="border-bottom flex-grow-1 h-50 fs-6">&nbsp;</div>
                        </div>

                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3 mt-3 mb-5">
                            <div className="col">
                                <div className="card h-100 bg-light border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">失效時間：﹡﹡/﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-light border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">失效時間：﹡﹡/﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-light border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">失效時間：﹡﹡/﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-light border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">失效時間：﹡﹡/﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-light border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">失效時間：﹡﹡/﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-light border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-truncate mb-1">憑證名稱
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center">
                                                            <span className="text-muted">失效時間：﹡﹡/﹡﹡</span>
                                                        </span>
                                                        <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                            ﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text flex-grow-1 my-2">
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明憑證說明憑證<br/>
                                                        憑證說明說明憑證說明...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center gap-3">
                                <li className="page-item">
                                    <Link to ="#" className="page-link bg-light border-0 rounded shadow-sm"  aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item active  border-0 rounded shadow-sm" aria-current="page">
                                    <span className="page-link  border-0 rounded shadow-sm">1</span>
                                </li>
                                <li className="page-item">
                                    <Link to ="#" className="page-link bg-light border-0 rounded shadow-sm" >2</Link>
                                </li>
                                <li className="page-item">
                                    <Link to ="#" className="page-link bg-light border-0 rounded shadow-sm" >3</Link>
                                </li>
                                <li className="page-item d-sm-inline-block d-none">
                                    <Link to ="#" className="page-link bg-light border-0 rounded shadow-sm" >4</Link>
                                </li>
                                <li className="page-item d-sm-inline-block d-none">
                                    <Link to ="#" className="page-link bg-light border-0 rounded shadow-sm" >5</Link>
                                </li>
                                <li className="page-item">
                                    <Link to ="#" className="page-link bg-light border-0 rounded shadow-sm"  aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientMemberCard;