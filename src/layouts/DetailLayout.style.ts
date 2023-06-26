import styled from "styled-components";

export const container = styled.div`
  padding-top: 40px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const post = styled.div`
  width: 51vw;
  height: 100vh;
  position: relative;
`;

export const side = styled.div`
  width: 20vw;
  display: flex;
  margin-left: 64px;
  flex-direction: column;
`;

export const titleContainer = styled.div`
  width: 100%;
  height: 130px;
  padding-bottom: 29px;
  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const asrrowImg = styled.img`
  width: 11px;
  height: 11px;
  margin: 0 4px;
`;

export const title = styled.div`
  margin-top: 15px;
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  width: 100%;
`;

export const user = styled.div`
  margin-top: 15px;
  font-size: 14px;
  span {
    font-weight: normal;
  }
`;

export const postinfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  span {
    margin-right: 14px;
    font-size: 14px;
    color: #94969b;
  }
`;

export const postIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 3px;
`;

export const Icon = styled.div`
  position: absolute;
  right: 0;
`;

export const IconImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const content = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 30px;
  border-top: 1px solid #eee;
  p {
    font-size: 16px;
  }
`;

export const bottomInfo = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 43px;
  display: flex;
  align-items: center;
  span {
    margin-right: 19px;
  }
  margin-bottom: 40px;
`;
export const bottomInfoIcon = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 4px;
`;

export const bottomIcon = styled.div`
  right: 0;
  position: absolute;
`;

export const bottomIconImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const commentContainer = styled.div`
  padding-top: 16px;
  border-top: solid 1px #eee;
  h3 {
    font-size: 16px;
  }
`;

export const commentBox = styled.div`
  margin-top: 21px;
  border: 1px solid #d4d4d4;
  width: 100%;
  height: fit-content;
  min-height: 63px;
  align-items: center;
  display: flex;
  input {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
  }
  input::placeholder {
    color: #222;
    font-size: 16px;
  }

  button {
    width: 90px;
    height: 36px;
    cursor: pointer;
    background-color: #da3238;
    margin-right: 16px;
    border: none;
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
`;
export const photo = styled.img`
  width: 30px;
  height: 24px;
  margin: 18px;
`;

export const comment = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 115px;
  border-bottom: 1px solid #eee;
`;

export const Recomment = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 115px;
  border-bottom: 1px solid #eee;
  background-color: #f8f8f8;
`;

export const commentUser = styled.div`
  padding-top: 21px;
  margin-left: 20px;
  font-size: 12px;
`;

export const commentContent = styled.div`
  margin-left: 20px;
  margin-top: 5px;
  font-size: 15px;
`;

export const commentInfo = styled.div`
  margin-left: 20px;
  margin-top: 13px;
  font-size: 12px;
  display: flex;
  align-items: center;
  span {
    color: #94969b;
    margin-right: 14px;
  }
`;

export const commentInfoIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 3px;
`;

export const commentMore = styled.img`
  width: 16px;
  height: 16px;
  right: 24px;
  position: absolute;
`;

export const recommendPost = styled.div`
  width: 84%;
  height: 360px;
  padding: 22px;
  border: 1px solid #eee;
  h1 {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

export const postTitle = styled.div`
  display: flex;
  margin-top: 11px;
  align-items: center;
  font-size: 14px;
`;

export const postTitleDot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: red;
  margin-right: 9px;
`;

export const Banner = styled.img`
  width: 100%;
  height: auto;
`;
