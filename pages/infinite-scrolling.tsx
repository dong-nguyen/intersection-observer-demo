import type { NextPage } from 'next';
import { useElementOnScreen } from 'helpers/useElementOnScreen';
import { useState, useEffect, useCallback } from 'react';

const Home: NextPage = () => {
  const [sentinelRef, isVisible] = useElementOnScreen({ threshold: 0.5 });
  const [isFetching, setIsFetching] = useState(false);
  const [items, setItems] = useState<number[]>([]);

  const fetchData = useCallback(() => {
    setIsFetching(true);
    fetch('/api/list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ last: items.length }),
    })
      .then(async (response) => {
        const data = await response.json();
        setItems((prevItems) => [...prevItems, ...data.list]);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [items]);

  useEffect(() => {
    if (isVisible && !isFetching) {
      fetchData();
    }
  }, [isVisible, isFetching, fetchData]);

  return (
    <div className="h-[500px] overflow-auto w-[300px] m-auto border-2 border-black">
      {items.map((val, index) => (
        <>
          <div key={val} className="w-full h-8 text-center border">
            Item {val}
          </div>
          {index === items.length - 3 && (
            <div ref={sentinelRef} className="h-1 w-full"></div>
          )}
        </>
      ))}
      {!items.length && <div ref={sentinelRef} className="h-5 w-full"></div>}
    </div>
  );
};

export default Home;
