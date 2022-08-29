import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPersonalQuote } from '../redux/action';

export default function PersonalQuoteView() {
  const dispatch = useDispatch();
  const quoteList = useSelector((state) => state.personalQuotes);
  const [myQuote, setMyQuote] = useState('');

  const submitMyQuote = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const doubleQuote = quoteList.filter((q) => q === myQuote);

    if (myQuote.length > 0 && !doubleQuote.length) {
      dispatch(addPersonalQuote(myQuote));
      setMyQuote('');
    }
  };

  const onHandleChange = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setMyQuote(e.target.value);
  };

  return (
    <section style={{ textAlign: 'center', marginTop: '60px' }}>
      <hr style={{ maxWidth: '30%' }} />
      <h2>My Quotes</h2>
      <form onSubmit={submitMyQuote}>
        <input value={myQuote} onChange={onHandleChange} />
        <button type={`submit`}>Submit</button>
      </form>
      {quoteList.length > 0 && <div>{quoteList}</div>}
    </section>
  );
}
