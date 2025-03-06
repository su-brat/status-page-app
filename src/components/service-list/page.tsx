import { useEffect, useState } from "react";
import { ServiceList, columns } from "./columns";
import { DataTable } from "./data-table";
import { getData } from "./data";
import useLoader from "@/hooks/useLoader";
import Loader from "../ui/circle-loader";

export default function Page() {
    const [data, setData] = useState<ServiceList[]>([]);
    const { isLoading, startLoading, stopLoading } = useLoader(false);

    useEffect(() => {
        async function init() {
            startLoading();
            const apiResponse = await getData();
            setData(apiResponse);
            stopLoading();
        }
        init();
    }, []);

    return (
        <div className="mx-4">
            {isLoading ? (
                <Loader />
            ) : (
                <DataTable columns={columns} data={data} />
            )}
        </div>
    );
}
