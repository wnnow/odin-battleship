function styleCell(element, value) {
  console.log(element);
  if (value === 'ship') {
    element.classList.add('ship');
  }
  if (value === 'hit') {
    element.classList.add('hit');
  }
  if (value === 'miss') {
    element.classList.add('miss');
  }
}

export { styleCell };
