import React from  'react';
import Timer from "./CountDown/Timer";


const CommonPage =(props)=>{
  return(
    <>
<section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                     <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.name} <strong className="brand-name">{props.companyName}</strong></h1>
                        <h2 className="my-3">{props.subText}</h2>
                        {/* <div className="mt-3">
                            <NavLink to={props.visit} className="btn btn-outline-info btn-get-started">{props.btnName}</NavLink>
                        </div> */}
                  <div className="mt-3">
                    <p>Want to be the first to know when we launch?</p>
                           <address>
                      Say hello  at <a href="mailto:hello@gitlime.com" style={{ color: '#51b037' }}>hello@gitlime.com</a>.<br />
                        
      <Timer/>
</address>
                        </div>
                    </div>
{/* image container */}
<div className="col-lg-6 order-1 order-lg-2 header-img">
<img  src={props.imgSrc} className="img-fluid animated" alt="home-img"/>

</div>
</div>

                </div>
            </div>
            
            </div> 
</section>
    </>
  )
}
export default CommonPage;