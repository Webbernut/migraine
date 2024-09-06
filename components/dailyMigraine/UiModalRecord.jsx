export function UiModalRecord({
  isOpenRecord,
  isSave,
  recordDate,
  recordCause,
  recordPassed,
}) {
  if (!isOpenRecord) {
    return null;
  }
  return (
    <div className="border fixed inset-0 bg-slate-800 text-white h-max w-max m-auto rounded-[15px] text-center p-4 text-xl">
      <div className="flex m-auto justify-center flex-col w-80">
        Дата: <input onChange={recordDate} type="date" className="text-black rounded-full py-1 text-center" />
        Причина: <input onChange={recordCause} className="text-black rounded-full py-1 text-center" />
        После чего прошла:{" "}
        <input onChange={recordPassed} className="text-black rounded-full py-1 text-center" />
        <button onClick={isSave} className="mt-4 w-min m-auto">Сохранить</button>
      </div>
    </div>
  );
}
