// document.querySelector("#getHere").addEventListener("click", getHere);

const getText = () => {
  fetch("sample.txt")
    .then((response) => response.text())
    .then((cleanText) => {
      document.querySelector("#output").innerText += cleanText;
    })
    .catch((error) => console.log(error));
};

document.querySelector("#getText").addEventListener("click", getText);

//---------------

const getJson = () => {
  fetch("users.json")
    .then((response) => response.json())
    .then((users) => {
      let userData = "";
      users.forEach((user) => {
        userData += `
              <ul>
              <li>${user.name}</li>
              <li>${user.email}</li>
              <li>${user.id}</li>
              </ul>
              `;
      });
      document.querySelector("#output").innerHTML += userData;
    })
    .catch((error) => console.log(error));
};

document.querySelector("#getJson").addEventListener("click", getJson);

//-----------------
// API External

const getExternalApiInfo = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      let externalApiInfo = "";
      res.forEach((post) => {
        externalApiInfo += `
                <div class="card" style="width: 15rem">
                <img
                    class="card-img-top"
                    src="https://es.web.img2.acsta.net/pictures/14/02/27/12/49/374639.jpg"
                    alt="A cool image about the Wu"
                />
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">
                        ${post.body}
                    </p>
                </div>
              </div>

                `;
      });
      document.querySelector("#output").innerHTML += externalApiInfo;
    })
    .catch((error) => console.log(error));
};

document
  .querySelector("#getExternalApiInfo")
  .addEventListener("click", getExternalApiInfo);
