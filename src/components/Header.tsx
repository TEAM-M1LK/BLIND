import React from 'react'
import * as hs from './style'
import Share from 'assets/share.svg'


const Header = () => {
    return (
        <div>
            <hs.header className="service">
                <hs.PopupLogoImage src={Share} />
                <b>Blind hub </b>
                <hs.headerText>기업 서비스 {'>'}</hs.headerText>
            </hs.header>

        </div>
    )
}

export default Header;