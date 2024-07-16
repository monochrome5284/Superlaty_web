import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";

function Body(params){
    let navigate = useNavigate();
    let location = useLocation();
    let base = import.meta.env.VITE_BASE_URL || "../";

    const { register, handleSubmit, setValue } = useForm();
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    let [NFTImage, setNFTImage] = useState();
    let [uploadedFileURL, setUploadedFileURL] = useState(null);

    useEffect(() => {
        let data = params.user;
        if (data) {
          if(data.avatar){
              setUploadedFileURL(data.avatar);
          }
          Object.entries(data).forEach(
            ([name, value]) => setValue(name, value));
        }
        setValue("brand_type", data.brand_type.split(",")); 
    }, [setValue, params.data]);

    function imageChange(e){
        if(e.target.files.length === 0){
            alert("請上傳圖片");
            setUploadedFileURL(null);
            setNFTImage(null);
            return;
        }
        
        if(e.target.files[0].type !== "image/png" && e.target.files[0].type !== "image/jpeg"){
            alert("檔案類型只支援jpg及png");
            setUploadedFileURL(null);
            setNFTImage(null);
            return;
        }
        if(e.target.files[0].size / 1024 / 1024 > 5){
            alert("檔案不得超過5MB");
            setUploadedFileURL(null);
            setNFTImage(null);
            return;
        }
        
        setNFTImage(e.target.files[0]);
        setUploadedFileURL(URL.createObjectURL(e.target.files[0]));
    }

    const onSubmit = function(data, e) {
        let formData = new FormData(e.target);
        if(NFTImage){
            formData.append("file", NFTImage);
        }
        else{
            if(params.user.avatar === "null"){
                formData.append("avatar", null);
            }
            else{
                formData.append("avatar", params.user.avatar);
            }
        }
        formData.set("brand_type", formData.getAll("brand_type").toString());
        if(params.user._id){
            axios.put(`/corp_user/${params.user._id}`, formData,  {
                headers: { "Content-Type": "multipart/form-data" }}).then(async (res) => {

                navigate("/home",{state:{user:res.data}})
            }).catch(function (error) {
              console.log(error);
            });
        }

    };
    const handleClick = (event,location) => {
        event.preventDefault();
    };

return(
    <>
        <div className ="container py-5" style={{marginTop: '68px'}}>
            <div className ="row justify-content-center">
                <div className ="col-xl-7 col-lg-8 col-md-9 col-12">
                    <form onSubmit={handleSubmit(onSubmit)} className ="form-sm-shadow p-lg-5 pb-lg-4 p-sm-4 px-3 py-0">
                        <h2 className ="text-secondary text-center fw-bold border-bottom pb-3 mb-3">修改品牌資料</h2>

                        <div className ="row row-cols-1 row-cols-sm-2">
                            <div className ="col d-flex justify-content-center align-items-center">
                                <div>
                                    <label htmlFor="image-upload" className ="ratio ratio-1x1 mb-2">
                                        <div className ="profile-image border-0" style={{backgroundImage: `url(${uploadedFileURL??base + "images/tango_LOGO.jpg"})`}}>

                                        </div>
                                    </label>
                                    <input type="file" className ="d-none" id="image-upload" accept="image/png, image/jpeg" onChange={imageChange}/>
                                    <label htmlFor="image-upload" className ="btn btn-outline-secondary d-block">
                                        上傳圖片
                                    </label>
                                    <p className ="text-info text-center">
                                        <small>僅支援.jpg、.png圖檔，
                                            <span className ="fw-bold text-decoration-underline">上限為5MB</span>
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className ="col">
                                <div className ="row row-cols-2 row-cols-sm-1 g-3">
                                    <div className ="mb-3">
                                        <label htmlFor="name" className ="form-label">名稱</label>
                                        <span className ="text-muted ms-2"><small>限20字</small></span>
                                        <input type="text" className ="form-control" id="name" maxLength="20" required {...register("name")}/>
                                    </div>
                                    <div className ="col mb-3">
                                        <label htmlFor="UID" className ="form-label">UID</label>
                                        <input type="text" className ="form-control border-0 bg-light shadow-sm text-gray" id="UID" value="377502437" disabled readOnly {...register("_id")}/>
                                    </div>
                                    <div className ="col mb-3 w-100">
                                        <label htmlFor="registInfo" className ="form-label">註冊e-mail</label>
                                        <div className ="input-group">
                                            <input type="email" className ="form-control border-0 bg-light shadow-sm text-gray" id="registInfo" value="Superlaty@gmail.com" disabled readOnly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="mb-3 ">
                            <p className ="form-label">品牌類別</p>
                            <div className="d-flex flex-wrap gap-1" style={{maxWidth: "500px"}}>
                                <input className="btn-check" type="checkbox" name="brandType" value="technology products and services" id="brandType_technology" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_technology" >
                                    科技產品與服務
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="industry" id="brandType_industry" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_industry" >
                                    工業
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="business and finance" id="brandType_business_finance" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_business_finance" >
                                    商業與金融
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="healthcare" id="brandType_healthcare" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_healthcare" >
                                    醫療照護
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="catering and lifestyle" id="brandType_catering_lifestyle" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_catering_lifestyle" >
                                    飲食與生活
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="travel and shopping" id="brandType_travel_shopping" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_travel_shopping" >
                                    旅遊與購物
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="beauty and fitness" id="brandType_beauty_fitness" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_beauty_fitness" >
                                    美容健身
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="media and events" id="brandType_media_events" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_media_events" >
                                    社群媒體與活動
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="science and education" id="brandType_science_education" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_science_education" >
                                    科學與教育
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="nature and biology" id="brandType_nature_biology" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_nature_biology" >
                                    自然與生物
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="literature and society" id="brandType_literature_society" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_literature_society" >
                                    文學與社會
                                </label>
                                
                                <input className="btn-check" type="checkbox" name="brandType" value="arts and entertainment" id="brandType_arts_entertainment" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_arts_entertainment" >
                                    藝術與娛樂
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="law and government" id="brandType_law_government" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_law_government" >
                                    法律與政府
                                </label>
                                <input className="btn-check" type="checkbox" name="brandType" value="transportation and real estate" id="brandType_transportation_realEstate" autoComplete="off" {...register("brand_type")}/>
                                <label className="btn btn-outline-primary btn-sm border-0 shadow-sm rounded-pill" htmlFor="brandType_transportation_realEstate" >
                                    交通與房地產
                                </label>
                            </div>
                        </div>
                        <div className ="mb-3">
                            <label htmlFor="textarea1" className ="form-label">品牌簡述</label>
                            <span className ="text-muted ms-2"><small>限200字</small></span>
                            <textarea className ="form-control" id="textarea1" rows="3" maxLength="200" {...register("brand_description")}></textarea>
                        </div>
                        <div className ="row mb-3">
                            <label htmlFor="servicePlan" className ="col-sm-3 col-form-label">服務方案</label>
                            <div className ="col">
                                <input type="text" className ="col form-control border-0 bg-light shadow-sm text-gray" id="servicePlan" value="Free" aria-label="Service Plan" disabled readOnly/>
                            </div>
                        </div>
                        <div className ="row mb-3">
                            <label htmlFor="walletAdd" className ="col-sm-3 col-form-label">錢包地址</label>
                            <div className ="input-group col">
                                <input type="text" className ="form-control border-0 bg-light shadow-sm text-gray" id="walletAdd" disabled readOnly {...register("wallet")}/>
                                <button onClick={(e) => {handleClick(e);navigator.clipboard.writeText(params.user?params.user.wallet:"")}} className ="col-3 btn btn-secondary d-inline-flex justify-content-center align-items-center">
                                  <span className ="material-symbols-outlined fs-5">content_copy</span>
                                  複製
                                </button>
                            </div>
                        </div>
                        <div className ="row mb-3">
                            <label htmlFor="referralCode" className ="col-sm-3 col-form-label">推薦碼</label>
                            <div className ="input-group col">
                                <input type="text" className ="form-control border-0 bg-light shadow-sm text-gray" id="referralCode" aria-label="referral code" disabled readOnly {...register("referral_code")}/>
                                <button onClick={(e) => {handleClick(e);navigator.clipboard.writeText(params.user?params.user.referral_code:"")}} className ="col-3 btn btn-secondary d-inline-flex justify-content-center align-items-center">
                                  <span className ="material-symbols-outlined fs-5">content_copy</span>
                                  複製
                                </button>
                            </div>
                        </div>
                        <div className ="row py-3">
                            <div className ="col-6">
                                <Link to="/home" state={params}  className ="btn btn-light w-100 shadow-sm">取消</Link>
                            </div>
                            <div className ="col-6">
                                <button type="submit" className ="btn btn-primary w-100 shadow-sm">確認修改</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>);
}
export default function BrandInfo() {
    return (
        <>
            <Header user = {location.state.user} kind = "home"/>
            <Body user = {location.state.user}/>
            <Footer/>
        </>
    )
}