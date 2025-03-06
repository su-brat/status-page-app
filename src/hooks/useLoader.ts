import { useCallback, useState } from "react";

export default function useLoader(defaultVal: boolean) {
    const [isLoading, setIsLoading] = useState(defaultVal);
    const startLoading = useCallback(() => setIsLoading(true), [setIsLoading]);
    const stopLoading = useCallback(() => setIsLoading(false), [setIsLoading]);

    return { isLoading, startLoading, stopLoading };
}
