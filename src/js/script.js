


var option = {
    animation: true,
    delay: 2000
};

function ShowNotification() {
    var toastHTMLElement = document.getElementById("notification");
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();
}

var modal = new bootstrap.Modal(document.querySelector('#modaldescription'));

var modal2 = new bootstrap.Modal(document.querySelector('#modalcreateobj'));
var modalBody = modal._element.querySelector('.modal-body');
var descriptions = ['описание колы', 'описание лимон-лайма', 'описание апельсина', 'описание манго-маракуйя', 'описание сибирских трав'];
var currentDescriptionIndex = 0;

function ShowModal(button) {
    currentDescriptionIndex = button.dataset.description;
    var description = descriptions[button.dataset.description];
    modalBody.textContent = description;
    modal.show();
}

function showNextDescription() {
    currentDescriptionIndex = (currentDescriptionIndex + 1) % descriptions.length;
    modalBody.textContent = descriptions[currentDescriptionIndex];
}

function showPreviousDescription() {
    currentDescriptionIndex = (currentDescriptionIndex - 1 + descriptions.length) % descriptions.length;
    modalBody.textContent = descriptions[currentDescriptionIndex];
}

var currentCard;
function showNewObjModal(obj) {
    if (obj.classList.contains("card")) {
        var title = obj.querySelector("h5").textContent;
        var content = obj.querySelector("h6").textContent;
        var titlebox = document.querySelector("#titleInput");
        titlebox.value = title;
        var contentbox = document.querySelector("#contentInput");
        contentbox.value = content;
    }
    currentCard = obj;
    modal2.show();
}

function closeNewObjModal() {
    document.querySelector("#titleInput").value = "";
    document.querySelector("#contentInput").value = "";
    modal2.hide();
}

function saveNewObjModal() {
    var cards = document.getElementById("root");
    var cardscontainer = cards.querySelector(".container");
    console.log(cardscontainer);
    var title = $('#titleInput').val();
    var content = $('#contentInput').val();
    if (/^\d/.test(title)) {
        closeNewObjModal();
      } else {
        
    var newcard = document.createElement("div");
    newcard.classList.add("card");
    var titleElem = document.createElement("h5");
    titleElem.textContent = title
    var contentElem = document.createElement("h6");
    contentElem.textContent = content;
    newcard.setAttribute("onclick", "showNewObjModal(this)")
    newcard.appendChild(titleElem);
    newcard.appendChild(contentElem);
    newcard.setAttribute("id", "card" + cardscontainer.children.length)


    if (currentCard.classList.contains("card")) {
        var cardid = currentCard.id;
        var cur = cardscontainer.querySelector("#"+cardid);
        cardscontainer.replaceChild(newcard, cur);
    } else {
        cardscontainer.appendChild(newcard);
    }
    document.querySelector("#titleInput").value = "";
    document.querySelector("#contentInput").value = "";
    closeNewObjModal();
}
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowRight') {
        showNextDescription();
    } else if (event.code === 'ArrowLeft') {
        showPreviousDescription();
    }
});

var popoverTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})