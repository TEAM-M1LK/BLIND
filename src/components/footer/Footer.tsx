import React from 'react'
import * as fs from './style';
import apple from '../../assets/apple.png';
import playstore from '../../assets/playstore.png';

const Footer = () => {
    return (
        <div>
            <fs.footer>
                <fs.container>
                    <fs.info>
                        <fs.footerbar>
                        <a href="">서비스소개</a>
                        <a href="">이용약관</a>
                        <a href="">디렉토리</a>
                        <a href="">개인정보 처리방침</a>
                        <a href=""><strong>Blind Hub</strong> 기업서비스</a>
                        <a href="">신고가이드</a>
                        </fs.footerbar>
                        <p className='hire-report'>직업정보제공사업 신고번호 : J1200020190013</p>
                        <p className='copy'>© 2020 Teamblind. Inc</p>
                    </fs.info>
                    <fs.button>
                        <a href="">
                            <fs.download_img src={apple}></fs.download_img>
                            APP STORE
                        </a>
                        <a href="">
                            <fs.download_img src={playstore}></fs.download_img>
                            GOOGLE PLAY
                        </a>
                    </fs.button>
                </fs.container>
            </fs.footer>
        </div>
    )
}

export default Footer;
