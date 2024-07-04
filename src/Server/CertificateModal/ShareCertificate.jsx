import { deploy721Contract } from '../../deploy721Contract';
import {mintNFT} from '../../mintNFT';
import axios from 'axios';

async function Create(data, params, type){
    let success = false;
    data.append("type", type);
    if(params.data._id){
        await axios
        .put(`/certificateCard/${params.data._id}`, data,  { 
            headers: { "Content-Type": "multipart/form-data" }}).then(async (res) => {
            success = true;
        }).catch(function (error) {
          console.log(error);
        });
    }
    else{
        await axios
        .post('/certificateCard', data,  { 
            headers: { "Content-Type": "multipart/form-data" }}).then(async (res) => {
            success = true;
        }).catch(function (error) {
          console.log(error);
        });
    }
    return success;
}

export async function CreateNFT(res, params){
    let hash = await deploy721Contract(params.data.user.wallet);
    let mintData;
    await axios
        .put(`/certificateCard/contract/${res.data._id}`, {contract: hash}).then(async () => {
            mintData = mintNFT(hash, params.data.user.wallet);
        }).catch(function (error) {
          console.log(error);
    });
}

export function Submit(e, buttonType, params, type, NFTImage){
    let formData = new FormData(e.target);
    if(formData.get('issue_time')){
        formData.set("issue_time" , new Date(formData.get('issue_time')).getTime());
    }
    if(NFTImage){
        formData.append("file", NFTImage);
    }
    else{
        if(params.data.imageURL === "null"){
            formData.append("imageURL", null);
        }
        else{
            formData.append("imageURL", params.data.imageURL);
        }
    }

    if(buttonType === "setting"){
        return;
    }
    if(params.data.status === true){
        alert("已發布不可更改");
        return;
    }
    if(params.data && params.data.user._id){
        formData.append("uid", params.data.user._id);
    }
    if(buttonType === "create"){
        formData.append("status", true);
    }
    else if(buttonType === "save"){
        formData.append("status", false);
    }
    return Create(formData, params, type);
}

export function FormButton(params){
    if(params.data.status){
        return(
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary w-100" name="setting">前往發布設定</button>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="row">
                <div className="col-6">
                    <button type="submit" className="btn btn-light w-100" name="save">儲存設計</button>
                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-primary w-100" name="create">創建會員</button>
                </div>
            </div>
        );
    }
}