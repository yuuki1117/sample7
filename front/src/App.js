import { useEffect, useState, useContext, useRef } from "react";
import "./App.css";
import "./index";
import InfoContext from "./index";
import TOdolist from "./component/TOdolist";

function App() {
  const [count, setcount] = useState(0);
  const info = useContext(InfoContext);
  const ref = useRef();

  const handleClick = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    console.log("hello");
  }, [count]);

  const handleuseRef = () => {
    console.log(ref.current.value);
  };
  return (
    <div className="App">
      <h1>Usestate</h1>
      <button onClick={handleClick}>ボタン</button>
      <p>{count}</p>
      <hr />
      <h1>useContext</h1>
      <p>{info.name}</p>
      <p>{info.age}</p>
      <hr />
      <h1>useref</h1>
      <input type="text" ref={ref} />
      <button onClick={handleuseRef}>useref</button>
      <TOdolist
        title={"タイトルです"}
        content={"コンテンツの中身です"}
        order={3}
      />
      <TOdolist
        title={"タイトルです2"}
        content={"コンテンツの中身です2"}
        order={2}
      />
      <TOdolist
        title={"タイトルです3"}
        content={"コンテンツの中身です3"}
        order={1}
      />
      <input type="text"></input>
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク</div>
    </div>
  );
}

export default App;
