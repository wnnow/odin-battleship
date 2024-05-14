function findPlayerCell(coordinates) {
  const rowElement = document.querySelector(
    `#player-table-container > div.player-table > div[data-array-row="${coordinates[0]}"]`
  );
  const rowElementChildren = Array.from(rowElement.childNodes);

  for (const child of rowElementChildren) {
    if (
      parseInt(child.dataset.row) === coordinates[0] &&
      parseInt(child.dataset.col) === coordinates[1]
    ) {
      return child;
    }
  }
}

export { findPlayerCell };
