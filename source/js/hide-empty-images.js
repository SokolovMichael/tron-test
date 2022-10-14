const hideEmptyImages = () => {
  const images = document.querySelectorAll('.comments__image');

  images.forEach((image) => {
    image.onerror = () => {
      image.closest('.comments__picture').classList.add('comments__picture--hide');
    };
  });
};

export {hideEmptyImages};
