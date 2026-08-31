import * as XLSX from "xlsx";

export const CLASSES_XLSX_URL = "/data/classes.xlsx";
export const SCHOOLS_XLSX_URL = "/data/schools.xlsx";


const HEADER_MAP_CLASSES = {
  "category": "category",
  "program": "program",
  "agegroup": "ageGroup",
  "description": "description",
  "freetrial": "freeTrial",
  "onetimefee": "oneTimeFee",
  "recurringfee": "recurringFee",
  "billingcycle": "billingCycle",
  "classlength": "classLength",
  "frequency": "frequency",
  "status": "status",
  "notes": "notes",
};
const HEADER_MAP_SCHOOLS = {
  "school name": "schoolName",
  "schoolname": "schoolName",
  "school": "schoolName",
  "district": "district",
  "eligible for pick up": "eligible",
  "eligible": "eligible",
  "eligible for pickup": "eligible",
  "notes": "notes",
};
function normalizeHeader(h) {
  return String(h || "").trim().toLowerCase();
}

function sheetToRows(workbook, headerMap) {
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const raw = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });

  // Find the header row: first row where at least 2 cells match known headers.
  let headerRowIdx = -1;
  for (let i = 0; i < Math.min(raw.length, 10); i++) {
    const matches = raw[i].filter((c) => headerMap[normalizeHeader(c)]).length;
    if (matches >= 2) {
      headerRowIdx = i;
      break;
    }
  }
  if (headerRowIdx === -1) return [];

  const headerRow = raw[headerRowIdx].map((h) => headerMap[normalizeHeader(h)] || null);
  const rows = [];
  for (let i = headerRowIdx + 1; i < raw.length; i++) {
    const line = raw[i];
    if (!line || line.every((c) => String(c).trim() === "")) continue;
    const obj = {};
    headerRow.forEach((key, idx) => {
      if (key) obj[key] = String(line[idx] ?? "").trim();
    });
    if (Object.values(obj).some((v) => v !== "")) rows.push(obj);
  }
  return rows;
}

/** Fetches a workbook from a URL and returns it parsed into row objects. */
async function fetchAndParse(url, headerMap) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  const buffer = await res.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array" });
  const rows = sheetToRows(workbook, headerMap);
  if (!rows.length) {
    throw new Error(`No recognizable columns found in ${url}`);
  }
  return rows;
}

export function fetchClasses(url = CLASSES_XLSX_URL) {
  return fetchAndParse(url, HEADER_MAP_CLASSES);
}

export function fetchSchools(url = SCHOOLS_XLSX_URL) {
  return fetchAndParse(url, HEADER_MAP_SCHOOLS);
}
