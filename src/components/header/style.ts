import styled, { css } from "styled-components";

export const headerservice = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #222;
  color: white;
  align-items: center;
  padding-left: 30px;
  font-size: 14px;
`;
export const headerText = styled.div`
  margin-left: 5px;
`;
export const PopupLogoImage = styled.img`
  width: 20px;
  height: 220px;
  padding-right: 10px;
`;

export const headerContainer = styled.div`
  width: 76vw;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const header = styled.div`
  width: 100vw;
  margin-top: 6px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;
export const LogoImg = styled.img`
  width: 160px;
  height: 40px;
`;
export const tabList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  a {
    text-decoration: none;
    color: #222;
  }
  ul {
    list-style: none;
    margin-left: 46px;
    font-size: 20px;
  }
`;

export const LI = styled.div<{ select: number }>`
  display: inline-block;
  margin-right: 26px;
  ${({ select }) =>
    select === 1
      ? css`
          font-weight: 700;
        `
      : ""};
`;

export const tabTxt = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  margin-left: auto;

  p {
    display: inline-block;
  }
  button {
    width: 82px;
    height: 40px;
    border: none;
    font-size: 14px;
    margin-left: 10px;
  }
  .write {
    background-color: #da3238;
    color: white;
  }
  .login {
    background-color: white;
    color: #222;
    border: 1px solid #d4d4d4;
  }
`;
export const tabImg = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 2px;
  margin-right: 6px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
