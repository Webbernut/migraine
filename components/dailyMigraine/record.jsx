export function Record({ getDay, getMonth, getYear, isRemove, recordItem }) {
  return (
    <div className="flex flex-col gap-3 p-4 bg-slate-800 rounded-[15px]">
      <div>
        Дата: {getDay}:{getMonth}:{getYear}
      </div>
      <div>
        Причина:{" "}
        <span className="text-wrap break-words">{recordItem.cause}</span>
      </div>
      <div>
        После чего прошла:{" "}
        <span className="text-wrap break-words">{recordItem.passed}</span>
      </div>
      <button onClick={isRemove} className="px-3 border rounded-full w-40 m-auto">Удалить</button>
    </div>
  );
}
