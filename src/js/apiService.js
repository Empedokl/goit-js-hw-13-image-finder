const API_KEY = '18396149-73dfa4d2cc3cf60487110b893';

export default {
  searchImage: '',
  page: 1,
  async getImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchImage}&page=${this.page}&per_page=12&key=${API_KEY}`;
    const response = await fetch(url);
    const images = response.json();
    this.page += 1;
    return images;
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchImage;
  },
  set query(value) {
    this.searchImage = value;
  },
};
