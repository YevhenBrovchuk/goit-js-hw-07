import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')

function createMarkupItems(arr) {
	return arr.map(item => `<li class="gallery__item">
	<a class="gallery__link" href="${item.original}">
	<img src="${item.preview}" data-source="${item.original}" alt="${item.description} " class="gallery__image" ></a></li>`).join("")
}
list.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems))

list.addEventListener("click", handlerPhotoClick)

function handlerPhotoClick(evt) {
	evt.preventDefault()
	if (!evt.target.classList.contains("gallery__image")) {
		return;
	}

        openCloseModal(createBigPhotoMarkup(evt.target))
	
}

function createBigPhotoMarkup(obj = {}) {
	return `<div><img src="${obj.dataset.source}" alt="${obj.alt}" class="gallery__image"></div>`
}



function openCloseModal(str)
{
	const instance = basicLightbox.create(str)
	instance.show();
	if (basicLightbox.visible()) {
		document.addEventListener('keydown', hendlerEsc)
		
 function hendlerEsc(evt) {
	if (evt.code === "Escape") {
        instance.close()
		document.removeEventListener('keydown', hendlerEsc)
	}
	
}
	}
	
}








