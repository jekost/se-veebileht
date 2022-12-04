//võetud siit: https://bobbyhadz.com/blog/javascript-clear-input-field-after-submit
//autor on Borislav Hadzhiev

const form = document.getElementsById('vorm'); //teeb muutuja, mis on kontaktvorm

form.addEventListener('submit', function onSubmit(event) { //vaatab, kas nupule vajutatakse
  form.reset(); // tühjendab kontaktvormi väljad
});


