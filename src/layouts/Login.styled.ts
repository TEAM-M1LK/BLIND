import styled from "styled-components";

export const LoginLayout = styled.div`
    width: 100vw;
    height:100vh;
`

export const logo = styled.div`
    margin-top: 70px;
    width:100%;
`

export const BlindIcon = styled.img`
    display: block;
    width:70px;
    height:70px;
    margin: auto;
`

export const LogoIcon = styled.img`
    display: block;
    padding-top:10px;
    width:80px;
    height: fit-content;
    margin: auto;
`

export const login = styled.div`
    padding-top:10px;
    display: block;
    width:50%;
    height:100px;
    margin:auto;
    span {
        color:#94969b;
        font-size: 14px;
 }

`

export const Input = styled.div`
    width: 100%;
    height:50px;
    background-color: #f8f8f8;
    border:1px solid #d4d4d4;
    margin-bottom:15px;
    input {
        border:none;
        padding-left:10px;
        font-size: 14px;
        width:100%;
        height:100%;
        background:none;
    }
    input::placeholder {
        color:#666;
        font-size: 14px;
    }
    input:focus {
        background-color: #eee;
    }

`

 export const LoginBtn = styled.div`
    display: flex;
    margin-top: 15px;
    width: 100%;
    height:50px;
    justify-content: center;
    align-items: center;
    background-color: #DB3239;
    span {
        font-size:18px;
        font-weight: bold;
        color:white;
    }
 `
