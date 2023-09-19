import React from 'react'
const myerro ="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg";
const w=500;
function Errorpage() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h1 className='error'>404</h1>
                <h3>Page Not Found</h3>
                <img src={myerro} width={w} alt="error page" />
            </div>
        </div>
        

    </div>
  )
}

export default Errorpage