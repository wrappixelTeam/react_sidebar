import React, { } from 'react'
import logo from "../assets/images/logo/logo.svg"
import user_image from "../assets/images/profile/new-user-profile.jpg"
import unlimited_bg from "../assets/images/background/unlimited_bg.png"
import { SmartHome,ChartPie2,Package,Receipt,Wallet,Settings } from 'tabler-icons-react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Sidebar = () => {
  return (
     <>
       <aside>
        <div className="left-sidebar border-end">
        <SimpleBar style={{ maxHeight: '100vh' }}>
         <div className="pt-18 px-22">
           <div className="d-flex justify-content-center align-items-center gap-11 mb-17">
            <img src={logo} alt="logo" />
             <h3 className="mb-0 fw-bold fs-7">Orix</h3>
           </div>
           <div className='text-center mb-19'>
             <img src={user_image} alt="logo" />
              <h1 className="mb-2 fs-5 fw-bold mt-13">Robert Grant</h1>
              <p className="mb-0 fs-2 fw-medium">Marketing Director</p>
           </div>
           <nav>
            <ul className="mb-0 list-unstyled mb-20 ms-16">
                <li className='mb-15'>
                    <a href="/" className='sidebar-link d-flex primary-text-emphasis gap-2 text-decoration-none'>
                    <SmartHome size={18} color='#310E3A' />
                       <h2 className="mb-0 fs-5 fw-medium">Dashboard</h2>
                    </a>
                </li>
                <li className='mb-15'>
                    <a href="/" className='sidebar-link d-flex align-items-center primary-text-emphasis gap-2 text-decoration-none'>
                    <ChartPie2 size={18} className='icon' />
                       <p className="mb-0 fs-5 fw-medium">Analytics</p>
                    </a>
                </li>
                <li className='mb-15'>
                    <a href="/" className='sidebar-link d-flex align-items-center primary-text-emphasis gap-2 text-decoration-none'>
                    <Package size={18} className='icon' />
                       <p className="mb-0 fs-5 fw-medium">Ecommerce</p>
                    </a>
                </li>
                <li className='mb-15'>
                    <a href="/" className='sidebar-link d-flex align-items-center primary-text-emphasis gap-2 text-decoration-none'>
                    <Receipt size={18} className='icon' />
                       <p className="mb-0 fs-5 fw-medium">Project</p>
                    </a>
                </li>
                <li className='mb-15'>
                    <a href="/" className='sidebar-link d-flex align-items-center primary-text-emphasis gap-2 text-decoration-none'>
                    <Wallet size={18} className='icon' />
                       <p className="mb-0 fs-5 fw-medium">E-Wallet</p>
                    </a>
                </li>
                <li>
                    <a href="/" className='sidebar-link d-flex align-items-center primary-text-emphasis gap-2 text-decoration-none'>
                    <Settings size={18} className='icon' />
                       <p className="mb-0 fs-5 fw-medium">Settings</p>
                    </a>
                </li>
            </ul>
           </nav>
           <div className="unlimited d-flex bg-primary">
            <div className='unlimited-title'>
               <h2 className="mb-0 text-white fs-6 fw-bold mb-3">
               Unlimited Access
               </h2>
               <p className="mb-0 fs-1 fw-medium">
               get access to unlimited reports
               </p>
            </div>
            <div className='d-flex'>
               <img src={unlimited_bg} alt="unlimited_bg" />
            </div>
           </div>
           </div>
         </SimpleBar>
        </div>

       </aside>
     </>
  )
}

export default Sidebar