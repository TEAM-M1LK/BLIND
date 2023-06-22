import React from "react";
import * as S from "./WriteLayout.style";
import { child, getDatabase, push, ref, update } from "firebase/database";
import categories from "data/category";
import Header from "components/header/Header";

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
  const db = getDatabase();
  const [category, setCategory] = React.useState("블라블라");
  const [state, dispatch] = React.useReducer(reducer, {
    title: "",
    contents: "",
    company: "",
    author: "",
    comments: [],
    date: new Date(),
    like: 0,
    view: 0,
  });

  const onCreatePost = () => {
    const newPostKey = push(child(ref(db), "article")).key;
    const updates: { [key: string]: any } = {};
    updates["/article/" + newPostKey] = {
      key: newPostKey,
      category: category,
      ...state,
    };

    return update(ref(db), updates);
  };

  return (
    <>
      <Header />
      <S.WriteLayout>
        <input
          onChange={(e) => dispatch(e.target)}
          name="title"
          placeholder="제목"
        />
        <input
          onChange={(e) => dispatch(e.target)}
          name="contents"
          placeholder="내용"
        />
        <div>
          <span>카테고리</span>
          <select onChange={(e) => setCategory(e.target.value)} name="category">
            {categories.map(({ name }) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <input
          onChange={(e) => dispatch(e.target)}
          name="company"
          placeholder="회사명"
        />
        <input
          onChange={(e) => dispatch(e.target)}
          name="author"
          placeholder="작성자"
        />
        <button onClick={onCreatePost}>글 생성</button>
      </S.WriteLayout>
    </>
  );
};

export default WriteLayout;
