import './styles.css';
import apiService from './js/apiService';

import updateGalleryMarkup from './js/update-gallery-markup';
import refs from './js/refs';

import 'material-design-icons/iconfont/material-icons.css';
import './js/spinner';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import 'basiclightbox/src/styles/main.scss';

const windowsScroll = () => {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
};

const fechImages = () => {
  refs.loadMore.classList.add('is-hidden');
  refs.spinner.classList.remove('spinner-disable');

  apiService
    .getImages()
    .then(({ hits }) => {
      updateGalleryMarkup(hits);
      refs.loadMore.classList.remove('is-hidden');
      windowsScroll();
    })
    .finally(() => {
      refs.spinner.classList.add('spinner-disable');
    });
};

const hendelForm = event => {
  event.preventDefault();
  const inputValue = event.currentTarget;
  apiService.query = inputValue.elements.query.value;

  refs.listGallery.innerHTML = '';

  apiService.resetPage();
  fechImages();
  refs.form.reset();
};

const hendelGallery = ({ target }) => {
  const instance = basicLightbox.create(`
 <img src="${target.dataset.activ}" width="800" height="600">
`);
  instance.show();
};

refs.form.addEventListener('submit', hendelForm);
refs.loadMore.addEventListener('click', fechImages);
refs.listGallery.addEventListener('click', hendelGallery);
