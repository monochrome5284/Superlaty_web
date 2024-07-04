import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { useForm} from "react-hook-form";
import UpgradeLevel from '../UpgradeLevel';
import { FormButton } from './ShareMember';

function Body() {
    let navigate = useNavigate();
    let path = '/design';
    
    const { handleSubmit } = useForm();
    let [uploadedFileURL, setUploadedFileURL] = useState(null);

    function imageChange(e){
        if(e.target.files.length === 0){
            alert("請上傳圖片");
            setUploadedFileURL(null);
            return;
        }
        if(e.target.files[0].type !== "image/png" && e.target.files[0].type !== "image/jpeg"){
            alert("檔案類型只支援jpg及png");
            setUploadedFileURL(null);
            return;
        }
        if(e.target.files[0].size / 1024 / 1024 > 5){
            alert("檔案不得超過5MB");
            setUploadedFileURL(null);
            return;
        }
        setUploadedFileURL(URL.createObjectURL(e.target.files[0]));
    }

    const onSubmit = async function(data,e) {
        const buttonType = window.event.submitter.name;
        alert(`按鈕的Name為${buttonType}`);
        navigate(path);
    };

    const handleClick = (event) => {
        event.preventDefault();
    };

    const handleNumber = (event) => {
        if (event.key === '-' || event.key === 'e' || event.key === 'E' || event.key === '.') {
            event.preventDefault();
        }
    };

    return (
        <div className="container-fluid" style={{marginTop:"68px"}}>
            <div className="container py-4">
                <div className="d-flex flex-wrap align-items-center ps-3 mb-3">
                    <button onClick={() => navigate(-1)}  className="btn p-2 d-inline-flex justify-content-center align-items-center ms-return-key-halfrem">
                        <span className="material-symbols-outlined fs-2">arrow_back</span>
                    </button>
                    <h1 className="display-4 fw-bold">創建分級會員</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="row d-flex flex-wrap flex-column justify-content-center align-items-center form-lg-border-none form-lg-max-height p-3 g-3">
                    <h2 className="d-lg-none text-secondary text-center border-bottom pb-3">設定會員資料</h2>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center mb-3">
                        <div>
                        <label htmlFor="image-upload" className="ratio ratio-1x1">
                            <div className="profile-image" style={{backgroundImage: `url(${uploadedFileURL??"../images/member_img3.jpg"})`}}>
                                {!uploadedFileURL &&<span className="material-symbols-outlined">image</span>}
                            </div>
                            </label>
                            <input type="file" className="d-none" id="image-upload" accept="image/png, image/jpeg" onChange={imageChange}/>
                            <p className="fs-6 text-danger text-center px-5">僅支援.jpg、.png圖檔，<b>上限為5MB</b></p>
                            <label htmlFor="image-upload" className="btn btn-outline-secondary d-block">
                                上傳圖片
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-6 form-lg-border p-lg-5 p-sm-3 p-1">
                        <h2 className="d-lg-block d-none text-secondary text-center border-bottom pb-3 mb-3">設定會員資料</h2>
                        <div className="row g-3">
                            <div className="col-6 mb-3">
                                <label htmlFor="name" className="form-label">會員名稱＊</label>
                                <input type="text" className="form-control" id="name" required/>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="symbol" className="form-label">會員代號＊</label>
                                <input type="text" className="form-control" id="symbol" required/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="linkedProject" className="form-label">選擇連結憑證專案</label>
                            <select className="form-select" defaultValue={"default"} id="linkedProject">
                                <option value={"default"} disabled >選擇專案</option>
                                <option value="project1">專案1</option>
                                <option value="project2">專案2</option>
                                <option value="project3">專案3</option>
                            </select>
                        </div>
                        <div className="mb-3" id="tiered">
                            <label htmlFor="level" className="form-label">會員層級＊(數字越大層級越高)</label>
                            <GetTiered/>
                            <div>
                                <p className="d-block text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16" style={{cursor:"pointer"}}>
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                </p>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label">發行數量＊</label>
                            <input type="number" min="1" step="1" onKeyDown={handleNumber} className="form-control" id="amount" required/>
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="price" className="form-label text-black-50">發行價格 💎</label>
                            <div className="input-group">
                                <input type="number" className="form-control" id="price" aria-label="Enter the amount and use the drop-down buttons to select the currency type" disabled/>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" disabled>幣種</button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <button className="dropdown-item">
                                            <img src="../assets/images/tether-usdt-logo.svg" alt="Option 3" className="me-2" width="24" height="24"/> USDT
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item">
                                            <img src="../assets/images/ethereum-eth-logo.svg" alt="Option 3" className="me-2" width="24" height="24"/> ETH
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item">
                                            <img src="../assets/images/bitcoin-btc-logo.svg" alt="Option 3" className="me-2" width="24" height="24"/> BTC
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <button onClick={handleClick} className="position-absolute w-100 h-100 top-0 button-as-link" data-bs-toggle="modal" data-bs-target="#upgradeLevelModal"></button>
                        </div>
                        <div className="mb-3">
                            <p className="form-label">會員特性＊(未來均能改)</p>
                            <div className="btn-group w-100 mb-2" role="group" aria-label="privacy">
                                <input type="radio" className="btn-check" name="privacy" id="public" value="public" defaultChecked/>
                                <label className="btn btn-outline-secondary" htmlFor="public">公開</label>
                                <input type="radio" className="btn-check" name="privacy" id="private" value="private"/>
                                <label className="btn btn-outline-secondary" htmlFor="private">私人</label>
                            </div>
                            <div className="btn-group w-100 mb-2" role="group" aria-label="trade privileges">
                                <input type="radio" className="btn-check" name="transaction" id="free" value="free" defaultChecked/>
                                <label className="btn btn-outline-secondary" htmlFor="free">自由交易</label>
                                <input type="radio" className="btn-check" name="transaction" id="unavailable" value="unavailable"/>
                                <label className="btn btn-outline-secondary" htmlFor="unavailable">不可交易</label>
                            </div>
                            <div className="btn-group w-100 mb-2" role="group" aria-label="re-casting Privileges">
                                <input type="radio" className="btn-check" name="duplicate" id="re-castable" value="re-castable" defaultChecked/>
                                <label className="btn btn-outline-secondary" htmlFor="re-castable">&emsp;可重複鑄造</label>
                                <input type="radio" className="btn-check" name="duplicate" id="non-recastable" value="non-recastable"/>
                                <label className="btn btn-outline-secondary" htmlFor="non-recastable">不可重複鑄造</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="link" className="form-label">外部連結</label>
                            <input type="url" className="form-control" id="link" placeholder="https://"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">其他敘述</label>
                            <textarea className="form-control" id="description" rows="3"></textarea>
                        </div>
                        <FormButton/>
                    </div>
                </form>
                <UpgradeLevel/>
            </div>
        </div>
    );
}

export default function CreateTieredMember() {
    return (
        <>
            <Header kind = "design"/>
            <Body/>
            <Footer/>
        </>
    )
}