console.log("Hello World");

//Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

//Bonus

//Abbellire con CSS o Bootstrap
//Inserire un bottone che al click faccia il fetch altre 10 mail(sostituendo le altre)

const api_url_endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const resultEl = document.getElementById('MyButton')

console.log(api_url_endpoint);

axios.get(api_url_endpoint)
      .then(response => {
            console.log(response);

      })

function genera10Email() {
      const link = "https://flynn.boolean.careers/exercises/api/random/mail"
      const emailList = []
      for (let i = 1; i <= 10; i++) {
            genera10Email.push(genera10Email[i])
            console.log(genera10Email);

      }
};