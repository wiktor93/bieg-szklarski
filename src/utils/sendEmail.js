const sendEmail = (emailAdress, txtMessage) => {
  const json = {email: emailAdress, message: txtMessage};

  fetch('./php/mail.php', {
    method: 'POST',
    body: JSON.stringify(json)
  })
    .then(response => response.json())
    .then(status => {
      if (status === 'sent') alert('Wiadomość została wysłana');
      else
        alert('Przepraszamy, coś poszło nie tak. Prosimy spróbować później.');
    })
    .catch(error => {
      alert('Przepraszamy, coś poszło nie tak. Prosimy spróbować później.');
      console.log(error);
    });
};

export default sendEmail;
