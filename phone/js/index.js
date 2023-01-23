/*
Реалізуйте програму перевірки телефону
* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
* Користувач повинен ввести номер телефону у форматі 000-000-00-00
* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, 
  якщо номер правильний зробіть зелене тіло 
  і використовуючи document.location переведіть користувача на сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg 
  якщо буде помилка, відобразіть її в діві до input.
*/

const telRegex = /^\d{3}-\d{3}-\d{2}-\d{2}$/,
get = id => document.getElementById(id),
showError = (el) => {
    el.classList.add('red');
    if (!get('error')){
        const error = document.createElement('div');
        error.id='error';
        error.textContent='Please enter phone in format: 000-000-00-00';
        el.before(error)
    }
};

window.onload = () => {
    const save = get('save'), 
    input = get('tel');
    
    save.onclick = (event) => {
        const tel = get('tel').value;
        if (telRegex.test(tel)){
            document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
        } else {
            showError(input)
        }
    }

//on Enter press save
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            save.click();
        }
    });
}
