import react from "react";
import { useLocation } from "react-router-dom";

export const useURLQueryParameters = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
};
