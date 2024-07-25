import React from 'react';
import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {useNavigate, Link} from 'react-router-dom';

function Body(){
    let navigate = useNavigate();
    let base = import.meta.env.VITE_BASE_URL || "../";

    function GetCertificateName(res){
        switch(res.type){
            case 'MembershipPoint':
                return (<span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                            <span className="material-symbols-outlined fill-icon fs-6">hexagon</span>
                            點數
                        </span>);
            case 'Ticket':
                return (<span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                            <span className="material-symbols-outlined fill-icon fs-6">label</span>
                            票券
                        </span>);
            case 'LuckyDraw':
                return (<span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                            <span className="material-symbols-outlined fill-icon fs-6">markunread_mailbox</span>
                            抽獎
                        </span>);
            case 'Cooperation':
                return (<span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                            <span className="material-symbols-outlined fill-icon fs-6">linked_services</span>
                            聯名
                        </span>);
            case 'demo':
                return (<span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                            <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                            ﹡﹡
                        </span>);
            default:
                return (<></>);
        }      
    }


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
                                            <img src={base + "images/design_7.jpg"} className="rounded" alt="Membership Card(Raccoon Club) Image"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-9">
                                        <div className="card-body d-flex flex-column h-100">
                                            <h1 className="card-title fs-5">品牌名稱</h1>
                                            <Typography sx={{marginY: 1}} variant="inherit" noWrap>
                                                品牌名稱敘述品牌名稱敘述品牌名稱敘述品牌名稱敘述品牌名稱敘述品牌名稱敘述
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-light section-shadow-inset pb-3">
                    <h2 className="fs-2 fw-bold text-center pt-3 py-3 my-3">品牌の會員卡</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 flex-nowrap overflow-auto scrollbar-none g-3 px-3 pb-5">
                        <div className="col">
                            <div className="card h-100 border-0 rounded-0 shadow">
                                <Link to="#" className="text-decoration-none h-100">
                                    <div className="row g-0 h-100">
                                        <div className="col-4 position-relative align-content-center p-2">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src={base + "images/design_11.jpg"} className="rounded image-grayish" alt="Membership Card(科技鴨嘴獸) Image"/>
                                            </div>
                                            <span class="d-sm-inline-block d-none badge bg-primary position-absolute top-0 start-0 m-3">
                                                <span>持有</span>
                                            </span>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-dark text-truncate mb-1">科技鴨嘴獸</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); navigate("/clientMemberCard");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>查看</span>
                                                        <span className="material-symbols-outlined fs-4">near_me</span>
                                                    </button>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    會員卡說明會員卡說明會員卡說明會員卡說明會員卡說明會員卡說明
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <span><small>領取時間：<span className='d-sm-inline-block d-none'>2024/</span>07/15</small></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 rounded-0 shadow">
                                <Link to="#" className="text-decoration-none h-100">
                                    <div className="row g-0 h-100">
                                        <div className="col-4 position-relative align-content-center p-2">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src={base + "images/design_13.jpg"} className="rounded image-grayish" alt="Membership Card(遊戲boy鴨嘴獸) Image"/>
                                            </div>
                                            <span class="d-sm-inline-block d-none badge bg-light text-dark position-absolute top-0 start-0 m-3">
                                                <span>未領取</span>
                                            </span>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-dark text-truncate mb-1">遊戲boy鴨嘴獸</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); navigate("/clientMemberCard");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>查看</span>
                                                        <span className="material-symbols-outlined fs-4">near_me</span>
                                                    </button>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    會員卡說明會員卡說明會員卡說明會員卡說明會員卡說明會員卡說明
                                                </p>
                                                <div className="d-flex justify-content-end flex-wrap gap-2">
                                                    <span><small>剩餘數量：﹡﹡<span className='d-sm-inline-block d-none'>/﹡﹡﹡</span></small></span>
                                                    <button onClick={(e)=>{e.preventDefault(); myfunction()}} className="btn d-flex align-items-center gap-1 border-0 rounded-0  text-secondary fw-bolder hover-fill-icon  lh-1 p-0">
                                                        領取
                                                        <span className="material-symbols-outlined fs-4">add_box</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 rounded-0 shadow">
                            <Link to ="#" className="text-decoration-none h-100">
                                <div className="row g-0 h-100">
                                        <div className="col-4 position-relative d-flex justify-content-center align-items-center p-2">
                                            <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                <span className="text-white fs-3">預設圖片</span>
                                                <span class="d-sm-inline-block d-none badge bg-dark position-absolute top-0 start-0 m-3">
                                                    <span>持有</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-dark text-truncate mb-1">會員卡名稱</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); navigate("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>查看</span>
                                                        <span className="material-symbols-outlined fs-4">near_me</span>
                                                    </button>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    會員卡介紹敘述會員卡介紹敘述會員卡介紹敘述 <br />
                                                </p>
                                                <span><small>領取時間:<span className='d-sm-inline-block d-none'>YYYY/</span>MM/DD</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 rounded-0 shadow">
                            <Link to ="#" className="text-decoration-none h-100">
                                <div className="row g-0 h-100">
                                        <div className="col-4 position-relative d-flex justify-content-center align-items-center p-2">
                                            <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                <span className="text-white fs-3">預設圖片</span>
                                                <span class="d-sm-inline-block d-none badge bg-dark position-absolute top-0 start-0 m-3">
                                                    <span>持有</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-dark text-truncate mb-1">會員卡名稱</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); navigate("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>查看</span>
                                                        <span className="material-symbols-outlined fs-4">near_me</span>
                                                    </button>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    會員卡介紹敘述會員卡介紹敘述會員卡介紹敘述 <br />
                                                </p>
                                                <span><small>領取時間:<span className='d-sm-inline-block d-none'>YYYY/</span>MM/DD</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 rounded-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100">
                                <div className="row g-0 h-100">
                                        <div className="col-4 position-relative d-flex justify-content-center align-items-center p-2">
                                            <div className="d-flex justify-content-center align-items-center bg-light rounded w-100 h-100">
                                                <span className="text-gray fs-3">預設圖片</span>
                                                <span class="d-sm-inline-block d-none badge bg-white text-dark position-absolute top-0 start-0 m-3">
                                                    <span>未領取</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-dark text-truncate mb-1">會員卡名稱</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); navigate("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>查看</span>
                                                        <span className="material-symbols-outlined fs-4">near_me</span>
                                                    </button>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    會員卡介紹敘述會員卡介紹敘述會員卡介紹敘述 <br />
                                                </p>
                                                <div className="d-flex justify-content-end flex-wrap gap-2">
                                                    <span><small>剩餘數量：﹡﹡<span className='d-sm-inline-block d-none'>/﹡﹡﹡</span></small></span>
                                                    <button onClick={(e)=>{e.preventDefault(); myfunction()}} className="btn d-flex align-items-center gap-1 border-0 rounded-0  text-secondary fw-bolder hover-fill-icon  lh-1 p-0">
                                                        領取
                                                        <span className="material-symbols-outlined fs-4">add_box</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 rounded-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100">
                                <div className="row g-0 h-100">
                                        <div className="col-4 position-relative d-flex justify-content-center align-items-center p-2">
                                            <div className="d-flex justify-content-center align-items-center bg-light rounded w-100 h-100">
                                                <span className="text-gray fs-3">預設圖片</span>
                                                <span class="d-sm-inline-block d-none badge bg-white text-dark position-absolute top-0 start-0 m-3">
                                                    <span>未領取</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="d-flex flex-column h-100">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-dark text-truncate mb-1">會員卡名稱</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); navigate("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>查看</span>
                                                        <span className="material-symbols-outlined fs-4">near_me</span>
                                                    </button>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    會員卡介紹敘述會員卡介紹敘述會員卡介紹敘述 <br />
                                                </p>
                                                <div className="d-flex justify-content-end flex-wrap gap-2">
                                                    <span><small>剩餘數量：﹡﹡<span className='d-sm-inline-block d-none'>/﹡﹡﹡</span></small></span>
                                                    <button onClick={(e)=>{e.preventDefault(); myfunction()}} className="btn d-flex align-items-center gap-1 border-0 rounded-0  text-secondary fw-bolder hover-fill-icon  lh-1 p-0">
                                                        領取
                                                        <span className="material-symbols-outlined fs-4">add_box</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pb-3">
                    <h2 className="fs-2 fw-bold text-center pt-3 pb-2 mt-3">品牌憑證</h2>
                    <div className="row justify-content-center mb-4">
                        <div className="col-xxl-6 col-lg-7 col-md-8 col-12 mb-3">
                            <form action="">
                                <input className="form-control search-bg-img border-0 bg-light rounded-pill shadow-inset ps-5 mb-3" list="datalistOptionsForCorp" id="DataListForCorp" placeholder="Type to search..." onInput={(e)=>search(e)}/>
                                <datalist id="datalistOptionsForCorp">                                     
                                    <option value="選項"/>
                                </datalist>
                                <Stack 
                                    direction="row" 
                                    justifyContent={"flex-start"}
                                    alignItems="center"
                                    spacing={1}>
                                    <Chip label="持有" variant="filled" size='small' onClick={()=>{myfunction()}} onDelete={()=>{myfunction()}} />
                                    <Chip label="已使用" variant="filled" size='small' onClick={()=>{myfunction()}} onDelete={()=>{myfunction()}} />
                                    <Chip label="已失效" variant="outlined" size='small' onClick={()=>{myfunction()}} />
                                </Stack>
                            </form>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3 mb-5">
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100" data-bs-toggle="modal" data-bs-target="#CertificateModal">
                                    <div className="row g-0 h-100">
                                        <div className="col-4 align-content-center p-2">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src={base + "images/design_12.jpg"} className="rounded image-grayish" alt="Certificate(鴨嘴獸飛行點數) Image"/>
                                            </div>
                                        </div>
                                        <div className="col-8 align-content-center p-2">
                                            <h4 className="card-title text-dark mb-1">鴨嘴獸飛行點數
                                            </h4>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <span className="d-flex align-items-center">
                                                    <span className="material-symbols-outlined fill-icon">id_card</span>
                                                    科技鴨嘴獸
                                                </span>
                                                <GetCertificateName type="MembershipPoint"/>
                                            </div>
                                            <p className="card-text my-2">
                                                憑證介紹敘述憑證介紹敘述 <br />
                                                憑證介紹敘述憑證介紹敘述憑證介紹敘述 <br />
                                            </p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <span className="card-text"><small className="text-danger">期限:<span className='d-sm-inline-block d-none'>YYYY/</span>MM/DD</small></span>
                                                <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100" data-bs-toggle="modal" data-bs-target="#CertificateModal_demo">
                                    <div className="row g-0 h-100">
                                        <div className="col-4 align-content-center p-2">
                                            <div className="ratio ratio-1x1">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-white fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8 align-content-center p-2">
                                            <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">憑證名稱
                                            </h4>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <span className="d-flex align-items-center">
                                                    <span className="material-symbols-outlined fill-icon">id_card</span>
                                                    會員卡名稱
                                                </span>
                                                <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                    <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                    ﹡﹡
                                                </span>
                                            </div>
                                            <p className="card-text my-2">
                                                憑證說明憑證說明憑證<br/>
                                                憑證說明憑證說明憑證<br/>
                                                憑證說明說明憑證說明...
                                            </p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <span className="card-text"><small className="text-danger">期限：﹡﹡/﹡﹡</small></span>
                                                <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100">
                                    <div className="row g-0 h-100">
                                        <div className="col-4 align-content-center p-2">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src={base + "images/design_14.jpg"} className="rounded image-grayish" alt="Certificate(鴨嘴獸飛行體驗券) Image"/>
                                            </div>
                                        </div>
                                        <div className="col-8 align-content-center p-2">
                                            <h4 className="card-title text-dark d-flex justify-content-between align-items-center mb-1">鴨嘴獸飛行體驗券
                                            </h4>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <span className="d-flex align-items-center">
                                                    <span className="material-symbols-outlined fill-icon">id_card</span>
                                                    科技鴨嘴獸
                                                </span>
                                                <GetCertificateName type="Ticket"/>
                                            </div>
                                            <p className="card-text my-2">
                                                憑證介紹敘述憑證介紹敘述 <br />
                                                憑證介紹敘述憑證介紹敘述憑證介紹敘述 <br />
                                            </p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <span className="card-text"><small className="text-info fw-bolder">已使用</small></span>
                                                <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100">
                                    <div className="row g-0 h-100">
                                        <div className="col-4 align-content-center p-2">
                                            <div className="ratio ratio-1x1">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-white fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8 align-content-center p-2">
                                            <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">憑證名稱
                                            </h4>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <span className="d-flex align-items-center">
                                                    <span className="material-symbols-outlined fill-icon">id_card</span>
                                                    會員卡名稱
                                                </span>
                                                <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                    <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                    ﹡﹡
                                                </span>
                                            </div>
                                            <p className="card-text my-2">
                                                憑證說明憑證說明憑證<br/>
                                                憑證說明憑證說明憑證<br/>
                                                憑證說明說明憑證說明...
                                            </p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <span className="card-text"><small className="text-info fw-bolder">已使用</small></span>
                                                <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100">
                                    <div className="row g-0 h-100">
                                        <div className="col-4 align-content-center p-2">
                                            <div className="ratio ratio-1x1">
                                                <div className="d-flex justify-content-center align-items-center bg-primary rounded w-100 h-100">
                                                    <span className="text-white fs-3">預設圖片</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8 align-content-center p-2">
                                            <h4 className="card-title text-dark d-flex justify-content-between align-items-center text-truncate mb-1">憑證名稱
                                            </h4>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <span className="d-flex align-items-center">
                                                    <span className="material-symbols-outlined fill-icon">id_card</span>
                                                    會員卡名稱
                                                </span>
                                                <span className="d-inline-flex align-items-center badge rounded-pill bg-primary">
                                                    <span className="material-symbols-outlined fill-icon fs-6">crop_square</span>
                                                    ﹡﹡
                                                </span>
                                            </div>
                                            <p className="card-text my-2">
                                                憑證說明憑證說明憑證<br/>
                                                憑證說明憑證說明憑證<br/>
                                                憑證說明說明憑證說明...
                                            </p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <span className="card-text"><small className="text-danger fw-bolder">已失效</small></span>
                                                <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0 shadow">
                                <Link to ="#" className="text-decoration-none h-100">
                                    <div className="row g-0 h-100">
                                        <div className="col-4 align-content-center p-2">
                                            <div className="img-wrapper ratio ratio-1x1">
                                                <img src={base + "images/design_9.jpg"} className="rounded image-grayish" alt="Certificate(鴨嘴獸電子音響) Image"/>
                                            </div>
                                        </div>
                                        <div className="col-8 align-content-center p-2">
                                            <h4 className="card-title text-dark mb-1">鴨嘴獸電子音響 
                                            </h4>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <span className="d-flex align-items-center">
                                                    <span className="material-symbols-outlined fill-icon">id_card</span>
                                                    科技鴨嘴獸
                                                </span>
                                                <GetCertificateName type="LuckyDraw"/>
                                            </div>
                                            <p className="card-text my-2">
                                                憑證介紹敘述憑證介紹敘述<br/>
                                                憑證介紹敘述憑證介紹敘述憑證介紹敘述憑證介紹敘述...
                                            </p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <span className="card-text"><small className="text-danger fw-bolder">已失效</small></span>
                                                <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
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
                        <div className="d-flex py-2 mb-3">
                            <div className="border-bottom flex-grow-1 h-50 fs-6">&nbsp;</div>
                            <h3 className="text-gray text-center pt-1 px-2">尚未領取憑證</h3>
                            <div className="border-bottom flex-grow-1 h-50 fs-6">&nbsp;</div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xxl-6 col-lg-7 col-md-8 col-12">
                                <form action="">
                                    <input className="form-control search-bg-img border-0 bg-light rounded-pill shadow-inset ps-5" list="datalistOptionsForCorp" id="DataListForCorp" placeholder="Type to search..." onInput={(e)=>search(e)}/>
                                    <datalist id="datalistOptionsForCorp">                                     
                                        <option value="選項"/>
                                    </datalist>
                                </form>
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3 mt-3 mb-5">
                            <div className="col">
                                <div className="card h-100 border-0 shadow-sm">
                                    <Link to ="#" className="text-decoration-none h-100">
                                        <div className="row g-0 h-100">
                                            <div className="col-4 align-content-center p-2">
                                                <div className="img-wrapper ratio ratio-1x1">
                                                    <img src={base + "images/design_15.jpg"} className="rounded image-grayish" alt="Certificate(浣熊金幣) Image"/>
                                                </div>
                                            </div>
                                            <div className="col-8 align-content-center p-2">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-truncate mb-1">浣熊金幣</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); myfunction("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>獲取</span>
                                                        <span className="material-symbols-outlined fs-4">add_box</span>
                                                    </button>
                                                </div>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="material-symbols-outlined fill-icon">id_card</span>
                                                        科技鴨嘴獸
                                                    </span>
                                                    <GetCertificateName type="Cooperation"/>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證介紹敘述憑證介紹敘述 <br />
                                                    憑證介紹敘述憑證介紹敘述
                                                </p>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <span className="card-text"><small className="text-danger"></small></span>
                                                    <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
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
                                            <div className="col-4 align-content-center p-2">
                                                <div className="ratio ratio-1x1">
                                                    <div className="d-flex justify-content-center align-items-center bg-light rounded w-100 h-100">
                                                        <span className="text-gray fs-3">預設圖片</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8 align-content-center p-2">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-truncate mb-1">憑證名稱</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); myfunction("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>獲取</span>
                                                        <span className="material-symbols-outlined fs-4">add_box</span>
                                                    </button>
                                                </div>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="material-symbols-outlined fill-icon">id_card</span>
                                                        會員卡名稱
                                                    </span>
                                                    <GetCertificateName type="demo"/>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證介紹敘述憑證介紹敘述 <br />
                                                    憑證介紹敘述憑證介紹敘述
                                                </p>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <span className="card-text"><small className="text-danger"></small></span>
                                                    <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
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
                                            <div className="col-4 align-content-center p-2">
                                                <div className="ratio ratio-1x1">
                                                    <div className="d-flex justify-content-center align-items-center bg-light rounded w-100 h-100">
                                                        <span className="text-gray fs-3">預設圖片</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8 align-content-center p-2">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-truncate mb-1">憑證名稱</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); myfunction("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>獲取</span>
                                                        <span className="material-symbols-outlined fs-4">add_box</span>
                                                    </button>
                                                </div>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="material-symbols-outlined fill-icon">id_card</span>
                                                        會員卡名稱
                                                    </span>
                                                    <GetCertificateName type="demo"/>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證介紹敘述憑證介紹敘述 <br />
                                                    憑證介紹敘述憑證介紹敘述
                                                </p>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <span className="card-text"><small className="text-danger"></small></span>
                                                    <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
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
                                            <div className="col-4 align-content-center p-2">
                                                <div className="ratio ratio-1x1">
                                                    <div className="d-flex justify-content-center align-items-center bg-light rounded w-100 h-100">
                                                        <span className="text-gray fs-3">預設圖片</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8 align-content-center p-2">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-truncate mb-1">憑證名稱</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); myfunction("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>獲取</span>
                                                        <span className="material-symbols-outlined fs-4">add_box</span>
                                                    </button>
                                                </div>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="material-symbols-outlined fill-icon">id_card</span>
                                                        會員卡名稱
                                                    </span>
                                                    <GetCertificateName type="demo"/>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證介紹敘述憑證介紹敘述 <br />
                                                    憑證介紹敘述憑證介紹敘述
                                                </p>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <span className="card-text"><small className="text-danger"></small></span>
                                                    <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
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
                                            <div className="col-4 align-content-center p-2">
                                                <div className="ratio ratio-1x1">
                                                    <div className="d-flex justify-content-center align-items-center bg-light rounded w-100 h-100">
                                                        <span className="text-gray fs-3">預設圖片</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8 align-content-center p-2">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-truncate mb-1">憑證名稱</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); myfunction("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>獲取</span>
                                                        <span className="material-symbols-outlined fs-4">add_box</span>
                                                    </button>
                                                </div>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="material-symbols-outlined fill-icon">id_card</span>
                                                        會員卡名稱
                                                    </span>
                                                    <GetCertificateName type="demo"/>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證介紹敘述憑證介紹敘述 <br />
                                                    憑證介紹敘述憑證介紹敘述
                                                </p>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <span className="card-text"><small className="text-danger"></small></span>
                                                    <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
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
                                            <div className="col-4 align-content-center p-2">
                                                <div className="ratio ratio-1x1">
                                                    <div className="d-flex justify-content-center align-items-center bg-light rounded w-100 h-100">
                                                        <span className="text-gray fs-3">預設圖片</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8 align-content-center p-2">
                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                    <h4 className="text-truncate mb-1">憑證名稱</h4>
                                                    <button onClick={(e)=>{e.preventDefault(); myfunction("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                        <span className='min-w-fit-content'>獲取</span>
                                                        <span className="material-symbols-outlined fs-4">add_box</span>
                                                    </button>
                                                </div>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <span className="d-flex align-items-center">
                                                        <span className="material-symbols-outlined fill-icon">id_card</span>
                                                        會員卡名稱
                                                    </span>
                                                    <GetCertificateName type="demo"/>
                                                </div>
                                                <p className="card-text flex-grow-1 my-2">
                                                    憑證介紹敘述憑證介紹敘述 <br />
                                                    憑證介紹敘述憑證介紹敘述
                                                </p>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <span className="card-text"><small className="text-danger"></small></span>
                                                    <span className="card-text"><small className="text-muted">價值：$﹡﹡﹡</small></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
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
                    </div>
                </div>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="CertificateModal" tabindex="-1" aria-labelledby="Modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header border-0 shadow-sm py-2">
                            <h5 className="modal-title" id="Modal">鴨嘴獸飛行點數 <GetCertificateName type="MembershipPoint"/></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div class="card border-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={base + "images/design_12.jpg"} class="card-img mb-2" style={{maxWidth: "200px"}} alt="Certificate(鴨嘴獸飛行點數) image"/>
                                </div>
                                <div class="card-body py-2">
                                    <div className="mb-4">
                                        <div className="card-title d-flex align-items-center">
                                            <h6 className="fw-bold mb-0 me-2">會員卡</h6>
                                            <button onClick={(e)=>{e.preventDefault(); navigate("/clientMemberCard");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                <span className='min-w-fit-content'>查看</span>
                                                <span className="material-symbols-outlined fs-5">near_me</span>
                                            </button>
                                        </div>
                                        <span className="d-flex align-items-center">
                                            <span className="material-symbols-outlined fill-icon">id_card</span>
                                            科技鴨嘴獸
                                        </span>
                                    </div>
                                    <div className='mb-4'>
                                        <h6 className='card-title fw-bold'>介紹</h6>
                                        <div className='card-text'>
                                            <p >
                                                親愛的顧客🎉，快來加入我們的會員大家庭吧！ <br />
                                                ✨現在加入會員，立即享有<strong>專屬優惠</strong>，還能累積會員點數，兌換更多驚喜好禮🎁。 <br />
                                            </p>
                                            <small>加入會員的好處：</small>
                                            <ul>
                                                <li>享有專屬優惠</li>
                                                <li>累積點數兌換好禮</li>
                                                <li>點數可折抵現金</li>
                                                <li>享受獨家優惠與貼心服務</li>
                                            </ul>
                                            <p >
                                                加入會員<mark>簡單方便</mark>，立即註冊，享受獨家優惠與貼心服務💖。 <br />
                                                我們誠摯邀請您成為我們的尊貴會員，體驗更多超值福利，立即行動，不容錯過！ <br />
                                            </p>
                                            <Link href="#" className="link-info">立即加入🫵</Link>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <h6 className='card-title fw-bold'>發行時間</h6>
                                            <span className='text-muted'>YYYY/MM/DD HH:MM</span>
                                        </div>
                                        <div className="col">
                                            <h6 className='card-title fw-bold'>參考價格</h6>
                                            <span className='text-muted'>USD $1,214,520</span>
                                        </div>
                                    </div>
                                    <div className='mb-4'>
                                        <h6 className='card-title fw-bold'>領取資格</h6>
                                        <p className='card-text'>
                                            Anyone can be a part of the membership！
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between border-0 shadow-inset py-0">
                        <span className='text-muted'>領取時間:YYYY/MM/DD <span className='d-sm-inline-block d-none'>HH:MM</span></span>
                            <button onClick={(e)=>{e.preventDefault(); myfunction()}} type="button" className="btn btn-outline-secondary border-0 d-flex align-items-center gap-1 fw-bolder hover-fill-icon lh-1" >
                                <span className='border-bottom border-secondary py-1'>領取憑證</span>
                                <span className="material-symbols-outlined fs-4">add_box</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="CertificateModal_demo" tabindex="-1" aria-labelledby="Modal_demo" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header border-0 shadow-sm py-2">
                            <h5 className="modal-title" id="Modal_demo">憑證名稱 <GetCertificateName type="demo"/></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div class="card border-0">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={base + "images/default_img.png"} class="card-img mb-1" style={{maxWidth: "200px"}} alt="image"/>
                                    <p className="d-flex align-item-center text-danger mb-2">
                                        <span className="material-symbols-outlined fill-icon fs-5">notification_important</span>
                                        <small>您還尚未取得會員卡，無法獲取該憑證</small>
                                    </p>
                                </div>
                                <div class="card-body py-2">
                                    <div className="mb-4">
                                        <div className="card-title d-flex align-items-center">
                                            <h6 className="fw-bold mb-0 me-2">會員卡</h6>
                                            <button onClick={(e)=>{e.preventDefault(); navigate("#");}} className="btn d-inline-flex align-items-center border-0 rounded-0 text-info fw-bolder lh-1 hover-fill-icon p-0">
                                                <span className='min-w-fit-content'>查看</span>
                                                <span className="material-symbols-outlined fs-5">near_me</span>
                                            </button>
                                        </div>
                                        <span className="d-flex align-items-center">
                                            <span className="material-symbols-outlined fill-icon">id_card</span>
                                            會員卡名稱
                                        </span>
                                    </div>
                                    <div className='mb-4'>
                                        <h6 className='card-title fw-bold'>介紹</h6>
                                        <div className='card-text'>
                                            <p >
                                                憑証介紹敘述<br />
                                                ✨憑証介紹敘述，憑証介紹敘述<strong>憑証介紹</strong>，憑証介紹敘述，憑証介紹敘述憑証介紹敘述🎁。 <br />
                                            </p>
                                            <small>憑証介紹敘述：</small>
                                            <ul>
                                                <li>憑敘述</li>
                                                <li>介紹敘述</li>
                                                <li>憑証介</li>
                                                <li>敘述</li>
                                            </ul>
                                            <p >
                                                介紹說明<mark>介紹說明</mark>介紹說明介紹說明 <br />
                                                介紹說明 <br />
                                            </p>
                                            <Link href="#" className="link-info">憑証介紹敘述🫵</Link>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <h6 className='card-title fw-bold'>發行時間</h6>
                                            <span className='text-muted'>YYYY/MM/DD HH:MM</span>
                                        </div>
                                        <div className="col">
                                            <h6 className='card-title fw-bold'>參考價格</h6>
                                            <span className='text-muted'>$﹡﹡﹡﹡﹡﹡</span>
                                        </div>
                                    </div>
                                    <div className='mb-4'>
                                        <h6 className='card-title fw-bold'>領取資格</h6>
                                        <p className='card-text'>
                                            介紹說明介紹說明介紹說明介紹說明介紹說明介紹說明 <br />
                                            <strong>憑証介紹敘述：</strong>
                                            <ul>
                                                <li>憑介紹說明說明介紹說明敘述</li>
                                                <li>說明敘述</li>
                                                <li>介紹敘說明敘述述</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-0 shadow-inset py-0">
                            <button onClick={(e)=>{e.preventDefault(); myfunction()}} type="button" className="btn btn-outline-gray border-0 d-flex align-items-center gap-1 fw-bolder hover-fill-icon lh-1" disabled>
                                <span className='border-bottom border-secondary py-1'>領取憑證</span>
                                <span className="material-symbols-outlined fs-4">add_box</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default function ClientBrand() {
    return (
        <>
            <ClientHeader/>
            <Body/>
            <ClientFooter/>
        </>
    )
}