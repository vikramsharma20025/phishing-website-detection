import styles from '../../styles/Pages.module.css';
import { useUrl } from 'nextjs-current-url';
import { useEffect, useState } from 'react';
// import chrome from 'chrome';


export default function Index({ navigateToPage }) {
  async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    var browser;
    if (typeof browser == "undefined") {
      browser = chrome;
    }
      let [tab] = await browser.tabs.query(queryOptions);
      // localStorage.setItem('tabname' , tab);
      return tab;
    // }
  }
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(0);
  useEffect(() => {
    // 1
    chrome.tabs &&
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // 2
        const url = tabs[0].url
        const title = tabs[0].title
        // 3
        setLink(url);
        fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: url })
        })
        .then((response) => response.json())
        .then((data) => setResult(data.result))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
      setIsLoading(false);
      })
      

  }, [] );
  const resultoutput = (result) => {
    return (
      <div>
        <h5>Result: {result === -1? "PHISHING SITE DETECTED":result === 1? "YOU ARE SAFE":null}</h5>
      </div>
    );
  }
  if(isLoading && result===0){
    return <div>Loading...</div>
  }else{
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Phishing Detection</h1>
        <p className={styles.description}>
          <h5>Current Url: "{link}"</h5>
          <br />
          {/* <h5>Pathname: "{pathname}"</h5> */}
          <br />
          {/* {result} */}
          <br />
        </p>
        {/* <button
          onClick={check}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Check
        </button> */}

        <div>
          {resultoutput(result)}
        </div>
      </main>
    </div>
  );
  }
}





// {
//   "content_scripts": [
//     {
//       "js": ["scripts/content.js"],
//       "matches": [
//         "https://developer.chrome.com/docs/extensions/*",
//         "https://developer.chrome.com/docs/webstore/*"
//       ]
//     }
//   ]
// }