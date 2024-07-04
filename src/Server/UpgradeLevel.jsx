import React from 'react';
import { useNavigate } from 'react-router-dom';

function Body() {
    let navigate = useNavigate();
    return (
        <div className="modal fade" id="upgradeLevelModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0">
                        <h3 className="modal-title fs-5" id="exampleModalLabel">升級至Super PRO 開通新功能！</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="d-sm-block d-none lh-lg mb-0">輕鬆 <span className="badge bg-dark">掌握CRM管理</span>，同時建立 <span className="badge bg-dark">精準會員收費制度</span>。 <br/>
                            助您提升業務效率，精準經營客群，開創更多商機！<br/>
                            立即體驗新功能，提升品牌價值！<br/>
                        </p>
                        <p className="d-sm-none d-block mb-0">輕鬆掌握CRM管理，同時建立精準會員收費制度。 <br/>
                            助您提升業務效率，精準經營客群，開創更多商機！<br/>
                            立即體驗新功能，提升品牌價值！<br/>
                        </p>
                    </div>
                    <div className="modal-footer border-top-0">
                        <button className="btn btn-secondary" onClick={()=>{navigate("/superPro")}} data-bs-dismiss="modal">
                            了解更多詳情
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function UpgradeLevel() {
    return (
        <>
            <Body/>
        </>
    )
}