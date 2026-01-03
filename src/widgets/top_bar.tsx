function TopBar() {
  return (
    <div id="TopBar" className="my-border-b">
      <div className="container flex gap-4 align-middle ps-4">
        <button className="my-ac-btn">Создать папку</button>
        <button className="my-ac-btn">Загрузить файл</button>
      </div>
    </div>
  );
}

export default TopBar;
