const reCaptcha = {
  validationPassed: false,

  validate: userToken => {
    if (userToken) {
      fetch('./php/form.php', {
        method: 'POST',
        body: userToken
      })
        .then(response => response.json())
        .then(data => {
          reCaptcha.validationPassed = data.success;
        })
        .catch(error => console.log(error));
    } else reCaptcha.validationPassed = false;
  }
};

export default reCaptcha;
