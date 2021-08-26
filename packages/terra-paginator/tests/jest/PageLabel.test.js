import getPageLabel from '../../src/PageLabel';

it('should return an object with pageLabel, pageNumber and pageNumberTotal', () => {
  const pageLabel = 'Webpage';
  const selectedPage = 5;
  const totalPages = 5;
  const { messageId, messageAttributes } = getPageLabel(pageLabel, selectedPage, totalPages);

  expect('Terra.paginator.pageCountWithLabel').toEqual(messageId);
  expect({ pageLabel, pageNumber: selectedPage, pageNumberTotal: totalPages }).toEqual(messageAttributes);
});

it('should return an object with pageNumber and pageNumberTotal', () => {
  const pageLabel = undefined;
  const selectedPage = 5;
  const totalPages = 5;
  const { messageId, messageAttributes } = getPageLabel(pageLabel, selectedPage, totalPages);

  expect('Terra.paginator.pageCount').toEqual(messageId);
  expect({ pageNumber: selectedPage, pageNumberTotal: totalPages }).toEqual(messageAttributes);
});

it('should return an object with pageLabel and pageNumber', () => {
  const pageLabel = 'Webpage';
  const selectedPage = 5;
  const totalPages = undefined;
  const { messageId, messageAttributes } = getPageLabel(pageLabel, selectedPage, totalPages);

  expect('Terra.paginator.pageIndexWithLabel').toEqual(messageId);
  expect({ pageLabel, pageNumber: selectedPage }).toEqual(messageAttributes);
});

it('should return an object with pageNumberTotal', () => {
  const pageLabel = undefined;
  const selectedPage = 5;
  const totalPages = undefined;
  const { messageId, messageAttributes } = getPageLabel(pageLabel, selectedPage, totalPages);

  expect('Terra.paginator.pageIndex').toEqual(messageId);
  expect({ pageLabel, pageNumber: selectedPage, pageNumberTotal: totalPages }).toEqual(messageAttributes);
});
