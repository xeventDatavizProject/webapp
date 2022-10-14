export function dateParser(string: string) {
  let timestamp = Date.parse(string);

  let date = new Date(timestamp).toLocaleDateString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return date.toString();
}
