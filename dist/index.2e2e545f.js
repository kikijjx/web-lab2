var option={animation:!0,delay:2e3};function ShowNotification(){var o=document.getElementById("notification");new bootstrap.Toast(o,option).show()}var modal=new bootstrap.Modal(document.querySelector("#modaldescription")),modal2=new bootstrap.Modal(document.querySelector("#modalcreateobj")),modalBody=modal._element.querySelector(".modal-body"),descriptions=["описание колы","описание лимон-лайма","описание апельсина","описание манго-маракуйя","описание сибирских трав"],currentDescriptionIndex=0;function ShowModal(o){currentDescriptionIndex=o.dataset.description;var e=descriptions[o.dataset.description];modalBody.textContent=e,modal.show()}function showNextDescription(){currentDescriptionIndex=(currentDescriptionIndex+1)%descriptions.length,modalBody.textContent=descriptions[currentDescriptionIndex]}function showPreviousDescription(){currentDescriptionIndex=(currentDescriptionIndex-1+descriptions.length)%descriptions.length,modalBody.textContent=descriptions[currentDescriptionIndex]}function showNewObjModal(){modal2.show()}function closeNewObjModal(){modal2.hide()}function saveNewObjModal(){var o=document.getElementById("root").querySelector(".container");console.log(o);var e=$("#titleInput").val(),t=$("#contentInput").val(),n={title:e,content:t,is_active:!0},r=localStorage.getItem("data/data.json");console.log(r),(r=r?JSON.parse(r):{h_name:"sample h",blocks:[]}).blocks.push(n),localStorage.setItem("data",JSON.stringify(r));var i='<div class="card"><div class="card-body"><h5 class="card-title">'+e+'</h5><p class="card-text">'+t+"</p></div></div>";$("#cardList").append(i),modal2.hide()}document.addEventListener("keydown",(function(o){"ArrowRight"===o.code?showNextDescription():"ArrowLeft"===o.code&&showPreviousDescription()}));var popoverTriggerList=Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')),popoverList=popoverTriggerList.map((function(o){return new bootstrap.Popover(o)}));
//# sourceMappingURL=index.2e2e545f.js.map
