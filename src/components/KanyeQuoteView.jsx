import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { quoteAPI } from '../provider/api';
import { addKanyeQuote } from '../redux/action';

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const [quote, setQuote] = useState('');
  const qouteList = useSelector((state) => state.kanyeQuotes);

  const fetchQuote = async () => {
    const { data } = await quoteAPI.get();
    // console.log(data);
    setQuote(data.quote);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const addFavoriteQuote = () => {
    const doubleQuote = qouteList.filter((k) => k === quote);
    if (!doubleQuote.length) {
      dispatch(addKanyeQuote(quote));
    }
  };

  return (
    <section style={{ textAlign: 'center' }}>
      <img
        src='https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg'
        alt='W3Schools.com'
        style={{ width: '300px' }}
      />
      <h1 style={{ fontSize: '40px', marginTop: '10px' }}>Kanye-West Quote</h1>
      <h4>{quote.length > 0 && quote}</h4>
      <button onClick={() => fetchQuote()}>Get Quote</button>
      <button onClick={() => addFavoriteQuote()}>Add Favorite</button>
      {qouteList.length > 0 && (
        <div>
          {qouteList.map((q, i) => (
            <p key={i}>{q}</p>
          ))}
        </div>
      )}
    </section>
  );
}
