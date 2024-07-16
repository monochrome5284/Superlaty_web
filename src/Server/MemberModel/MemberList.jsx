import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function Body(params){
    let base = import.meta.env.VITE_BASE_URL || "../";
    return(
        <>
            <div className = "container-fluid bg-blue-gradient" style={{marginTop: '68px'}}>
            <div className = "container py-4">

                <div className = "row align-items-center mb-3">
                <div className = "col">
                    <h1 className = "d-inline display-4 fw-bold py-2">領取清單</h1>
                </div>
                </div>

                <div className = "row g-0 mb-4">
                    <div className = "col-md-2 col-sm-3 col-4 align-content-center p-2">
                        <div className = "img-wrapper ratio ratio-1x1">
                            <img src={base + "images/design_10.jpg"} className = "rounded" alt="Brand(DogeDAO) Image"/>
                        </div>
                    </div>
                    <div className = "col-md-10 col-sm-9 col-8 d-flex justify-content-between align-items-start flex-column p-2">
                        <div>
                            <p className = "mb-0">隸屬會員卡：</p>
                            <h2>鴨嘴獸俱樂部</h2>
                        </div>
                        <button type="button" className = "btn btn-sm btn-outline-primary">返回會員卡</button>
                        {/* <button onClick="location.href='server_memberCard_202406201423.html'" type="button" className = "btn btn-sm btn-outline-primary">返回會員卡</button> */}
                    </div>
                </div>
                <ul className = "list-inline d-sm-block d-none text-end my-2">
                    <li className = "list-inline-item">
                        <div>
                            <span className = "material-symbols-outlined fill-icon align-text-top">check_circle</span>
                            已領取：314
                        </div>
                    </li>
                    <li className = "list-inline-item">
                        <span className = "material-symbols-outlined align-text-top">help</span>
                        未領取：99
                    </li>
                    <li className = "list-inline-item">
                        <span className = "material-symbols-outlined align-text-top">do_not_disturb_on</span>
                        已失效：87
                    </li>
                </ul>
                <div className = "table-responsive scrollbar-none mb-3">
                <table className = "table table-sm table-hover align-middle">
                    <thead className = "border-bottom border-primary">
                    <tr>
                        <th scope="col" style={{minWidth: '84px'}}>token ID</th>
                        <th scope="col" style={{minWidth: '160px'}}>會員名稱</th>
                        <th scope="col" style={{minWidth: '80px'}}>會員帳號</th>
                        <th scope="col" style={{minWidth: '108px'}}>狀態</th>
                        <th scope="col" style={{minWidth: '160px'}}>領取時間</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                01
                            </th>
                            <td className = "text-truncate">
                                湯湯水水
                            </td>
                            <td className = "text-truncate">
                                0x55DE7ABBa21609BDFA37ecD6B7a1Fc76661185d4
                            </td>
                            <td>
                                <span className = "material-symbols-outlined fill-icon align-text-top">check_circle</span>
                                領取
                            </td>
                            <td>
                                <span className = "text-gray">2024/06/20 17:24</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                02
                            </th>
                            <td className = "text-truncate">
                                Khaby Lame
                            </td>
                            <td className = "text-truncate">
                                0x5a27788368744594a4723214B7a1Fc76660085d4
                            </td>
                            <td>
                                <span className = "material-symbols-outlined fill-icon align-text-top">check_circle</span>
                                領取
                            </td>
                            <td>
                                <span className = "text-gray">2024-03-26 10:51</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                03
                            </th>
                            <td className = "text-truncate">
                                Lay Zhang
                            </td>
                            <td className = "text-truncate">
                                0x5DE7ABBa21609BDF63487a1272348345066e7839
                            </td>
                            <td>
                                <span className = "material-symbols-outlined fill-icon align-text-top">check_circle</span>
                                領取
                            </td>
                            <td>
                                <span className = "text-gray">2024-04-01 22:07</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                04
                            </th>
                            <td className = "text-truncate">
                                Chris Hemsworth
                            </td>
                            <td className = "text-truncate">
                                0xDE7A09BDFA37ecD6B7a1Fc76661185d4347a1462
                            </td>
                            <td>
                                <span className = "material-symbols-outlined fill-icon align-text-top">check_circle</span>
                                領取
                            </td>
                            <td>
                                <span className = "text-gray">2024-01-20 03:35</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                05
                            </th>
                            <td className = "text-truncate">
                                しゅん（おおしま兄妹）
                            </td>
                            <td className = "text-truncate">
                                0x3063455DE7ABBa21609BDFA37eca917834287a78
                            </td>
                            <td>
                                <span className = "material-symbols-outlined fill-icon align-text-top">check_circle</span>
                                領取
                            </td>
                            <td>
                                <span className = "text-gray">2024-01-27 04:04</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                06
                            </th>
                            <td className = "text-truncate">
                                bachi周秉志
                            </td>
                            <td className = "text-truncate">
                                0x7834506987a7ABBa21609B37eca91783428e1234
                            </td>
                            <td>
                                <span className = "material-symbols-outlined fill-icon align-text-top">check_circle</span>
                                領取
                            </td>
                            <td>
                                <span className = "text-gray">2024-02-08 15:18</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                07
                            </th>
                            <td className = "text-truncate">
                                莎莎 Sabrina
                            </td>
                            <td className = "text-truncate">
                                0x987a842783450Ba2609B37345067ec36936e7234
                            </td>
                            <td>
                                <span className = "material-symbols-outlined fill-icon align-text-top">check_circle</span>
                                領取
                            </td>
                            <td>
                                <span className = "text-gray">2024-04-09 18:07</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                08
                            </th>
                            <td className = "text-truncate">
                                鄧澤
                            </td>
                            <td className = "text-truncate">
                                0x5342836e50Ba24507ec609B37347a12348345069
                            </td>
                            <td>
                                <span className = "material-symbols-outlined fill-icon align-text-top">check_circle</span>
                                領取
                            </td>
                            <td>
                                <span className = "text-gray">2024-03-18 06:43</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                09
                            </th>
                            <td className = "text-truncate">
                                ﹡﹡﹡
                            </td>
                            <td>
                                ﹡﹡﹡﹡﹡
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">help</span>
                                尚未領取
                            </td>
                            <td>
                                <span className = "text-gray">---</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                10
                            </th>
                            <td className = "text-truncate">
                                ﹡﹡﹡
                            </td>
                            <td>
                                ﹡﹡﹡﹡﹡
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">help</span>
                                尚未領取
                            </td>
                            <td>
                                <span className = "text-gray">---</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                11
                            </th>
                            <td className = "text-truncate">
                                ﹡﹡﹡
                            </td>
                            <td>
                                ﹡﹡﹡﹡﹡
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">help</span>
                                尚未領取
                            </td>
                            <td>
                                <span className = "text-gray">---</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                12
                            </th>
                            <td className = "text-truncate">
                                ﹡﹡﹡
                            </td>
                            <td>
                                ﹡﹡﹡﹡﹡
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">help</span>
                                尚未領取
                            </td>
                            <td>
                                <span className = "text-gray">---</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                13
                            </th>
                            <td className = "text-truncate">
                                ﹡﹡﹡
                            </td>
                            <td>
                                ﹡﹡﹡﹡﹡
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">help</span>
                                尚未領取
                            </td>
                            <td>
                                <span className = "text-gray">---</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                14
                            </th>
                            <td className = "text-truncate">
                                ﹡﹡﹡
                            </td>
                            <td>
                                ﹡﹡﹡﹡﹡
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">help</span>
                                尚未領取
                            </td>
                            <td>
                                <span className = "text-gray">---</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                15
                            </th>
                            <td className = "text-truncate">
                                ﹡﹡﹡
                            </td>
                            <td>
                                ﹡﹡﹡﹡﹡
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">help</span>
                                尚未領取
                            </td>
                            <td>
                                <span className = "text-gray">---</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                16
                            </th>
                            <td className = "text-truncate">
                                ﹡﹡﹡
                            </td>
                            <td>
                                ﹡﹡﹡﹡﹡
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">help</span>
                                尚未領取
                            </td>
                            <td>
                                <span className = "text-gray">---</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                17
                            </th>
                            <td className = "text-truncate">
                                ﹡﹡﹡
                            </td>
                            <td>
                                ﹡﹡﹡﹡﹡
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">help</span>
                                尚未領取
                            </td>
                            <td>
                                <span className = "text-gray">---</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                18
                            </th>
                            <td className = "text-truncate">
                                ﹡﹡﹡
                            </td>
                            <td>
                                ﹡﹡﹡﹡﹡
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">help</span>
                                尚未領取
                            </td>
                            <td>
                                <span className = "text-gray">---</span>
                            </td>
                        </tr>
                        <tr className = "table-light">
                            <th scope="row">
                                19
                            </th>
                            <td className = "text-truncate">
                                Tanner
                            </td>
                            <td className = "text-truncate">
                                0xde43678a43457ec60123483450692490297e1671
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">do_not_disturb_on</span>
                                失效
                            </td>
                            <td>
                                <span className = "text-gray">2024-01-28 06:23</span>
                            </td>
                        </tr>
                        <tr className = "table-light">
                            <th scope="row">
                                20
                            </th>
                            <td className = "text-truncate">
                                𝐊𝐞𝐧𝐧𝐞𝐭𝐡 𝐊𝐮𝐧𝐠
                            </td>
                            <td className = "text-truncate">
                                0x714e7982357c40a088340692490297e16b818a82
                            </td>
                            <td>
                                <span className = "material-symbols-outlined align-text-top">do_not_disturb_on</span>
                                失效
                            </td>
                            <td>
                                <span className = "text-gray">2024-03-12 14:32</span>
                            </td>
                        </tr>

                    </tbody>
                </table>
                </div>

                <nav aria-label="Page navigation">
                    <ul className = "pagination justify-content-center gap-3">
                        <li className = "page-item">
                            <Link to ="#" className = "page-link border-0 rounded align-top"  aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            </Link>
                        </li>
                        <li className = "page-item active  border-0 rounded" aria-current="page">
                            <span className = "page-link  border-0 rounded">1</span>
                        </li>
                        <li className = "page-item">
                            <Link to ="#"className = "page-link  border-0 rounded" >2</Link>
                        </li>
                        <li className = "page-item">
                            <Link to ="#" className = "page-link  border-0 rounded" >3</Link>
                        </li>
                        <li className = "page-item d-sm-inline-block d-none">
                            <Link to ="#" className = "page-link  border-0 rounded" >4</Link>
                        </li>
                        <li className = "page-item d-sm-inline-block d-none">
                            <Link to ="#" className = "page-link  border-0 rounded" >5</Link>
                        </li>
                        <li className = "page-item">
                            <Link to ="#" className = "page-link  border-0 rounded"  aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
            </div>
        </>
    )
}

export default function MemberList() {
    return (
        <>
            <Header kind = "Design"/>
            <Body/>
            <Footer/>
        </>
    )
}