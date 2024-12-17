fetch('https://jsonplaceholder.typicode.com/posts1')
.then((response) => {
  if (response.ok) {
    return response;
  }

  throw new Error(`${response.status} — ${response.statusText}`);
})
.then((response) => response.json())
.then((posts) => console.log(posts))
.catch((error) => console.log(error));
