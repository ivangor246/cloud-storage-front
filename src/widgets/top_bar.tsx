function TopBar() {
  return (
    <div id="TopBar" className="my-border-b py-2">
      <div className="container flex gap-4 align-middle">
        <button className="my-ac-btn">Создать папку</button>
        <button className="my-ac-btn">Загрузить файл</button>
      </div>
    </div>
  );
}

export default TopBar;
