const api_url_endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emailListEl = document.getElementById('lista-email');
const generaBtn = document.getElementById('MyButton');

//  collega il click del bottone alla funzione
generaBtn.addEventListener('click', genera10Email);

function genera10Email() {
      emailListEl.innerHTML = ""; // pulisce la lista

      for (let i = 0; i < 10; i++) {
            axios.get(api_url_endpoint)
                  .then(response => {
                        const email = response.data.response;
                        const li = document.createElement("li");
                        li.textContent = email;
                        li.classList.add("list-group-item"); // stile Bootstrap
                        emailListEl.appendChild(li);
                  })
                  .catch(error => {
                        console.error("Errore nella richiesta:", error);
                  });
      }
}
