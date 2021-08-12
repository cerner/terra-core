export default function getPageLabel(pageLabel, selectedPage, totalPages) {
  if (totalPages && pageLabel) {
    return ({
      messageId: 'Terra.paginator.pageCountWithLabel',
      messageAttributes: { pageLabel, pageNumber: selectedPage, pageNumberTotal: totalPages },
    });
  }
  if (totalPages) {
    return ({
      messageId: 'Terra.paginator.pageCount',
      messageAttributes: { pageNumber: selectedPage, pageNumberTotal: totalPages },
    });
  }
  if (pageLabel) {
    return ({
      messageId: 'Terra.paginator.pageIndexWithLabel',
      messageAttributes: { pageLabel, pageNumber: selectedPage },
    });
  }
  return ({
    messageId: 'Terra.paginator.pageIndex',
    messageAttributes: { pageNumber: selectedPage },
  });
}
