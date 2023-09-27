export async function fetchDatas() {
  try {
    const response = await fetch("https://restaurant-api.dicoding.dev/list");
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return {
      error: true,
      message: err,
      restaurants: [],
    };
  }
}

export async function fetchDetails(id) {
  try {
    const response = await fetch(
      `https://restaurant-api.dicoding.dev/detail/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function fetchCategories() {
  const dataId = await fetchDatas();
  let temporal = [""];
  for (let index = 0; index < dataId["restaurants"].length; index++) {
    const id = dataId["restaurants"][index]["id"];
    try {
      const response = await fetch(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      let cat = (await response.json())["restaurant"]["categories"][0]["name"];
      temporal = temporal.concat(cat);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // console.log(dataId["restaurants"][index]["id"])
  }

  return [...new Set(temporal)];
}


export async function sendQuery(query){
  try{
    const response = await fetch(
      `https://restaurant-api.dicoding.dev/search?q=${query}`
    )
    const jsonData = await response.json();
    return jsonData["restaurants"]
  }catch(err){
    console.error("Error fetching data:", err);
  }
}