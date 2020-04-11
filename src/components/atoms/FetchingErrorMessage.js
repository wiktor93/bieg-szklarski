import React from 'react';

const FetchingErrorMessage = ({condition}) => {
  return condition ? (
    <h3>Przepraszamy, wystąpił błąd. Prosimy spróbować później.</h3>
  ) : null;
};

export default FetchingErrorMessage;
