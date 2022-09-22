function handleObject(obj) {
  //search input
  if (obj.user.login === "joyeecheung") {
    return obj;
  }
}

async function getApi() {
  let response = await fetch(
    "https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc"
  );
  let data = await response.json();
  let filteredData = data.filter((obj) => handleObject(obj));
  console.log(filteredData);
}
