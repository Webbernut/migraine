export function Record({getDay, getMonth, getYear, isRemove, recordItem}) {
  return (
    <div className="border p-4 ">
      <div>
        Дата: {getDay}:
        {getMonth}:{getYear}
      </div>
      <div>
        Причина:{" "}
        <span className="text-wrap break-words">{recordItem.cause}</span>
      </div>
      <div>
        После чего прошла:{" "}
        <span className="text-wrap break-words">{recordItem.passed}</span>
      </div>
      <button
        onClick={isRemove}>
        Удалить
      </button>
    </div>
  );
}
