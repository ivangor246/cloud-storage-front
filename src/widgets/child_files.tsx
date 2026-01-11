import KeyValueList from "./key_value_list";

export default function ChildFiles() {
  const files: Record<string, string> = generateFiles(20);

  return (
    <div
      id="ChildFiles"
      className="self-start flex-1 my-border-b p-4 overflow-hidden"
    >
      <h2>Файлы в папке</h2>
      <KeyValueList items={files}></KeyValueList>
    </div>
  );
}

const generateFiles = (count: number) => {
  const files: Record<string, string> = {};
  const chars = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 1; i <= count; i++) {
    const lettersCount = getRandomInt(1, 20);
    let randomPrefix = "";
    for (let j = 0; j < lettersCount; j++) {
      const randChar = chars[Math.floor(Math.random() * chars.length)];
      randomPrefix += randChar;
    }
    files[String(i)] = `${randomPrefix}_file_${i}`;
  }

  return files;
};

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
