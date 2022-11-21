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

//
//
/// Enviar un mensaje al endPoint de jsonPlaceholder para poder emitir info dentro del request!
// HTTP Status Messages Segment - [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status]
const addPost = (preventForm) => {
  preventForm.preventDefault();
  // nos traemos los values/valores de los inputs
  let title = document.querySelector("#title").value;
  let body = document.querySelector("#body").value;
  // Vamos a usar el fetch() para poder enviar info a el endpoint!
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // Tipo de request que queremos ejecutar, en este caso es un POST request!
    method: "POST",
    // Los headers son metadatos adicionales pasados a la API para ayudar al servidor a entender qué tipo de solicitud está tratando, por ejemplo "content-type".
    headers: {
      // content-type es el tipo de contenido que acepta este request
      "Content-type": "application/json",
      // Accept, tenemos la posibilidad de expandir el tipo de dato que se le pasa a este request!
      Accept: "text/plain, application/json",
    },
    // El body se encarga de enviar la data que nosotros queremos enviar, ahora recuerdense que como estamos trabajando con formatos JSON prod efecto tenemos que enviar la respuesta como JSON, por ende usamos el JSON.stringify(!)
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((response) => response.json())
    .then((formData) => console.log(formData))
    .catch((error) => console.log(error));
};
document.querySelector("#addPost").addEventListener("submit", addPost);
