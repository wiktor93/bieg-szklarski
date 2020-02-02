// this function will check when component will pass bottom line of browser window and ivoke passed function

const checkScrollPosition = (elementID = window, fn) => {
  const element = document.getElementById(elementID);
  if (
    window.scrollY + window.innerHeight - element.clientHeight >=
    element.offsetTop
  ) {
    window.removeEventListener('scroll', checkScrollPosition);
    fn(true);
  }
};

export default checkScrollPosition;
