import React from 'react'

function ContentArea() {
    return (
        <div className='content-container'>
            <video src='/public/posing-video.mp4'
                autoPlay loop muted />
                <h1>BE STRONG! BE BOLD! SHOW PRIDE!</h1>
            <p>Lorem Ipsum is simply dummy
                 text of the printing and 
                 typesetting industry. 
                     essentially unchanged.</p>
                     <button className='btns' 
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            >
                                Fitness junkies enter Here
                            </button>

        </div>
    )
}

export default ContentArea;
