import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useQuery(defaultQuery: object) {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState(defaultQuery);

  useEffect(() => {
    const searchParams = new URLSearchParams();

    Object.keys(query).forEach((key) => {
      const value = query[key as keyof Object];
      if (typeof value === "string") {
        searchParams.append(key, value);
      }
    });
    navigate(location.pathname, { state: searchParams.toString() });
  }, [query, location.pathname]);

  return { query, setQuery };
}
