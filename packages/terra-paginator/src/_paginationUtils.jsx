const calculatePages = (totalCount, itemCountPerPage) => Math.ceil(totalCount / itemCountPerPage);

const pageSequence = (index, totalPages) => {
  var sequence = [];
  var numberShiftPoint = 7;
  var maxPagesDisplayed = 10;
  var previousSequenceCount = 5;
  var nextSequenceCount = 4;

  if (index < numberShiftPoint) {
    for (var i = 1; i <= maxPagesDisplayed; i++) {
      sequence.push(i);
    }
  } else if (index <= totalPages && index > totalPages - previousSequenceCount) {
    for (var i = totalPages; i > totalPages - maxPagesDisplayed; i--) {
      sequence.push(i);
    }
  } else {
    for (var i = index; i >= index - previousSequenceCount; i--) {
      sequence.push(i);
    }

    for (var i = index + 1; i <= index + nextSequenceCount; i++) {
      sequence.push(i);
    }
  }

  return sequence.sort((a, b) => a - b);
}

export { calculatePages, pageSequence }
