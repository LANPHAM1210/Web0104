import React from 'react'

function Sale() {
  return (
    <div className='sale'>
        <h3  style={{fontFamily:'arial', fontWeight:'200'}}>Khuyến mãi lớn </h3>
        <div className='sale-cnt'>
            <img style={{width: '60%', height:'100%', border:'1px solid black'}}  src='https://www.xtsmart.vn/vnt_upload/news/08_2022/Artboard_13.png' alt=''/>
            <div style={{width: '37%', height:'100%', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                <img style={{width: '100%', height:'47%', border:'1px solid black'}} src='https://cdn.tgdd.vn/Files/2022/11/07/1484907/galaxy_1280x720-800-resize.jpg' alt='' />
                <img style={{width: '100%', height:'47%', border:'1px solid black'}} src='https://file.hstatic.net/1000329106/file/blog_2d6631cb44774d068cfb9092663e9f1f_1024x1024.gif' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Sale