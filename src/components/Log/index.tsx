import { useEffect } from "react";
import { useTodoList } from "../../hooks/useTodoList";
import { LOG_STATUS, STATUS_TO_COLOR } from "../../constants/log";

function Log() {
    const { logList, getLogList } = useTodoList();

    useEffect(() => {
        getLogList();
    }, []);

    return (
        <div className="w-[500px] h-[600px] py-12 px-10 rounded-3xl shadow-lg flex flex-col items-center gap-10">
            <header className="text-5xl font-bold font-Cafe24Meongi">Log</header>
            <ul className="w-96 flex flex-col gap-4 overflow-auto">
                {logList
                    .slice()
                    .reverse()
                    .map((log: any) => (
                        <li key={log.id} className="flex gap-2 items-center">
                            <span
                                className={`w-10 bg-${STATUS_TO_COLOR[log.status]}-100 text-${STATUS_TO_COLOR[log.status]}-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center justify-center`}
                            >
                                {log.status}
                            </span>
                            <p className="max-w-80 truncate">
                                {log.status === LOG_STATUS.edit && <>{log.prevDescription} → </>}
                                {log.description}
                            </p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Log;
