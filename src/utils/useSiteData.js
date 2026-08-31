import { useEffect, useState } from "react";
import { fetchClasses, fetchSchools } from "./excelData";

/**
 * Loads classes.xlsx and schools.xlsx from the linked URLs (see
 * excelData.js) on mount. Returns { classes, schools, loading, error }.
 */
export function useSiteData() {
  const [classes, setClasses] = useState([]);
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const [classRows, schoolRows] = await Promise.all([
          fetchClasses(),
          fetchSchools(),
        ]);
        if (!cancelled) {
          setClasses(classRows);
          setSchools(schoolRows);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load site data.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { classes, schools, loading, error };
}
