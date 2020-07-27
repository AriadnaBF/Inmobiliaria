async function getRSList() {
  const response = await fetch(
    "https://hub-inmobiliaria.netlify.app/inmuebles.json"
  );
  const rsList = await response.json();
  return rsList;
}

export { getRSList };
