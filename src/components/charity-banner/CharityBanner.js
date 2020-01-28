import React, {useState, useEffect} from 'react';

import checkComponentPosition from '../../assets/checkComponentPosition';
import styles from './CharityBanner.module.scss';

const elementID = 'charity-banner';
const sentence = 'DOŁĄCZ DO NAS I.. #POMAGAJ!';

const CharityBanner = () => {
  const [textLine1, setTextLine1] = useState('');
  const [textLine2, setTextLine2] = useState('');
  const [counter, setCounter] = useState(0);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    checkComponentPosition(elementID, () => setTrigger(true));
    if (trigger) {
      const timeout = setTimeout(() => {
        if (counter < 18) {
          setTextLine1(textLine1 + sentence.charAt(counter));
          setCounter(counter + 1);
        } else if (counter < 27) {
          setTextLine2(textLine2 + sentence.charAt(counter));
          setCounter(counter + 1);
        }
      }, 125);
      return () => clearTimeout(timeout);
    }
  });

  return (
    <section className={styles.wraper} id={elementID}>
      <div className={styles.gradient_filler}>
        <div className={styles.typing}>
          <p>{textLine1}</p> <br />
          <p>{textLine2}</p>
        </div>
      </div>
    </section>
  );
};

export default CharityBanner;
