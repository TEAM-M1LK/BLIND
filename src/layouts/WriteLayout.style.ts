import styled from "styled-components";

export const WriteLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const post = styled.div`
  margin-top: 30px;
  padding-left: 2%;
  width: 80%;
  height: fit-content;
  min-height: 80%;
  border: 1px solid #d4d4d4;
`;
export const asrrowImg = styled.img`
  width: 11px;
  height: 11px;
  margin: 0 4px;
`;

export const category = styled.div`
  padding-top: 10px;
  span {
    font-size: 14px;
    font-weight: bold;
  }
  select {
    border: 1px solid #d4d4d4;
    font-size: 14px;
  }
`;

export const title = styled.div`
  padding-bottom: 10px;
  width: 98%;
  height: 40px;
  margin-top: 15px;
  align-items: center;
  input {
    border: none;
    border-bottom: 1px solid #d4d4d4;
    height: 100%;
    width: 100%;
    font-size: 24px;
    font-weight: bold;
  }
  input::placeholder {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const content = styled.div`
  width: 98%;
  height: 70%;
  textarea {
    width: 100%;
    height: fit-content;
    min-height: 100%;
    font-size: 16px;
    padding-top: 8px;
    padding-left: 10px;
    border: none;
    border-bottom: 1px solid #d4d4d4;
    resize: none;
  }
  textarea::placeholder {
    font-size: 16px;
  }
`;
export const info = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;

  input {
    margin-right: 20px;
    width: fit-content;
    font-size: 14px;
    border: none;
  }
  input::placeholder {
    font-size: 14px;
  }
  button {
    width: 90px;
    height: 36px;
    cursor: pointer;
    background-color: #da3238;
    margin-left: auto;
    margin-right: 16px;
    border: none;
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
`;
