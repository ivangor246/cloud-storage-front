import FolderList from "./widgets/folder_list";
import TopBar from "./widgets/top_bar";

function App() {
  return (
    <div id="App" className="w-full h-full">
      <TopBar></TopBar>
      <main className="container flex gap-4">
        <FolderList></FolderList>
      </main>
    </div>
  );
}

export default App;
