// import React from 'react'
import React, {useState} from 'react'
import Header from './modules/Header'
import Form from './modules/Form'
import List from './modules/List';

export default function App() {
  const [display, setDisplay] = useState({
    season: "",
    category: "",
    home: 0,
    away: 0,
    day: "",
    week: "",
    setsu: 1
  });
  
  return (
    <>
      {/* ヘッダー */}
      <Header />
      {/* フォーム */}
      <Form display={display} setDisplay={setDisplay} />
      {/* テーブル(検索結果の表示) */}
      <List searchResult={display} />
    </>
  );
}