import { useEffect, useState } from "react";
import { ServiceList, columns } from "./columns";
import { DataTable } from "./data-table";
import { getData } from "./data";

export default function Page() {
    const [data, setData] = useState<ServiceList[]>([]);

    useEffect(() => {
        async function init() {
            const apiResponse = await getData();
            setData(apiResponse);
        }
        init();
    }, []);

    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
