// Fetch API
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => {
    let data = res.json().then((res) => {
      res.forEach((el) => {
        let img = document.createElement("img");
        img.src = `${el.url}`;
        document.body.appendChild(img);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
