console.log("Hello World");

//Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

//Bonus

//Abbellire con CSS o Bootstrap
//Inserire un bottone che al click faccia il fetch altre 10 mail(sostituendo le altre)

const api_url_endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emailListEl = document.getElementById('lista-email');
const generaBtn = document.getElementById('MyButton');




axios.get(api_url_endpoint)
      .then(response => {
            console.log(response);

      })
console.log(api_url_endpoint);

function genera10Email() {
      const emailList = []
      for (let i = 1; i <= 10; i++) {
            axios.get(api_url_endpoint)
                  .then(response => {
                        const email = response.data.response;
                        const li = document.createElement("li");
                        li.textContent = email;
                        emailListEl.appendChild(li);
                  });
      }
}
