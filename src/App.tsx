import RootFolderList from "./widgets/root_folder_list";
import TopBar from "./widgets/top_bar";

function App() {
  return (
    <div id="App" className="w-full h-full flex flex-col">
      <TopBar></TopBar>
      <main className="container flex gap-4 flex-1">
        <RootFolderList></RootFolderList>
      </main>
    </div>
  );
}

export default App;
