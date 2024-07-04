import { useNavigate } from 'react-router-dom';
export default function WithoutLogin(){
    let navigate = useNavigate();
    return(
        <>
            <p>請先登入</p>
            <button onClick={()=>navigate("/")}>返回主頁</button>
        </>
    );
}