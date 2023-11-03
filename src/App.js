function App() {
  function handleClick(e) {
    e.preventDefault();
    window.location.href = "https://www.naver.com";
  }

  // a 태그를 클릭시 네이버로 이동 시키기
  // preventDefault를 사용 하여 이동 시켜보기
  return (
    <>
      <a href="https://www.daum.net" onClick={handleClick}>
        다음으로 이동
      </a>
    </>
  );
}

export default App;
