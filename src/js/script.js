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