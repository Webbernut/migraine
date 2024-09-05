export function UiModal({isOpen,isSave, recordDate, recordCause, recordPassed}){
  if(!isOpen){
    return null;
  }
  return(
    <div className="border fixed inset-0 bg-gray-400 h-80 w-80 m-auto rounded-[15px]">
      <div className="flex m-auto justify-center flex-col w-80">
        Дата:{" "}
        <input
          onChange={recordDate}
          type="date"
          className="text-black"
        />
        Причина:{" "}
        <input
          onChange={recordCause}
          className="text-black"
        />
        После чего прошла:{" "}
        <input
          onChange={recordPassed}
          className="text-black"
        />
        <button onClick={isSave}>Сохранить</button>
      </div>
    </div>
  )
}