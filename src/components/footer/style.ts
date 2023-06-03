import styled from 'styled-components';

export const footer = styled.div`
    width:100vw;
    height:125px;
    transform : translateY(135vh);
    margin:0;
    margin-top:60px;
    border-top: 1px solid #d4d4d4;
`;
export const container = styled.div`
    width:76vw;
    height:80px;
    margin:auto;
    padding-top: 24px;
    padding-bottom:20px;
    display: flex;
`;
export const info = styled.div`
    max-width:100%;
    height:100%; 
    p{
        color: #bbc0c5;
        font-size: 12px;
        margin-top:8px;
    }
    .copy {
        margin-top:4px;
        font-size:14px;
    }
`
export const footerbar = styled.div`
    display: flex;
    a{
        text-decoration: none;
        color: #94969b;
        font-size: 14px;
        line-height: 35px;
        position:relative;
        padding-right: 10px;
    } 
    a:nth-child(n+2){
        padding-left:10px;
    }
    a:nth-child(n+2)::before{
        position:absolute;
        left:0;
        top:calc(50% - 5px);
        height:10px;
        width:1px;
        background-color: #d4d4d4;
        content: "";
    }
`
export const button = styled.div`
    right:12vw;
    top:30px;
    position: absolute;
    display: flex;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width:152px;
        height:44px;
        margin:0 8px;
        background-color: #f2f2f3;
        border-radius: 22px;
        line-height: 44px;
        text-align: center;
        box-sizing: border-box;
        text-decoration: none;
        color: #222;
        font-size: 12px;
    }

`
export const download_img = styled.img`
    align-items: center;
    width:18px;
    height:20px;
    margin-right:8px;
`