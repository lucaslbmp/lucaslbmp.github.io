export function getMonthYearDate(date: Date) {
  return capitalize(
    date.toLocaleString("default", { month: "short", year: "numeric" })
  );
}

export function capitalize(str: string) {
  const first = str?.at(0);
  if (!first) return str;
  return first.toUpperCase() + str.substring(1);
}
