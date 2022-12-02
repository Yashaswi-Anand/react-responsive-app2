import React, { useState } from 'react'

function NavbarTop() {
    const [showmenu, setShowMenu] = useState(false)
    return (
        <>
            <div className='navbar'>
                <div style={{ 'margin': "1rem" }}>
                    <div className='search-bar'>
                        <div className='search-icon'><i class="fa-solid fa-magnifying-glass"></i>&nbsp; <input /></div>
                        <div className='noty'><i class="fa-sharp fa-solid fa-bell"></i></div>
                        <div className='user-name'><i class="fa-solid fa-user"></i> UserFullName</div>
                    </div>

                    <div className='action-buttons'>
                        <div><b><i class="fa-solid fa-user"></i> UserFullName</b></div>
                        <button className='btn-design'>New</button>
                        <button className='btn-design'>Upload</button>
                        <button className='btn-design'>Share</button>
                    </div>
                </div>
            </div>

            <div className='mobile-navbar'>
                <div><h2><span style={{ color: "tan" }}>DIGI</span><span style={{ color: "chocolate" }}>PPLUS</span></h2></div>
                <div><h3 onClick={() => setShowMenu(!showmenu)}><i class="fa-solid fa-bars"></i></h3></div>
            </div>

            {showmenu && <div className='mobile-menu'>
                <div className='left-menu1'>
                    <h3><i class="fa-solid fa-house"></i> Home</h3>
                    <h3><i class="fa-solid fa-user"></i> Profile</h3>
                    <h3><i class="fa-solid fa-message"></i> Digi Chat</h3>
                    <h3><i class="fa-solid fa-clock"></i> Apply For Job</h3>
                    <h3><i class="fa-solid fa-clipboard-list"></i> Certificate</h3>
                </div>

                <div className='left-menu2'>
                    <h3><i class="fa-solid fa-gear"></i> Setting</h3>
                    <h3><i class="fa-solid fa-circle-exclamation"></i> Support</h3>
                    <h3><i class="fa-solid fa-shield"></i> Privacy</h3>
                </div>
            </div>}

        </>


    )
}

export default NavbarTop