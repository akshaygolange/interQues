import React, { useCallback, useMemo, useState } from "react";
import debounce from "../hook/debounce";

const DebounceWithApi = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(
    async (value) => {
      const trimmed = value.trim();
      if (!trimmed) {
        setResults([]);
        setError(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(
            trimmed
          )}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [] // no external deps; if you add deps, include them here
  );

  const debouncedSearch = useMemo(
    () => debounce(search, 1000),
    [search]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {results.map(({ title, id }) => (
          <li key={id}>
            <strong>{title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebounceWithApi;