import React, {useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
function CreateBrandProfile(){
    let navigate = useNavigate();
    let base = import.meta.env.VITE_BASE_URL || "../";

    let [uploadedFileURL, setUploadedFileURL] = useState(null);

    const { handleSubmit} = useForm();

    const onSubmit = function(data, e) {
        navigate("/home");
    };

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
    return(
        <div className="comtainer-fluid d-flex justify-content-center align-items-center position-relative bg-img-cover bg-image-animation-bottomToTop px-3 h-full-screen" style={{backgroundImage: `url(${base}images/logIn-background-img.jpg)`}}>
                <div className="position-absolute top-0 start-0 ms-5 mt-3">
                    <h1 className="font-family-OleoScript display-1 text-white">Superlaty</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-12">
                        <div className="card overflow-scroll h-overflow-scroll shadow border-0 px-5 py-3">
                            <div className="card-header border-bottom bg-transparent border-0 text-center">
                                <h1 className="page-title fs-2 text-secondary fw-bold">創建品牌</h1>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div>
                                        <label htmlFor="image-upload" className="ratio ratio-1x1 my-2">
                                            {uploadedFileURL?<img className="profile-image" src={uploadedFileURL}/>:<div className="profile-image bg-light border-0 shadow-sm">
                                                <span className="material-symbols-outlined cursor-pointer">image</span>
                                            </div>}
                                        </label>
                                        <input type="file" className="d-none" id="image-upload" accept="image/png, image/jpeg" onChange={imageChange}/>
                                        <label htmlFor="image-upload" className="btn btn-outline-secondary d-block">
                                            上傳Logo圖片
                                        </label>
                                        <p className="text-info text-center">
                                            <span className="fw-bold text-decoration-underline">必須上傳</span>才能創建品牌<br/>
                                            <small>僅支援.jpg、.png圖檔，
                                                <span className="fw-bold text-decoration-underline">上限為5MB</span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor ="name" className="form-label">名稱(必填)</label>

                                    <span className="text-muted ms-2"><small>限20字</small></span>
                                    <input type="text" className="form-control" id="name" placeholder="填下您品牌美麗帥氣的名字吧～" maxLength="20"  required/>
                                </div>

                                <div className="mb-3">
                                    <p className="form-label">品牌類別</p>
                                    <div className="d-flex flex-wrap gap-1" style={{maxWidth: "500px"}}>
                                        <input className="btn-check" type="checkbox" name="brandType" value="technology products and services" id="brandType_technology" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_technology" >
                                            科技產品與服務
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="industry" id="brandType_industry" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_industry" >
                                            工業
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="business and finance" id="brandType_business_finance" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_business_finance" >
                                            商業與金融
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="healthcare" id="brandType_healthcare" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_healthcare" >
                                            醫療照護
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="catering and lifestyle" id="brandType_catering_lifestyle" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_catering_lifestyle" >
                                            飲食與生活
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="travel and shopping" id="brandType_travel_shopping" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_travel_shopping" >
                                            旅遊與購物
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="beauty and fitness" id="brandType_beauty_fitness" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_beauty_fitness" >
                                            美容健身
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="media and events" id="brandType_media_events" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_media_events" >
                                            社群媒體與活動
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="science and education" id="brandType_science_education" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_science_education" >
                                            科學與教育
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="nature and biology" id="brandType_nature_biology" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_nature_biology" >
                                            自然與生物
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="literature and society" id="brandType_literature_society" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_literature_society" >
                                            文學與社會
                                        </label>

                                        <input className="btn-check" type="checkbox" name="brandType" value="arts and entertainment" id="brandType_arts_entertainment" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_arts_entertainment" >
                                            藝術與娛樂
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="law and government" id="brandType_law_government" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_law_government" >
                                            法律與政府
                                        </label>
                                        <input className="btn-check" type="checkbox" name="brandType" value="transportation and real estate" id="brandType_transportation_realEstate" autoComplete="off"/>
                                        <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_transportation_realEstate" >
                                            交通與房地產
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="textarea1" className="form-label">品牌簡述</label>
                                    <span className="text-muted ms-2"><small>限200字</small></span>
                                    <textarea className="form-control" id="textarea1" rows="2" maxLength="200"></textarea>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="col-md-7 col-12">
                                        <button  className="btn btn-secondary w-100" formAction="server_index.html" type="submit">建立</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default CreateBrandProfile;