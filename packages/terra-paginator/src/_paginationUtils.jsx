const calculatePages = (totalCount, itemCountPerPage) => Math.ceil(totalCount / itemCountPerPage);

const pageSet = (index, totalPages) => {
  const sequence = [];
  const numberShiftPoint = 7;
  const maxPagesDisplayed = 10;
  const previousSequenceCount = 5;
  const nextSequenceCount = 4;
  let mutableIndex = index;

  if (mutableIndex < 1) {
    mutableIndex = 1;
  } else if (mutableIndex > totalPages) {
    mutableIndex = totalPages;
  }

  if (mutableIndex < numberShiftPoint) {
    const pagesDisplayed = totalPages < maxPagesDisplayed ? totalPages : maxPagesDisplayed;

    for (let i = 1; i <= pagesDisplayed; i += 1) {
      sequence.push(i);
    }
  } else if (mutableIndex <= totalPages && mutableIndex > totalPages - maxPagesDisplayed && mutableIndex > totalPages - previousSequenceCount) {
    for (let i = totalPages; i > totalPages - maxPagesDisplayed && i > 0; i -= 1) {
      sequence.push(i);
    }
  } else {
    for (let i = mutableIndex; i >= mutableIndex - previousSequenceCount; i -= 1) {
      sequence.push(i);
    }

    for (let i = mutableIndex + 1; i <= mutableIndex + nextSequenceCount; i += 1) {
      sequence.push(i);
    }
  }

  return sequence.sort((a, b) => a - b);
};

export { calculatePages, pageSet };
