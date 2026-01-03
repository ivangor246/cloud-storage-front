function FolderList() {
  const folders: Record<string, string> = generateFolders(30);

  return (
    <div id="FolderList" className="max-w-1/4 w-full my-border-r">
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

export default FolderList;

const generateFolders = (count: number) => {
  const folders: Record<string, string> = {};
  const chars: string = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 1; i <= count; i++) {
    const randChar = chars[Math.floor(Math.random() * chars.length)];
    folders[String(i)] = `${randChar}_folder_${i}`;
  }

  return folders;
};
