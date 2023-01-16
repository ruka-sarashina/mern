import React from 'react'
import { RegisterBg } from '../../assets'
import './DetailBlog.scss';
import { Gap, Link } from '../../components';
import { useHistory } from 'react-router-dom';

const DetailBlog = () => {
  const History = useHistory();
  return (
    <div className='detail-blog-wrapper'>
      <img className='img-cover' src={RegisterBg}  alt='thumb'/>
      <p className='blog-title'>Title Blog</p>
      <p className='blog-author'>Author - Date Post</p>
      <p className='blog-body'>Content Blog</p>
      <Gap height={25}/>
      <Link title="Kembali ke home" onClick={() => History.push('/')}/>
    </div>
  )
}

export default DetailBlog
