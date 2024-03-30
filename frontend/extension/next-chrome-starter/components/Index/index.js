import styles from '../../styles/Pages.module.css';
import { useUrl } from 'nextjs-current-url';
import { useEffect, useState } from 'react';

export default function Index({ navigateToPage }) {
  const { href: currentUrl, pathname } = useUrl()??{};
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);
  useEffect(() => {
    if (isLoading) {
      fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({url: currentUrl})
        })
        .then((response) => response.json())
        .then((json) => setResult(json))
        .then(() => console.log(result))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
      setIsLoading(false);
    }
  }
  , [isLoading]);
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>NEXT-CHROME-STARTER</h1>
        <p className={styles.description}>
          {currentUrl}
          <br />
          {pathname}
          <br />
          {result?.result}
          <br />
          This is an example of a Browser Extension built with NEXT.JS. Please
          refer to the GitHub repo for running instructions and documentation
        </p>
        <h1 className={styles.code}>Index Page ./components/Index/index.js</h1>
        <p>{"[ - This is Index page content - ]"}</p>
        <p onClick={() => navigateToPage('new')}>{"Go to New Page >"}</p>
      </main>
    </div>
  );
}
