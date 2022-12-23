import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
}from "react-icons/fa";
import { useRouter } from 'next';
import Layout from './Layout';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Sipariş Sayfası",
            icon:<FaCommentAlt/>
        },
        {
            path:"/business",
            name:"İşletme Bilgileri",
            icon:<FaTh/>
        },
        {
            path:"/categoryadd",
            name:"Categori Ekleme",
            icon:<FaUserAlt/>
        },
        {
            path:"/productadd",
            name:"Ürün Ekleme",
            icon:<FaRegChartBar/>
        },
        {
            path:"/areapage",
            name:"Kat Bilgisi",
            icon:<FaCommentAlt/>
        }       
    ]
    return (
        <div className='containermenu'>
           <div style={{width: isOpen ? "280px" : "60px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "150px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{paddingTop: isOpen ? "60px" : "50px",}}>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
    <Layout>{children}</Layout>
        </div>
    );
};

export default Sidebar;