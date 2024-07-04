export function FormButton(){

    // if(){
    //     return(
    //         <div className="row">
    //             <div className="col-6">
    //                 <button type="submit" className="btn btn-light w-100" name="list">查看領取清單</button>
    //             </div>
    //             <div className="col-6">
    //                 <button type="submit" className="btn btn-primary w-100" name="setting">前往發布設定</button>
    //             </div>
    //         </div>
    //     );
    // }
    // else{
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
    // }
}