import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link, useNavigate} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const StyledDeleteIconButton = styled(IconButton)(({ theme }) => (
  ({size}) => (size === 'large' &&
  `padding: 8px;`
  // 也可以是JSON寫法 {padding: '8px'}
  )
));

function Body(params){
  let navigate = useNavigate();

  return (
    <div className="container-fluid bg-blue-gradient" style={{marginTop:"68px"}}>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col mb-3">
              <h1 className="d-inline display-4 fw-bold py-2">設計</h1>
          </div>
          <div className="col-xxl-9 col-12">
            <div className="row g-2">
              <div className="col">
                <select className="form-select shadow" defaultValue={"default"} id="filter4">
                  <option value={"default"} disabled >修改時間</option>
                  <option value="1" >近 24 小時</option>
                  <option value="3" >近 3 天</option>
                  <option value="30" >近 30 天</option>
                  <option value="0" >任何時間</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div id="offChainCarousel" className="carousel border-bottom mt-5">
          <h2>未發布</h2>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item">
              <button className="button-as-link w-100">
                <div className="card position-relative">
                  <div className="img-wrapper ratio ratio-1x1">
                      <img src="../images/design_16.jpg" className="card-img-top" alt="Unreleased design 1"/>
                  </div>
                  <div className="card-body">
                      <h5 className="card-title">名稱</h5>
                      <p className="card-text">類別</p>
                  </div>
                </div>
                <Tooltip title="Delete" placement="top" className='position-absolute top-0 end-0'>
                  <StyledDeleteIconButton size="large">
                    <DeleteIcon />
                  </StyledDeleteIconButton>
                </Tooltip>
              </button>
            </div>
            <div className="carousel-item">
              <button className="button-as-link w-100">
                <div className="card position-relative">
                  <div className="img-wrapper ratio ratio-1x1">
                      <img src="../images/design_15.jpg" className="card-img-top" alt="Unreleased design 2"/>
                  </div>
                  <div className="card-body">
                      <h5 className="card-title">名稱</h5>
                      <p className="card-text">類別</p>
                  </div>
                </div>
                <Tooltip title="Delete" placement="top" className='position-absolute top-0 end-0'>
                  <StyledDeleteIconButton size="large">
                    <DeleteIcon />
                  </StyledDeleteIconButton>
                </Tooltip>
              </button>
            </div>
          </div>
          <button className="carousel-control-prev w-auto" type="button" data-bs-target="#offChainCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next w-auto me--3" type="button" data-bs-target="#offChainCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div id="memberCarousel" className="carousel border-bottom mt-5">
          <h2 className="ps-3">會員</h2>
          <div className="carousel-inner" role="listbox">
          <div className="carousel-item">
            <button className="button-as-link w-100">
                <div className="card">
                <div className="img-wrapper ratio ratio-1x1">
                    <img src="../images/design_10.jpg" className="card-img-top" alt="MemberCard 1"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">會員名稱</h5>
                    <p className="card-text">會員類別</p>
                </div>
                </div>
            </button>
          </div>
          <div className="carousel-item">
            <button className="button-as-link w-100">
                <div className="card">
                <div className="img-wrapper ratio ratio-1x1">
                    <img src="../images/design_3.jpg" className="card-img-top" alt="MemberCard 2"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">會員名稱</h5>
                    <p className="card-text">會員類別</p>
                </div>
                </div>
            </button>
          </div>
          <div className="carousel-item">
            <button className="button-as-link w-100">
                <div className="card">
                <div className="img-wrapper ratio ratio-1x1">
                    <img src="../images/design_1.jpg" className="card-img-top" alt="MemberCard 3"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">會員名稱</h5>
                    <p className="card-text">會員類別</p>
                </div>
                </div>
            </button>
          </div>
          <div className="carousel-item">
            <button className="button-as-link w-100">
              <div className="card">
                <div className="img-wrapper ratio ratio-1x1">
                  <img src="../images/design_8.jpg" className="card-img-top" alt="MemberCard 4"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">會員名稱</h5>
                  <p className="card-text">會員類別</p>
                </div>
              </div>
            </button>
          </div>
          <div className="carousel-item">
            <button className="button-as-link w-100">
              <div className="card">
                <div className="img-wrapper ratio ratio-1x1">
                  <img src="../images/design_6.jpg" className="card-img-top" alt="MemberCard 5"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">會員名稱</h5>
                  <p className="card-text">會員類別</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <button className="carousel-control-prev w-auto" type="button" data-bs-target="#memberCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next w-auto me--3" type="button" data-bs-target="#memberCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/createMember" type="button" className="btn btn-primary border-0 rounded-pill bg-2blues-gradient px-5 mb-3">創建會員</Link>
        </div>
      </div>
      <div id="certificateCarousel" className="carousel border-bottom mt-5">
          <h2 className="ps-3">憑證</h2>
          <div className="carousel-inner" role="listbox">       
              <div className="carousel-item">
                  <button className="button-as-link w-100">
                      <div className="card">
                      <div className="img-wrapper ratio ratio-1x1">
                          <img src="../images/design_7.jpg" className="card-img-top" alt="Certificate 1"/>
                      </div>
                      <div className="card-body">
                          <h5 className="card-title">憑證名稱</h5>
                          <p className="card-text">憑證類別</p>
                      </div>
                      </div>
                  </button>
              </div>
              <div className="carousel-item">
                  <button className="button-as-link w-100">
                      <div className="card">
                      <div className="img-wrapper ratio ratio-1x1">
                          <img src="../images/design_9.jpg" className="card-img-top" alt="Certificate 2"/>
                      </div>
                      <div className="card-body">
                          <h5 className="card-title">憑證名稱</h5>
                          <p className="card-text">憑證類別</p>
                      </div>
                      </div>
                  </button>
              </div>
              <div className="carousel-item">
                  <button className="button-as-link w-100">
                      <div className="card">
                      <div className="img-wrapper ratio ratio-1x1">
                          <img src="../images/design_4.jpg" className="card-img-top" alt="Certificate 3"/>
                      </div>
                      <div className="card-body">
                          <h5 className="card-title">憑證名稱</h5>
                          <p className="card-text">憑證類別</p>
                      </div>
                      </div>
                  </button>
              </div>
              <div className="carousel-item">
                  <button className="button-as-link w-100">
                      <div className="card">
                      <div className="img-wrapper ratio ratio-1x1">
                          <img src="../images/design_5.jpg" className="card-img-top" alt="Certificate 4"/>
                      </div>
                      <div className="card-body">
                          <h5 className="card-title">憑證名稱</h5>
                          <p className="card-text">憑證類別</p>
                      </div>
                      </div>
                  </button>
              </div>
              <div className="carousel-item">
                  <button className="button-as-link w-100">
                      <div className="card">
                      <div className="img-wrapper ratio ratio-1x1">
                          <img src="../images/design_2.jpg" className="card-img-top" alt="Certificate 5"/>
                      </div>
                      <div className="card-body">
                          <h5 className="card-title">憑證名稱</h5>
                          <p className="card-text">憑證類別</p>
                      </div>
                      </div>
                  </button>
              </div>
          </div>
          <button className="carousel-control-prev w-auto" type="button" data-bs-target="#certificateCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next w-auto me--3 w-auto me--3" type="button" data-bs-target="#certificateCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
          <div className="d-flex justify-content-center align-items-center">
              <Link to="/createCertificate" type="button" className="btn btn-primary border-0 rounded-pill bg-blue-red-gradient px-5 mb-3">發行憑證</Link>
          </div>
      </div>
        </div>
    </div>
  );
}

export default function Design() {
    return (
        <>
            <Header kind = "design"/>
            <Body/>
            <Footer/>
        </>
    )
}