import React from "react";
import * as S from "./WriteLayout.style";
import { child, getDatabase, push, ref, update } from "firebase/database";
import categories from "data/categories";
import Header from "components/header/Header";
import arrow from "../assets/arrow.svg";
import Footer from "components/footer/Footer";
import { useNavigate } from "react-router-dom";

interface reducerAction {
  name: string;
  value: string;
}

const reducer = (state: any, action: reducerAction) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const WriteLayout = () => {
  const navigate = useNavigate();
  const db = getDatabase();
  const [category, setCategory] = React.useState("블라블라");
  const [state, dispatch] = React.useReducer(reducer, {
    title: "",
    contents: "",
    company: localStorage.getItem("company"),
    author: localStorage.getItem("name"),
    comments: [],
    date: new Date(),
    like: 0,
    view: 0,
  });

  const onCreatePost = () => {
    const { title, contents } = state;
    if (!title || !contents) return alert("빈칸이 있습니다");
    const newPostKey = push(child(ref(db), "article")).key;
    const updates: { [key: string]: any } = {};
    updates["/article/" + newPostKey] = {
      key: newPostKey,
      category: category,
      ...state,
    };

    update(ref(db), updates);
    navigate("/");
  };

  React.useEffect(() => {
    if (!localStorage.getItem("id")) {
      alert("로그인 후 이용 가능합니다.");
      navigate("/login");
    }
  });

  return (
    <>
      <Header />
      <S.WriteLayout>
        <S.post>
          <S.category>
            <span>
              토픽 <S.asrrowImg src={arrow} />
            </span>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
            >
              {categories.map(({ name }) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </S.category>
          <S.title>
            <input
              onChange={(e) => dispatch(e.target)}
              name="title"
              placeholder="제목 입력"
              required
            />
          </S.title>
          <S.content>
            <textarea
              onChange={(e) => dispatch(e.target)}
              name="contents"
              placeholder="내용"
              required
            />
          </S.content>
          <S.info>
            <button onClick={onCreatePost}>글 생성</button>
          </S.info>
        </S.post>
      </S.WriteLayout>
      <Footer />
    </>
  );
};

export default WriteLayout;
