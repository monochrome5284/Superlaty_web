import React, {useRef} from 'react';
import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';
import { Link } from 'react-router-dom';

function Body(params){
    const brand = useRef(null);

    function GetBrandTypeCard(){
        let uiItem = [];
        uiItem.push(
            <div className="col">
                <div className="card position-relative h-100 border-0 shadow">
                    <Link to="/clientBrand" className="text-decoration-none h-100">
                        <div className="row g-0 h-100">
                            <div className="col-4 align-content-center p-2">
                                <div className="img-wrapper ratio ratio-1x1">
                                    <img src="" className="rounded" alt="..."/>
                                </div>
                            </div>
                            <div className="col-8 p-2">
                                <div className="card-body d-flex flex-column h-100 pb-0">
                                    <h4 className="card-title mb-0">名稱</h4>
                                    <p className="card-text flex-grow-1 my-2">
                                        敘述
                                    </p>
                                    <button className="btn border-0 rounded-0 d-flex align-items-center gap-1 text-secondary hover-fill-icon fw-bolder align-self-end lh-1 pe-0">
                                        <span className="material-symbols-outlined fs-3">bookmark_add</span>
                                        加入
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );

        function GetUiItem(){
            return uiItem;
        }
        return (
            <div className="py-3">
                <h3>品牌類別</h3>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <GetUiItem/>
                </div>
            </div>
        );
    }

    return(
        <>
            <main>
                <section className="py-5"  style={{marginTop:"68px"}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-7 col-md-8 col-12">
                                <div className="text-center pt-4">
                                    <h2 className="page-title mb-0">查看你的會員卡</h2>
                                    <p className="pt-2 text-muted">
                                        簡易管理，即時顯示資產價格
                                    </p>
                                    <div className="row row-cols-3 mb-3 small g-3">
                                        <div className="col">
                                            <div className="d-flex align-items-center flex-column gap-1">
                                                <span className="material-symbols-outlined fill-icon fs-1 text-secondary">savings</span>
                                                <p className="m-0 lead">數位資產化</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex align-items-center flex-column gap-1">
                                                <span className="material-symbols-outlined fill-icon fs-1 text-secondary">shoppingmode</span>
                                                <p className="m-0 lead">特殊優惠</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex align-items-center flex-column gap-1">
                                                <span className="material-symbols-outlined fs-1 text-secondary">left_click</span>
                                                <p className="m-0 lead">一鍵入會員</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mb-3">
                                        <div className="col-9">
                                            <button type="button" className="btn btn-outline-secondary w-100 rounded-pill" onClick={() => brand.current?.scrollIntoView({behavior: 'smooth'})}>獲取更多</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light pt-5 pb-3 section-shadow-inset">
                    <div className="container">
                        <div className="row justify-content-center gy-3 mb-3">
                            <form className="col-sm-6 order-sm-2 col-10">
                                <input className="form-control search-bg-img border-0 bg-light rounded-pill shadow-inset ps-5" type="search" aria-label="Search" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                                <datalist id="datalistOptions">
                                    <option value="TENGO Brands"/>
                                    <option value="Apple Inc."/>
                                    <option value="SCU Blockchain Research Society"/>
                                    <option value="鴨嘴獸俱樂部"/>
                                    <option value="DogeDAO"/>
                                </datalist>
                            </form>
                            <h2 className="col-sm-6 order-sm-1 align-self-center mb-0">你的會員卡(即將開放)</h2>
                        </div>
                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3 mb-5">
                            <div className="col">
                                <div className="card h-100 border-0 shadow">
                                    <Link to="/clientMemberCard" className='text-decoration-none'>
                                        <div className="row g-0">
                                            <div className="col-4 align-content-center p-2">
                                                <div className="img-wrapper ratio ratio-1x1">
                                                    <img src="../images/design_1.jpg" className="rounded" alt="Membership Card(Raccoon Club) Image"/>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">Raccoon Club
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center badge rounded-pill bg-primary text-truncate">
                                                            <span className="material-symbols-outlined fill-icon fs-6 me-2">Chess</span>
                                                            鴨嘴獸俱樂部
                                                        </span>
                                                    </div>
                                                    <p className="card-text my-2">
                                                        <span className="me-2">擁有身份：1</span>
                                                        <span>擁有憑證：12</span>
                                                    </p>
                                                    <p className="card-text flex-grow-1 text-truncate">
                                                        會員卡說明會員卡說明會員卡說明會員卡說明說明會員卡說明說明會員卡說明說明會員卡說明
                                                    </p>
                                                    <p className="card-text text-end"><small className="text-muted">價值：$750</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow">
                                <Link to="/clientMemberCard" state={params} className='text-decoration-none'>

                                        <div className="row g-0">
                                            <div className="col-4 align-content-center p-2">
                                                <div className="img-wrapper ratio ratio-1x1">
                                                    <img src="../images/design_6.jpg" className="rounded" alt="Membership Card(YOASOBI 粉絲群) Image"/>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">YOASOBI 粉絲群
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center badge rounded-pill bg-primary text-truncate">
                                                            <span className="material-symbols-outlined fill-icon fs-6 me-2">Chess</span>
                                                            Sony Music Entertainment Japan
                                                        </span>
                                                    </div>
                                                    <p className="card-text my-2">
                                                        <span className="me-2">擁有身份：2</span>
                                                        <span>擁有憑證：4</span>
                                                    </p>
                                                    <p className="card-text flex-grow-1 text-truncate">
                                                        會員卡說明會員卡說明會員卡說明會員卡說明說明會員卡說明說明會員卡說明說明會員卡說明
                                                    </p>
                                                    <p className="card-text text-end"><small className="text-muted">價值：$520</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow position-relative">
                                    <Link to="/clientMemberCard" state={params} className='text-decoration-none'>
                                        <div className="row g-0">
                                            <div className="col-4 align-content-center p-2">
                                                <div className="img-wrapper ratio ratio-1x1">
                                                    <img src="../images/design_8.jpg" className="rounded" alt="Membership Card(露營野炊) Image"/>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-dark d-flex justify-content-between align-items-cente text-truncate mb-1">露營野炊
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center badge rounded-pill bg-primary text-truncate">
                                                            <span className="material-symbols-outlined fill-icon fs-6 me-2">Chess</span>
                                                            鴨嘴獸俱樂部
                                                        </span>
                                                    </div>
                                                    <p className="card-text my-2">
                                                        <span className="me-2">擁有身份：1</span>
                                                        <span>擁有憑證：1</span>
                                                    </p>
                                                    <p className="card-text flex-grow-1 text-truncate">
                                                        員卡說明會員卡說明會員卡說明會員卡說明
                                                    </p>
                                                    <p className="card-text text-end"><small className="text-muted">價值：$31</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow">
                                    <Link to="/clientMemberCard" state={params} className='text-decoration-none'>
                                        <div className="row g-0">
                                            <div className="col-4 align-content-center p-2">
                                                <div className="img-wrapper ratio ratio-1x1">
                                                    <img src="../images/design_3.jpg" className="rounded" alt="Membership Card(人魚) Image"/>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">人魚
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center badge rounded-pill bg-primary text-truncate">
                                                            <span className="material-symbols-outlined fill-icon fs-6 me-2">Chess</span>
                                                            Starbucks
                                                        </span>
                                                    </div>
                                                    <p className="card-text my-2">
                                                        <span className="me-2">擁有身份：1</span>
                                                        <span>擁有憑證：2</span>
                                                    </p>
                                                    <p className="card-text flex-grow-1 text-truncate">
                                                        說明會員卡說明會員卡說明
                                                    </p>
                                                    <p className="card-text text-end"><small className="text-muted">價值：$120</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow">
                                    <Link to="/clientMemberCard" state={params} className='text-decoration-none'>
                                        <div className="row g-0">
                                            <div className="col-4 align-content-center p-2">
                                                <div className="img-wrapper ratio ratio-1x1">
                                                    <img src="../images/design_11.jpg" className="rounded" alt="Membership Card(鴨嘴獸俱樂部) Image"/>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">科技鴨嘴獸
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center badge rounded-pill bg-primary text-truncate">
                                                            <span className="material-symbols-outlined fill-icon fs-6 me-2">Chess</span>
                                                            鴨嘴獸俱樂部
                                                        </span>
                                                    </div>
                                                    <p className="card-text my-2">
                                                        <span className="me-2">擁有身份：1</span>
                                                        <span>擁有憑證：2</span>
                                                    </p>
                                                    <p className="card-text flex-grow-1 text-truncate">
                                                        說明會員卡說明會員卡說明
                                                    </p>
                                                    <p className="card-text text-end"><small className="text-muted">價值：$1314</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow">
                                    <Link to="/clientMemberCard" state={params} className='text-decoration-none h-100 '>
                                        <div className="row g-0">
                                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-muted fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                            <div className="col-8 p-2">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">科技鴨嘴獸
                                                    </h4>
                                                    <div className="d-flex justify-content-between flex-wrap">
                                                        <span className="d-flex align-items-center badge rounded-pill bg-primary text-truncate">
                                                            <span className="material-symbols-outlined fill-icon fs-6 me-2">Chess</span>
                                                            ﹡﹡﹡
                                                        </span>
                                                    </div>
                                                    <p className="card-text my-2">
                                                        <span className="me-2">擁有身份：﹡﹡</span>
                                                        <span>擁有憑證：﹡﹡</span>
                                                    </p>
                                                    <p className="card-text flex-grow-1 text-truncate">
                                                        .....會員卡說明....
                                                    </p>
                                                    <p className="card-text text-end"><small className="text-muted">價值：$﹡﹡﹡</small></p>
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
                                    <a className="page-link border-0 rounded shadow" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item active  border-0 rounded shadow" aria-current="page">
                                    <span className="page-link  border-0 rounded shadow">1</span>
                                </li>
                                <li className="page-item">
                                    <a className="page-link  border-0 rounded shadow">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link  border-0 rounded shadow">3</a>
                                </li>
                                <li className="page-item d-sm-inline-block d-none">
                                    <a className="page-link  border-0 rounded shadow">4</a>
                                </li>
                                <li className="page-item d-sm-inline-block d-none">
                                    <a className="page-link  border-0 rounded shadow">5</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link  border-0 rounded shadow" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section id="brand" ref={brand} className="bg-white pt-5 pb-3">

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-7 col-md-8 col-12">
                                <div className="text-center pt-4">
                                    <h2 className="page-title text-secondary mb-0">探索更多品牌!</h2>
                                    <h2 className="page-title text-secondary mb-0">(即將開放)</h2>
                                    <p className="pt-2 text-muted">
                                        領取會員卡，取得更多優惠
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="brandCarousel" className="carousel mt-3">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active position-relative">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src="../images/tango_LOGO.jpg" className="card-img-top border" alt="brand_image_1"/>
                                            </div>
                                            <div className="card-body text-center px-2">
                                                <h5 className="card-title text-truncate">TENGO Brands</h5>
                                                <p className="card-text text-truncate">區塊鏈科技公司，致力於打造去中心化的品牌生態系統</p>
                                            </div>
                                        </div>
                                    </a>
                                    <button className="btn border-0 position-absolute top-0 end-0 rounded-0 bg-light px-0 pb-3 me-3 lh-1">
                                        <span className="material-symbols-outlined hover-fill-icon text-secondary fs-3">bookmark_add</span>
                                    </button>
                                </div>
                                <div className="carousel-item position-relative">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src="../images/apple_img.jpg" className="card-img-top border" alt="brand_image_2"/>
                                            </div>
                                            <div className="card-body text-center px-2">
                                                <h5 className="card-title text-truncate">Apple Inc.</h5>
                                                <p className="card-text text-truncate">全球知名科技公司，致力於為用戶提供卓越的用戶體驗產品</p>
                                            </div>
                                        </div>
                                    </a>
                                    <button className="btn border-0 position-absolute top-0 end-0 rounded-0 bg-light px-0 pb-3 me-3 lh-1">
                                        <span className="material-symbols-outlined fill-icon text-secondary fs-3">bookmark_added</span>
                                    </button>
                                </div>
                                <div className="carousel-item position-relative">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src="../images/SCU_LOGO.png" className="card-img-top border" alt="brand_image_3"/>
                                            </div>
                                            <div className="card-body text-center px-2">
                                                <h5 className="card-title text-truncate">SCU Blockchain Research Society</h5>
                                                <p className="card-text text-truncate">為學生提供學習和交流區塊鏈知識的平台</p>
                                            </div>
                                        </div>
                                    </a>
                                    <button className="btn border-0 position-absolute top-0 end-0 rounded-0 bg-light px-0 pb-3 me-3 lh-1">
                                        <span className="material-symbols-outlined hover-fill-icon text-secondary fs-3">bookmark_add</span>
                                    </button>
                                </div>
                                <div className="carousel-item position-relative">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src="../images/design_7.jpg" className="card-img-top border" alt="brand_image_4"/>
                                            </div>
                                            <div className="card-body text-center px-2">
                                                <h5 className="card-title text-truncate">俱樂部限量卡</h5>
                                                <p className="card-text text-truncate">為卡牌愛好者提供一個安全、可靠的交易平台</p>
                                            </div>
                                        </div>
                                    </a>
                                    <button className="btn border-0 position-absolute top-0 end-0 rounded-0 bg-light px-0 pb-3 me-3 lh-1">
                                        <span className="material-symbols-outlined fill-icon text-secondary fs-3">bookmark_added</span>
                                    </button>
                                </div>
                                <div className="carousel-item position-relative">
                                    <a>
                                        <div className="card">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src="../images/DogeDAO_img.jpg" className="card-img-top border" alt="brand_image_5"/>
                                            </div>
                                            <div className="card-body text-center px-2">
                                                <h5 className="card-title text-truncate">DogeDAO</h5>
                                                <p className="card-text text-truncate">為 Dogecoin 持有者提供一個參與和貢獻的平台</p>
                                            </div>
                                        </div>
                                    </a>
                                    <button className="btn border-0 position-absolute top-0 end-0 rounded-0 bg-light px-0 pb-3 me-3 lh-1">
                                        <span className="material-symbols-outlined hover-fill-icon text-secondary fs-3">bookmark_add</span>
                                    </button>
                                </div>
                            </div>
                            <button className="carousel-control-prev w-auto" type="button" data-bs-target="#brandCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next w-auto me--3" type="button" data-bs-target="#brandCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="row justify-content-center py-3 mt-md-5 mt-3">
                            <div className="col-xl-6 col-lg-7 col-md-8 col-12 mb-3">
                                <p>
                                    <input className="form-control search-bg-img border-0 bg-light rounded-pill shadow-inset ps-5" list="datalistOptionsForCorp" id="DataListForCorp" placeholder="Type to search..." onInput={(e)=>search(e)}/>
                                    <datalist id="datalistOptionsForCorp">                                     
                                        <option value="選項"/>
                                    </datalist>
                                </p>
                            </div>
                            <div className="d-flex justify-content-start align-items-center flex-nowrap gap-3 overflow-auto scrollbar-none py-2 mb-2">
                                <input className="btn-check" type="checkbox" name="brandType" value="technology products and services" id="brandType_technology" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_technology" >
                                    科技產品與服務
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="catering and lifestyle" id="brandType_catering_lifestyle" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_catering_lifestyle" >
                                    飲食與生活
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="travel and shopping" id="brandType_travel_shopping" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_travel_shopping" >
                                    旅遊與購物
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="media and events" id="brandType_media_events" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_media_events" >
                                    社群媒體與活動
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="science and education" id="brandType_science_education" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_science_education" >
                                    科學與教育
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="nature and biology" id="brandType_nature_biology" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_nature_biology" >
                                    自然與生物
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="beauty and fitness" id="brandType_beauty_fitness" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_beauty_fitness" >
                                    美容健身
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="literature and society" id="brandType_literature_society" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_literature_society" >
                                    文學與社會
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="industry" id="brandType_industry" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_industry" >
                                    工業
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="business and finance" id="brandType_business_finance" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_business_finance" >
                                    商業與金融
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="healthcare" id="brandType_healthcare" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_healthcare" >
                                    醫療照護
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="arts and entertainment" id="brandType_arts_entertainment" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_arts_entertainment" >
                                    藝術與娛樂
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="law and government" id="brandType_law_government" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_law_government" >
                                    法律與政府
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="transportation and real estate" id="brandType_transportation_realEstate" autoComplete="off" onClick={(e) => GetBrandType(e.target)}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill min-w-fit-content" htmlFor="brandType_transportation_realEstate" >
                                    交通與房地產
                                </label>
                            </div>
                            <GetBrandTypeCard/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default function ClientAssets() {
    return (
        <>
            <ClientHeader/>
            <Body/>
            <ClientFooter/>
        </>
    )
}