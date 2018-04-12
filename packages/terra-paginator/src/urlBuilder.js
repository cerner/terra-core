var isPaged = (totalCount, page) => (!(typeof(totalCount) === 'undefined' || typeof(page) === 'undefined'));

var getPageCount = (limit, totalCount) => (Math.ceil(totalCount / limit));

// May redesign into a more complex function to account for more situations and be a little more readable.
// Ex: Setting previous to undefined if previous would result in a negative page.
var urlBuilder = (baseUrl, startParam, limitParam, start, limit, totalCount = undefined, page = undefined) => (
  {
    href: baseUrl,
    next: `${baseUrl}?${startParam}=${start + limit}&${limitParam}=${limit}` + (page ? `page=${page + 1}` : ''),
    previous: `${baseUrl}?${startParam}=${start - limit}&${limitParam}=${limit}` + (page ? `page=${page - 1}` : ''),
    first: totalCount ? `${baseUrl}?${startParam}=0&${limitParam}=${limit}&page=1` : undefined,
    last: totalCount ? `${baseUrl}?${startParam}=${getPageCount(limit, totalCount) - limit}&${limitParam}=${limit}&page=${getPageCount(limit, totalCount)}` : undefined,
    // The 'page' property below may be pulled out and built in the main component, or I might parse and modify as-needed.
    page: isPaged(totalCount, page) ? `${baseUrl}?${startParam}=${start}&${limitParam}=${limit}&page=${page}` : undefined,
  }
);

export default urlBuilder;
