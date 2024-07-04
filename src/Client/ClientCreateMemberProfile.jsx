import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ParticleComponent from '../scss/components/particles';
function ClientCreateMemberProfile(){
    let navigate = useNavigate();

    const { handleSubmit } = useForm();

    const onSubmit = function(data, e) {
        navigate("/clientHome");
    };

    return(
        <>
            <div id="particles-js"><ParticleComponent/></div>
            <div className="comtainer-fluid d-flex flex-column justify-content-center align-items-center h-full-screen">
                <div className="card shadow border-0">
                    <div className="card-header bg-transparent border-0 text-center pt-4">
                        <h1 className="fs-3 text-info fw-bold">填寫個人資訊</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="mx-3 mb-2">
                            <div className="mb-3">
                            <label htmlFor="Name" className="form-label">姓名</label>
                            <input type="text" className="form-control" id="Name" aria-describedby="Input your nmae" autoComplete="name" autoCapitalize="none" spellCheck="false" placeholder="請輸入「你的名字」" required/>
                            </div>
                            <div className="mb-2">
                                <p className="form-label">生理性別</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male"/>
                                    <label className="form-check-label" htmlFor="male">生理男</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female"/>
                                    <label className="form-check-label" htmlFor="female">生理女</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Non-binary" value="Non-binary" defaultChecked/>
                                    <label className="form-check-label" htmlFor="Non-binary">其他(非二元)</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="birthday" className="form-label">生日</label>
                                <input type="date" className="form-control" id="birthday" aria-label="input time" defaultValue="2000-01-01"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="corporateCode" className="form-label">專屬企業碼(非必填)</label>

                                <input type="text" className="form-control" id="corporateCode" aria-describedby="If you have a corporate code, input it" autoCapitalize="none" spellCheck="false"/>
                            </div>
                            <div className="text-center px-5 pt-3">
                                <button type="submit" className="btn btn-info w-100" >下一步</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientCreateMemberProfile;