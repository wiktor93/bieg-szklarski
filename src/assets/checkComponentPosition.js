// this function will check when component will pass bottom line of browser window and ivoke passed function

const checkComponentPosition = (elementID, functionToInvoke = () => {}) => {
  const element = document.getElementById(elementID);

  const handleScrollEvent = () => {
    if (
      window.scrollY + window.innerHeight - element.clientHeight >=
      element.offsetTop
    ) {
      window.removeEventListener('scroll', handleScrollEvent);
      functionToInvoke();
    }
  };

  window.addEventListener('scroll', handleScrollEvent);
};

export default checkComponentPosition;
