// import { useRouteError } from "react-router-dom"
export default function Erorr_404() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className='card-body d-flex justify-content-center align-items-center flex-column text-center'>
    <h1 className='card-title text-center m-0 fw-bold' style={{fontSize:"120px"}}>4<span className='text-danger' style={{fontSize:"160px"}}>0</span>4!</h1>
    <small className='text-center mb-3'>Page Not Found!</small>
    <button className='btn btn-primary w-25'>Go Back</button>
    </div>
    </div>
  )
}
