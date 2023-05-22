import styled from 'styled-components';


export const headerservice = styled.div`
    display:flex;
    width:100%;
    height:40px;
    background-color:#222;
    color:white;
    align-items:center;
    padding-left : 30px;
    font-size:14px;
`
export const headerText = styled.div`
    margin-left:5px;
`
export const PopupLogoImage = styled.img`
    width: 20px;
    height: 220px;
    padding-right:10px;
`

export const header = styled.div`
    padding:0 20px;
    max-width: 1180px;
    height:80px;
    margin:0 40px;
    display: flex;
    align-items: center;
`
export const LogoImg = styled.img`
    width:160px;
    height:40px;
`
export const tabList = styled.div`
    a {
        text-decoration: none;
        color:#222;
    }
    ul{
    list-style: none;
    margin-left:30px;
    font-size:20px;
    }
    li {
        display: inline-block;
        margin-right:50px;
    }
`
export const tabTxt = styled.div`
    display: flex;
    right:20px;
    top:60px;
    position:fixed;
    align-items: center;
    padding:4px;
    p {
        display: inline-block;
    }
    button {
        width:82px;
        height:40px;
        border:none;
        font-size:14px;
        margin-left:10px;
    }
    .write {
        background-color: #da3238;
        color:white;
    }
    .login {
        background-color:white;
        color:#222;
        border:1px solid #d4d4d4;
    }
`
export const tabImg = styled.img`
width:16px;
height:16px;
margin-right: 6px;
margin-top:-1px;
margin-bottom:1px;
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        display:flex;
        align-items: center;
    }

`