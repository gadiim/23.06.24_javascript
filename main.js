const numbers = [
    "+38 (050) 123-45-67",
    "+38(067)123-45-67",
    "+38(067)1234567",
    "050 123-45-67",
    "0501234567",
    "050-123-45-67",
    "050 123 45 67",
    "(063) 123-45-67",
    "(96) 123-45-67",
    "93 123 45 67",
    "73-123-45-67",
    "97 1234567",
    "98 12 34567",
    "98 123 45 67",
    "0671234567",
    "050123456789"
];

const patterns = [
    /^\+38\s\(050\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
    /^\+38\(067\)\d{3}-\d{2}-\d{2}$/,
    /^\+38\(067\)\d{7}$/,
    /^050\s\d{3}-\d{2}-\d{2}$/,
    /^050\d{7}$/,
    /^050-\d{3}-\d{2}-\d{2}$/,
    /^050\s\d{3}\s\d{2}\s\d{2}$/,
    /^\(063\)\s\d{3}-\d{2}-\d{2}$/,
    /^\(96\)\s\d{3}-\d{2}-\d{2}$/,
    /^93\s\d{3}\s\d{2}\s\d{2}$/,
    /^73-\d{3}-\d{2}-\d{2}$/,
    /^97\s\d{7}$/,
    /^98\s\d{2}\s\d{5}$/,
    /^98\s\d{3}\s\d{2}\s\d{2}$/,
    /^067\d{7}$/,
    /^050\d{9}$/
];

function createTask(index) {

    const fieldset = document.createElement('fieldset');
    fieldset.classList.add('fieldset');

    const legend = document.createElement('legend');
    legend.classList.add('legend');
    const taskNum = index + 1;
    legend.innerText = 'task ' + taskNum;

    const form = document.createElement('form');
    form.classList.add('form');
    form.id = 'regForm';
    form.setAttribute('method', 'GET');
    form.setAttribute('onsubmit', 'return checkForm(' + index + ')');

    const div = document.createElement('div');
    div.classList.add('div');
    div.innerText = "Phone number:\t";

    const inputPhone = document.createElement('input');
    inputPhone.classList.add('inputPhone');
    inputPhone.id = 'telephone' + index;
    inputPhone.setAttribute('type', 'phone');
    inputPhone.setAttribute('placeholder', numbers[index]);
    inputPhone.setAttribute('name', 'phone');

    const submitPhone = document.createElement('input');
    submitPhone.classList.add('submitPhone');
    submitPhone.setAttribute('type', 'submit');
    submitPhone.setAttribute('value', 'Send');

    form.append(div, inputPhone, submitPhone);
    fieldset.append(legend, form);

    return fieldset;
}

function checkForm(index) {
    const phone = document.getElementById('telephone' + index).value;
    if (!patterns[index].test(phone)) {
        alert("Phone number is incorrect");
        document.getElementById('telephone' + index).value = '';
        return false;
    }
    alert("Phone number is correct");
    document.getElementById('telephone' + index).value = '';
    return true;
}


const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < numbers.length; i++) {
    container.append(createTask(i));
}

document.body.appendChild(container);