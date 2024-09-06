import { DailyMigraine } from "./daily-migraine";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { UiModalRecord } from "./UiModalRecord";
import { Record } from "./record";

export function IndexDailyMigraine() {
  const [record, setRecord] = useLocalStorageState("records", {
    defaultValue: [],
  });
  const [isOpenRecord, setIsOpenRecord] = useState(false);
  const [recordData, setRecordData] = useState({
    id: 0,
    data: new Date(),
    cause: "",
    passed: "",
  });
  return (
    <>
      <DailyMigraine
        isOpen={() => setIsOpenRecord(true)}
        recordView={record.map((recordItem, index) => {
          return (
            <Record
              key={index}
              getDay={String(new Date(recordItem.data).getDate()).padStart(2,"0")}
              getMonth={String(new Date(recordItem.data).getMonth() + 1).padStart(2, "0")}
              getYear={new Date(recordItem.data).getFullYear()}
              isRemove={() => {
                setRecord((lastRecord) =>
                  [...lastRecord].filter((item) => item.id != recordItem.id)
                );
              }}
              recordItem={recordItem}
              isClick={()=>console.log(recordItem.id)}
            />
          );
        })}/>
      <UiModalRecord
        isOpenRecord={isOpenRecord}
        isSave={() => {
          if (!recordData.cause || !recordData.passed) {
            return;
          }
          setRecord((lastRecord) => {
            return [
              ...lastRecord,
              {
                id: lastRecord.length + 1 ?? 0,
                data: recordData.data,
                cause: recordData.cause,
                passed: recordData.passed,
              },
            ].sort((a, b) => {
              return new Date(b.data) - new Date(a.data);
            });
          });
          setRecordData((lastRecordData)=> {
            return {...lastRecordData, data: new Date()}
          });
          setIsOpenRecord(false);
        }}
        recordDate={(e) =>
          setRecordData((lastRecordData) => {
            return { ...lastRecordData, data: e.target.value };
          })
        }
        recordCause={(e) => {
          setRecordData((lastRecordData) => {
            return { ...lastRecordData, cause: e.target.value };
          });
        }}
        recordPassed={(e) => {
          setRecordData((lastRecordData) => {
            return { ...lastRecordData, passed: e.target.value };
          });
        }}
      />
    </>
  );
}
