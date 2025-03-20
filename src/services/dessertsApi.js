export async function getDesserts() {
  const response = await fetch("http://localhost:8080/desserts");
  const data = await response.json();
  return data;
}
