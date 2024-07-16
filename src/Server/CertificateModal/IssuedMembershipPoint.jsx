import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import UpgradeLevel from '../UpgradeLevel';

function Body() {
    let navigate = useNavigate();
    let path = '/design';
    let base = import.meta.env.VITE_BASE_URL || "../";
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

    const onSubmit = async function(data, e) {
        const buttonType = window.event.submitter.name;
        alert(`按鈕的Name為${buttonType}`);
        navigate(path);
    };

    const handleClick = (event) => {
        event.preventDefault();
    };

    const handleNumber = (e) => {
        if (e.key === '-' || e.key === 'e' || e.key === 'E' || e.key === '.') {
            e.preventDefault();
        }
    };

    return (
        <div className="container-fluid"  style={{marginTop:"68px"}}>
            <div className="container py-4">
                <div className="d-flex flex-wrap align-items-center ps-3 mb-3">
                    <button onClick={() => navigate(-1)} className="btn p-2 d-inline-flex justify-content-center align-items-center ms-return-key-halfrem">
                        <span className="material-symbols-outlined fs-2">arrow_back</span>
                    </button>
                    <h1 className="display-4 fw-bold">發行會員點數</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="row d-flex flex-wrap flex-column justify-content-center align-items-center form-lg-border-none form-lg-max-height p-3 g-3">
                    <h2 className="d-lg-none text-secondary text-center border-bottom pb-3">設定點數資料</h2>

                    <div className="col-lg-6 d-flex justify-content-center align-items-center mb-3">
                        <div>
                            <label htmlFor="image-upload" className="ratio ratio-1x1">
                                <div className="profile-image" style={{backgroundImage: `url(${uploadedFileURL??base + "images/certificate_img1.jpg"})`}}>
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
                        <h2 className="d-lg-block d-none text-secondary text-center border-bottom pb-3 mb-3">設定點數資料</h2>
                        <div className="row g-3">
                            <div className="col-6 mb-3">
                                <label htmlFor="pointName" className="form-label">點數名稱＊</label>
                                <input type="text" className="form-control" id="pointName" required/>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="symbol" className="form-label">點數符號＊</label>
                                <input type="text" className="form-control" id="symbol" required/>
                            </div>
                        </div>
                        <div className="mb-3">
                                <label htmlFor="linkedProject" className="form-label">選擇連結憑證專案(即將開放)</label>
                                <select className="form-select" id="linkedProject" defaultValue={"default"} disabled>
                                    <option value={"default"} disabled >選擇專案</option>
                                    <option value="project1">專案1</option>
                                    <option value="project2">專案2</option>
                                    <option value="project3">專案3</option>
                                </select>
                            </div>
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label">發行數量＊</label>
                            <input type="number" min="1" step="1" onKeyDown={handleNumber} className="form-control" id="amount" required/>
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="price" className="form-label">發行價格＊</label>
                            <div className="input-group">
                                <input type="number" className="form-control" id="price" aria-label="Enter the amount and use the drop-down buttons to select the currency type" disabled/>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" disabled>幣種</button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <button className="dropdown-item">
                                            <img src={base + "images/tether-usdt-logo.svg"} alt="Option 3" className="me-2" width="24" height="24"/> USDT
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item">
                                            <img src={base + "images/ethereum-eth-logo.svg"} alt="Option 3" className="me-2" width="24" height="24"/> ETH
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item">
                                            <img src={base + "images/bitcoin-btc-logo.svg"} alt="Option 3" className="me-2" width="24" height="24"/> BTC
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <button onClick={handleClick} className="position-absolute w-100 h-100 top-0 button-as-link" data-bs-toggle="modal" data-bs-target="#upgradeLevelModal"></button>
                        </div>
                        <div className="row gx-3">
                            <div className="col-6 mb-3">
                                <label className="decimalPoints">小數點數目</label>
                                <input type="number" min="1" step="1" onKeyDown={handleNumber} className="form-control" id="decimalPoints" defaultChecked/>
                            </div>
                            <div className="col-6 mb-3">
                                <label className="startTime">預計發行時間</label>
                                <input type="datetime-local" className="form-control" id="startTime" aria-label="input starting time"/>
                            </div>

                        </div>
                        <div className="mb-3">
                            <p className="form-label">點數特性(未來均能改)</p>
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
                        </div>
                        <div className="mb-3">
                            <label htmlFor="link" className="form-label">外部連結</label>
                            <input type="url" className="form-control" id="link" placeholder="https://"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">其他敘述</label>
                            <textarea className="form-control" id="description" rows="3"></textarea>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button type="submit" className="btn btn-light w-100" name="save">儲存設計</button>
                            </div>
                            <div className="col-6">
                                <button type="submit" className="btn btn-primary w-100" name="create">創建憑證</button>
                            </div>
                        </div>
                    </div>
                </form>
                <UpgradeLevel/>
            </div>
        </div>
    );
}

export default function IssuedMembershipPoint() {
    return (
        <>
            <Header kind = "design"/>
            <Body/>
            <Footer/>
        </>
    )
}