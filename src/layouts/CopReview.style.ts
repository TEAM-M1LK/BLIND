import styled from 'styled-components';

export const container = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    margin:0;
    text-align: center;
`

export const topContainer = styled.div`
    width:100vw;
    height:202px;
    padding-top:60px;
    padding-bottom:120px;
    margin: 0;
    text-align: center;
`
export const title = styled.div`
    font-weight: 700;
    font-size:30px;
`
export const content = styled.div`
    font-size:20px;
    margin-top:7px;
    color:#222;
`
export const searchbar = styled.div`
    display: flex;
    margin:auto;
    margin-top:39px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width:640px; 
    box-sizing: border-box;
    height:50px;
    border-radius: 27px;
    border:1px solid rgb(118, 118, 118);
    line-height: 1.25em;
    box-sizing: border-box;
    input {
        border-radius: 27px;
        border: none;
        padding-right: 26px;
        width: 100%;
        height: 100%;
    }
    input::placeholder{
        color:#bbc0c5;;
        font-size: 16px;
        font-weight: 400;
    }
`
export const searchimg = styled.img`
    width:20px;
    height:20px;
    margin:auto;
    padding:0 15px;
`
export const application = styled.div`
    font-size: 14px;
    margin-top: 30px;
    button {
        border: none;
        background: none;
        text-decoration: underline;
        cursor: pointer;
    }
`

export const Review = styled.div`
    display:flex;
    justify-content: center;
    width:100vw;
    height:300px;
    background-color: #ebf7fa;
`

export const reContent = styled.div`
    width:80vw;
    box-sizing: border-box;
    position: absolute;
    padding:0 6%;
    padding-top:40px;
    h3 {
        font-size: 24px;
        font-weight: bold;
        color:#222;
    }
    p {
        margin-top:11px;
        color: #94969b;
        line-height: 1.33em;
        font-size: 16px;
    }
    a{
        display: flex;
        margin-top: 20px;
        justify-content: center;
        border-radius:4px;
        align-items: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        width: 240px;
        height: 48px;
        background-color: #37acc9;
    }
`

export const reImg = styled.img`
    width: 600px;
    top:-254px;;
    position: relative;
    padding-left:35%;
`

export const popular = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
`

export const popularbox = styled.div`
    margin: 0 58px;
    padding-bottom:47px;
    width:69vw;
    h3 {
        padding-top: 60px;
        font-size: 22px;
        font-weight: bold;
        color:#222;
    }
`

export const coperation = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;
    margin-top:20px;
    gap:13px;
`

export const popularCoperation = styled.div`
    width:319px;
    height: 109px;
    border: 1px solid #dfe1e4;
    border-radius: 4px;
    display: flex;
`

export const coperationImg = styled.img`
    width:40px;
    height:40px;
    padding:20px;
    padding-bottom: 0;
`
export const copReview = styled.div`
    ul{
        font-size: 14px;
        display: flex;
        list-style:none;
        color:#37acc9;
        gap:15px;
    }
`
export const coperationName = styled.div`
    font-size: 18px;
    padding-top: 15px;
`
export const coperationScore = styled.div`
    display: flex;
    margin-top: 3px;
    align-items: center;
    p { 
        padding-left:10px;
        font-size: 14px;
        color:#222;
    }

`
export const scoreStar = styled.img`
    width:15px;
    height:15px;
`