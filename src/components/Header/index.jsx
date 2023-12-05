import React from 'react';

export default function Header() {
    return (
        <div>
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex m-5 p-3 justify-content-left align-items-center h-75'>
                    <div className='text-white'>
                        <h1 className='m-1'>Hi! I'm <u>Nhi Hoang</u> </h1>
                        <h4 className='m-1'>It's nice to meet you!</h4>
                        <h5 className='m-1'>Take a <b class="animate-flicker">click </b>around</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}