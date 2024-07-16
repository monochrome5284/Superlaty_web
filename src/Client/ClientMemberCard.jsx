import React from 'react';
import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Body(){
    // function GetBrandType(){
    //     let uiItem = [];
    //     uiItem.push(
    //         <span className="badge bg-primary shadow-sm rounded-pill fs-6 me-1">
    //             會員卡類別
    //         </span>
    //     )
    //     return uiItem;
    // }

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
            default:
                return (<></>);
        }      
    }

    return(
        <div className="container py-5" style={{marginTop:"68px"}}>
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-9 col-12 mb-lg-0 mb-5">
                    <div className="position-sticky div-sticy-top form-sm-shadow p-lg-5 pb-lg-4 p-sm-4 px-3 py-0">
                        <h2 className="text-primary text-center fw-bold mb-4">會員卡名稱</h2>
                        <div class="d-flex justify-content-center mb-4">
                            <div class="img-wrapper ratio ratio-1x1 w-50">
                                <img src={base + "images/design_11.jpg"} className="rounded shadow-sm" alt="會員卡照片"/>
                            </div>
                        </div>
                        <div className="mb-4"> 
                            <h3 className="fs-5">發行品牌</h3>
                            <p className='mb-0'>✦ 品牌名稱</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="fs-5">會員卡介紹</h3>
                            <p>
                                會員卡介紹敘述會員卡介紹會員卡介紹敘述會員卡介紹敘述 <br />
                                會員卡介紹敘述會員卡介紹敘述會員卡介紹敘述會員卡介紹敘述會員卡介紹敘述會員卡介紹敘述 <br />
                                會員卡介紹敘述會員卡介紹敘述會員卡介紹敘述 
                            </p>
                        </div>
                        <p className="text-end mb-0"><small className="text-muted">領取時間：2024/07/15 14:18</small></p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-8 col-md-9 col-12 p-lg-5 pb-lg-4 p-sm-4 px-3 py-0">
                    <h2 className="fs-2 fw-bold text-center pb-3 mb-3">憑證</h2>
                    <div className="list-group list-group-flush">
                        <a className="list-group-item list-group-item-action list-group-item-light">
                            <div className="row g-2">
                                <div class="col-4 align-content-center">
                                    <div class="img-wrapper ratio ratio-1x1">
                                        <img src={base + "images/design_12.jpg"} className="rounded" alt="憑證照片"/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="d-flex flex-column h-100">
                                        <h4 className="card-title text-dark d-flex justify-content-between align-items-center mb-1">憑證名稱
                                        </h4>
                                        <div className="d-flex justify-content-between flex-wrap">
                                            <span className="d-flex align-items-center">
                                                <span className="material-symbols-outlined fill-icon">id_card</span>
                                                會員卡名稱
                                            </span>
                                            <GetCertificateName type="MembershipPoint"/>
                                        </div>
                                        <p className="card-text flex-grow-1 my-2">
                                            憑證介紹敘述憑證介紹敘述 <br />
                                            憑證介紹敘述憑證介紹敘述憑證介紹敘述 <br />
                                        </p>
                                        <div className="d-flex justify-content-between align-items-end">
                                            <span className="card-text"><small className="text-danger">期限:YYYY/MM/DD</small></span>
                                            <span className="card-text"><small className="text-muted">價值：$***</small></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action list-group-item-light">
                            <div className="row g-2">
                                <div className="col-4 align-content-center">
                                    <div className="img-wrapper ratio ratio-1x1">
                                        <img src={base + "images/design_9.jpg"} className="rounded" alt="Certificate(Raccoon電子音響) Image"/>
                                    </div>
                                </div>
                                <div className="col-8 h-100">
                                    <div className="d-flex flex-column">
                                        <h4 className="card-title text-dark d-flex justify-content-between align-items-center mb-1">Raccoon電子音響 
                                        </h4>
                                        <div className="d-flex justify-content-between flex-wrap">
                                            <span className="d-flex align-items-center">
                                                <span className="material-symbols-outlined fill-icon me-2">id_card</span>
                                                Raccoon Club
                                            </span>
                                            <GetCertificateName type="LuckyDraw"/>
                                        </div>
                                        <p className="card-text flex-grow-1 my-2">
                                            憑證介紹敘述憑證介紹敘述<br/>
                                            憑證介紹敘述憑證介紹敘述憑證介紹敘述憑證介紹敘述...
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text"><small className="text-danger fw-bolder">已失效</small></p>
                                            <p className="card-text"><small className="text-muted">價值：$***</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action list-group-item-light">
                            <div className="row g-2">
                                <div class="col-4 align-content-center">
                                    <div class="img-wrapper ratio ratio-1x1">
                                        <img src={base + "images/design_14.jpg"} className="rounded image-grayish" alt="憑證照片"/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="d-flex flex-column h-100">
                                        <h4 className="card-title text-dark d-flex justify-content-between align-items-center mb-1">憑證名稱
                                        </h4>
                                        <div className="d-flex justify-content-between flex-wrap">
                                            <span className="d-flex align-items-center">
                                                <span className="material-symbols-outlined fill-icon">id_card</span>
                                                會員卡名稱
                                            </span>
                                            <GetCertificateName type="Ticket"/>
                                        </div>
                                        <p className="card-text flex-grow-1 my-2">
                                            憑證介紹敘述憑證介紹敘述 <br />
                                            憑證介紹敘述憑證介紹敘述憑證介紹敘述 <br />
                                        </p>
                                        <div className="d-flex justify-content-between align-items-end">
                                            <span className="card-text"><small className="text-danger">已使用</small></span>
                                            <span className="card-text"><small className="text-muted">價值：$***</small></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="d-none list-group-item list-group-item-action list-group-item-light">
                            <div className="row g-2">
                                <div class="col-4 align-content-center">
                                    <div class="img-wrapper ratio ratio-1x1">
                                        <img src={base + "images/design_15.jpg"} className="rounded image-grayish" alt="憑證照片"/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="d-flex flex-column text-gray h-100">
                                        <h4 className="card-title d-flex justify-content-between align-items-center mb-1">憑證名稱 
                                            <button className="btn d-sm-inline-flex d-none border-0 rounded-0 align-items-center text-info hover-fill-icon fw-bolder lh-1 p-0">
                                                取得
                                                <span className="material-symbols-outlined fs-4">add_box</span>
                                            </button>
                                        </h4>
                                        <div className="d-flex justify-content-between flex-wrap">
                                            <span className="d-flex align-items-center">
                                                <span className="material-symbols-outlined fill-icon">id_card</span>
                                                會員卡名稱
                                            </span>
                                            <GetCertificateName type="Cooperation"/>
                                        </div>
                                        <p className="card-text flex-grow-1 my-2">
                                            憑證介紹敘述憑證介紹敘述 <br />
                                            憑證介紹敘述憑證介紹敘述
                                        </p>
                                        <div className="d-flex justify-content-between align-items-end">
                                            <span className="card-text"><small className="text-danger"></small></span>
                                            <span className="card-text"><small className="text-muted">價值：$***</small></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <Stack mt={2} spacing={2} direction="row" justifyContent="center" >
                            <Button sx={{ paddingX: 3 }} variant="text" size="large" color="info" className='text-secondary'>查看更多</Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default function ClientMemberCard() {
    return (
        <>
            <ClientHeader/>
            <Body/>
            <ClientFooter/>
        </>
    )
}