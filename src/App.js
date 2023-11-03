function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log("다른일을 시킴");
  }

  function handleSubmit(e) {
    // 기본 기능 취소
    e.preventDefault();
    console.log("다른일 시키기");
  }
  return (
    <div>
      <a href="https://www.naver.com" onClick={handleClick}>
        네이버
      </a>
      <div>
        <form action="https://search.daum.net/search" onSubmit={handleSubmit}>
          <input type="text" name="q" />
          <button>검색</button>
        </form>
      </div>
    </div>
  );
}

export default App;
