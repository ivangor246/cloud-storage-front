import RootFolderList from "./widgets/root_folder_list";
import TopBar from "./widgets/top_bar";
import ChildFiles from "./widgets/child_files";

export default function App() {
  return (
    <div id="App" className="w-full h-full flex flex-col">
      <TopBar></TopBar>
      <main className="pt-4 container flex flex-1">
        <RootFolderList></RootFolderList>
        <div className="flex flex-1">
          <ChildFiles></ChildFiles>
        </div>
      </main>
    </div>
  );
}
