

export function DailyMigraine({isOpen, recordView}){
  
  return (
    <div >
      <div className="text-6xl">
        Дневник <br /> Мигрени
      </div>
      <button onClick={isOpen}>Добавить </button>
      <div className="overflow-auto h-96  m-auto w-80">
        {recordView}
      </div>
    </div>
  );
}


