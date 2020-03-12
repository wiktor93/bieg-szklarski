function detectInternetExplorer() {
  if (window.document.documentMode) {
    alert('Aby poprawnie wyświetlić stronę należy zaktualizować przeglądarkę');
  }
}

export default detectInternetExplorer;
