import { Skeleton } from "./skeleton";

function Loader() {
    return (
        <div className="my-4 flex justify-center">
            <div className="flex-col">
                <Skeleton className="h-25 w-25 rounded-full my-4" />
                <div className="px-5 text-neutral-500">Loading</div>
            </div>
        </div>
    );
}

export default Loader;
