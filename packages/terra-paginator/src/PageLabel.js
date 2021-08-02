export default function getPageLabel(pageLabel, selectedPage, totalPages) {
  let messageId;
  let messageAttributes;

  if (totalPages) {
    if (pageLabel) {
      messageId = 'Terra.paginator.pageCountWithLabel';
      messageAttributes = { pageLabel, pageNumber: selectedPage, pageNumberTotal: totalPages };
    } else {
      messageId = 'Terra.paginator.pageCount';
      messageAttributes = { pageNumber: selectedPage, pageNumberTotal: totalPages };
    }
  } else if (pageLabel) {
    messageId = 'Terra.paginator.pageIndexWithLabel';
    messageAttributes = { pageLabel, pageNumber: selectedPage };
  } else {
    messageId = 'Terra.paginator.pageIndex';
    messageAttributes = { pageNumber: selectedPage };
  }

  return { messageId, messageAttributes };
}
