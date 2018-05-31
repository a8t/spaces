async function getPageData(pageNum) {
  const response = await fetch(`https://thisopenspace.com/lhl-test?page=${pageNum}`);
  const responseObj = await response.json();
  const resultList = await responseObj.data;
  return resultList;
}
