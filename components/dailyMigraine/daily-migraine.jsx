export function DailyMigraine({ isOpen, recordView }) {
  return (
    <div className="bg-black w-full h-screen text-white justify-center flex gap-4 flex-col">
      <div className="text-6xl text-center">
        Дневник <br /> Мигрени
      </div>
      <button onClick={isOpen} className="px-3 py-2 text-xl bg-slate-800 w-max m-auto rounded-[10px]">Добавить запись</button>
      <div className="overflow-auto h-full flex flex-col gap-3 m-auto w-80 p-2">{recordView}</div>
    </div>
  );
}
