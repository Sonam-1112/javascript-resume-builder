function weAddNew() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder', 'Enter here')

    let we = document.getElementById('we')
    let weAddBtn = document.getElementById('weAddBtn')
    we.insertBefore(newNode, weAddBtn)
}

function aqAddNew() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder', 'Enter here')

    let aq = document.getElementById('aq')
    let aqAddBtn = document.getElementById('aqAddBtn')
    aq.insertBefore(newNode, aqAddBtn)
}

function buildResume() {
    let nameField = document.getElementById("nameField").value;
    document.getElementById('nameT1').innerHTML = nameField;
    document.getElementById('nameT2').innerHTML = nameField;

    let contactField = document.getElementById('contactField').value;
    document.getElementById('contactT').innerHTML = contactField;

    let addressField = document.getElementById('addressField').value;
    document.getElementById('addressT').innerHTML = addressField;

    let instaField = document.getElementById('instaField').value;
    document.getElementById('instaT').setAttribute('href', instaField)

    let fbField = document.getElementById('fbField').value;
    document.getElementById('fbT').setAttribute('href', fbField);

    let linkField = document.getElementById('linkField').value;
    document.getElementById('linkT').setAttribute('href', linkField);

    let gitField = document.getElementById('gitField').value;
    document.getElementById('gitT').setAttribute('href', gitField);

    let objField = document.getElementById('objField').value;
    document.getElementById('objT').innerHTML = objField;

    let weField = document.getElementsByClassName('weField')
    let wes = '';
    for (let e of weField) {
        wes = wes + `<li>${e.value}</li>`
    }
    document.getElementById('weT').innerHTML = wes;

    let aqField = document.getElementsByClassName('aqField')
    let aqs = '';
    for (let e of aqField) {
        aqs = aqs + `<li>${e.value}</li>`
    }
    document.getElementById('aqT').innerHTML = aqs;

    // Profile Picture Setting
    let imgField = document.getElementById('imgField').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imgField);
    reader.onloadend = function () {
        document.getElementById('imgT').setAttribute('src', reader.result);
    }


    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

function printResume() {
    window.print()
}