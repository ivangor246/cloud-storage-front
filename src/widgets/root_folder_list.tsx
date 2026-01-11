function RootFolderList() {
  const folders: Record<string, string> = generateFolders(30);

  return (
    <div id="FolderList" className="w-1/3 my-border-r">
      <h2 className="text-lg">Корневые папки</h2>
      <ol className="py-4">
        {Object.entries(folders).map(([id, name], idx) => (
          <li key={id} className="flex items-start gap-1">
            <span className="select-none opacity-50 min-w-8 text-left">
              {idx + 1}
            </span>
            <span>{name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RootFolderList;

const generateFolders = (count: number) => {
  const folders: Record<string, string> = {};
  const chars: string = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 1; i <= count; i++) {
    const randChar = chars[Math.floor(Math.random() * chars.length)];
    folders[String(i)] = `${randChar}_folder_${i}`;
  }

  return folders;
};
