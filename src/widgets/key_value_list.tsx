export default function KeyValueList({ items }: KeyValueListProps) {
  const sortedEntries = Object.entries(items).sort((a, b) =>
    a[1].localeCompare(b[1])
  );

  return (
    <div id="KeyValueList">
      <ol className="py-2">
        {sortedEntries.map(([key, value], idx) => (
          <li key={key} className="flex items-start gap-1">
            <span className="select-none opacity-50 min-w-8 text-left">
              {idx + 1}
            </span>
            <span>{value}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

type KeyValueListProps = {
  items: Record<string, string>;
};
