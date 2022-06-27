import React from 'react'
import './footer.css'

const Footer = () => {
      let d = new Date();
        let n = d.getFullYear();
    return (
        <div className="footer">
            <div className='logo_copyright'>
                    <img alt ='Easy Learning' src = 'https://easylearning.eu/wp-content/uploads/2020/11/LOGO-EASY_LEARNING_France.png' className = 'footer_logo' />
                    <div className = 'copyright'>
                    Copyright © {n} Easy Learning All Rights Reserved.
                    </div>
            </div>

        </div>
    )
}

export default Footer
