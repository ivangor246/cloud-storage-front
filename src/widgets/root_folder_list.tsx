import KeyValueList from "./key_value_list";

export default function RootFolderList() {
  const folders: Record<string, string> = generateFolders(30);

  return (
    <div id="RootFolderList" className="w-1/3 my-border-r pt-4 overflow-hidden">
      <h2>Корневые папки</h2>
      <KeyValueList items={folders}></KeyValueList>
    </div>
  );
}

const generateFolders = (count: number) => {
  const folders: Record<string, string> = {};
  const chars = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 1; i <= count; i++) {
    const lettersCount = getRandomInt(1, 20);
    let randomPrefix = "";
    for (let j = 0; j < lettersCount; j++) {
      const randChar = chars[Math.floor(Math.random() * chars.length)];
      randomPrefix += randChar;
    }
    folders[String(i)] = `${randomPrefix}_folder_${i}`;
  }

  return folders;
};

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
