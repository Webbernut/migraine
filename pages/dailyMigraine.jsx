import { IndexDailyMigraine } from "../components/dailyMigraine"

export default function DailyMigraineHome() {
  return(
    <IndexDailyMigraine/>
  )
}





// чтобы удалить элемент из массива setValue((lastValue)=> [...lastValue].filter(item => item.id != value.id))
//сортировка по дате setValue((lastValue)=> [...lastValue].sort((a,b)=> new Date(a.date) - new Date(b.date)))