import SimpleLightbox from 'SimpleLightbox';
import 'simplelightbox/dist/simple-lightbox.min,css';

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const li = `<li class="gallery__item">
  <a class="gallery__link" href="javascript:void(0) ">
    <img
      class="gallery_image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
  gallery.innerHTML += li;
});
//event delegation
gallery.addEventListener('click', e => {
  // console.log("is clicked", e);
  if (e.target.tagName === 'IMG') {
    let bigImage = e.target.getAttribute('data-source');
    let instance = basicLightbox.create(
      `<img src="${bigImage}"width ="800 height = "600"/>`
    );
    instance.show();
  }
});

window.addEventListener('keyup', e => {
  if (e.code === 'escape') {
    instance.close();
  }
});
