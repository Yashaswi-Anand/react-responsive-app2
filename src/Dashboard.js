import React from 'react'
import './Dashboard.css'

function Dashboard() {
    return (
        <div>
            <div className='sidebar'>
                <h1 style={{ 'marginLeft': '10%' }}><i class="fa-solid fa-user"></i> Digipplus</h1>
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
            </div>

            <div className='content'>
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

                <div className='bg'>



                    {/* Main content */}
                    <div className='main-content'>
                        {/* Projects */}
                        <div>
                            <h2>Your Active Projects</h2>

                            <div className='flex'>
                                <div className='item item-data'>
                                    <div style={{ 'padding': '0.5rem' }}>
                                        <h4>Project1</h4>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Pulvinar
                                            nisl ipsum morbi diam scelerisque
                                            pulvinar elementum, viverra.</p>
                                        <div style={{ textAlign: 'end' }}>
                                            <div><i class="fa-solid fa-star"></i> &nbsp;
                                                <i class="fa-solid fa-eye"></i> &nbsp;
                                                <i class="fa-solid fa-code-branch"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item item-data'>
                                    <div style={{ 'padding': '0.5rem' }}>
                                        <h4>Project2</h4>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Pulvinar
                                            nisl ipsum morbi diam scelerisque
                                            pulvinar elementum, viverra.</p>
                                        <div style={{ textAlign: 'end' }}>
                                            <div><i class="fa-solid fa-star"></i> &nbsp;
                                                <i class="fa-solid fa-eye"></i> &nbsp;
                                                <i class="fa-solid fa-code-branch"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Internship */}
                        <div>
                            <h2>Current Open Internship</h2>

                            <div className='flex'>
                                <div className='item item-data'>
                                    <div style={{ 'padding': '0.5rem' }}>
                                        <h4>Internship1</h4>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Pulvinar
                                            nisl ipsum morbi diam scelerisque
                                            pulvinar elementum, viverra.</p>
                                        <div style={{ textAlign: 'end' }}>
                                            <div><i class="fa-solid fa-star"></i> &nbsp;
                                                <i class="fa-solid fa-eye"></i> &nbsp;
                                                <i class="fa-solid fa-code-branch"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item item-data'>
                                    <div style={{ 'padding': '0.5rem' }}>
                                        <h4>Internship2</h4>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Pulvinar
                                            nisl ipsum morbi diam scelerisque
                                            pulvinar elementum, viverra.</p>
                                        <div style={{ textAlign: 'end' }}>
                                            <div><i class="fa-solid fa-star"></i> &nbsp;
                                                <i class="fa-solid fa-eye"></i> &nbsp;
                                                <i class="fa-solid fa-code-branch"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Role and Permission */}
                        <div>
                            <h2>Your Role and Permission</h2>

                            <div className='flex'>
                                <div className='item item-data'>
                                    <div style={{ 'padding': '0.5rem' }}>
                                        <h4>Role</h4>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Pulvinar
                                            nisl ipsum morbi diam scelerisque
                                            pulvinar elementum, viverra.</p>
                                        <div style={{ textAlign: 'end' }}>
                                            <div><i class="fa-solid fa-star"></i> &nbsp;
                                                <i class="fa-solid fa-eye"></i> &nbsp;
                                                <i class="fa-solid fa-code-branch"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item item-data'>
                                    <div style={{ 'padding': '0.5rem' }}>
                                        <h4>Permission</h4>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Pulvinar
                                            nisl ipsum morbi diam scelerisque
                                            pulvinar elementum, viverra.</p>
                                        <div style={{ textAlign: 'end' }}>
                                            <div><i class="fa-solid fa-star"></i> &nbsp;
                                                <i class="fa-solid fa-eye"></i> &nbsp;
                                                <i class="fa-solid fa-code-branch"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Right side bar */}
                    <div className='right-side'>
                        <div style={{ 'padding': '0.5rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <h2>Announcements</h2>
                            <div className='box-shadow'>
                                <h5>Site Maintenance</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                <hr />
                                <h5>Community Share day</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                                <hr />
                                <h5>Updated Privacy Policy</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>

                        <div style={{ 'padding': '0.5rem' }}>
                            <h2>Current Activity</h2>
                            <div className='box-shadow'>

                                <div className='user-activity'>
                                    <div style={{ width: '10%', display: 'grid', placeItems: 'center' }}><i class="fa-solid fa-user"></i> </div>
                                    <div style={style1}>
                                        <span><b>User1</b></span>
                                        <span>User1 done something.</span>
                                    </div>
                                </div>


                                <div className='user-activity'>
                                    <div style={{ width: '10%', display: 'grid', placeItems: 'center' }}><i class="fa-solid fa-user"></i> </div>
                                    <div style={style1}>
                                        <span><b>User1</b></span>
                                        <span>User1 done something.</span>
                                    </div>
                                </div>

                                <div className='user-activity'>
                                    <div style={{ width: '10%', display: 'grid', placeItems: 'center' }}><i class="fa-solid fa-user"></i> </div>
                                    <div style={style1}>
                                        <span><b>User1</b></span>
                                        <span>User1 done something.</span>
                                    </div>
                                </div>

                                <div className='user-activity'>
                                    <div style={{ width: '10%', display: 'grid', placeItems: 'center' }}><i class="fa-solid fa-user"></i> </div>
                                    <div style={style1}>
                                        <span><b>User1</b></span>
                                        <span>User1 done something.</span>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


const style1 = {
    width: '80%',
    display: 'flex',
    flexDirection: 'column'
}

export default Dashboard


