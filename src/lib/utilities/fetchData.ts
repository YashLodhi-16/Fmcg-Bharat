const fetchData = async (URL: string, methods?: RequestInit) => {
  try {
    const res = await fetch(URL, methods);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error while Fetching Data", error);
    return null;
  }
};
export default fetchData;
