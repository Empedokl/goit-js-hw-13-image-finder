import galleryTpl from '../templates/gallery-template.hbs';
import refs from './refs';

const updateGalleryMarkup = images => {
  const markup = galleryTpl(images);
  refs.listGallery.insertAdjacentHTML('beforeend', markup);
};
export default updateGalleryMarkup;
