import { IconContext } from '@react-icons/all-files'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.ico' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='favicon.png'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Inlined version of noflash.js from use-dark-mode */
;(function () {
  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'
  var classNameLight = 'light-mode'
  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }
  var preferDarkQuery = '(prefers-color-scheme: dark)'
  var mql = window.matchMedia(preferDarkQuery)
  var supportsColorSchemeQuery = mql.media === preferDarkQuery
  var localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }
  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})();
(function () {
/** hide empty Notion property rows  */

document.addEventListener("DOMContentLoaded", function() {
  function shouldHideTitle(element) {
    switch (element.querySelector('.notion-collection-column-title-body').textContent.trim()) {
      case 'Hide':
      case 'Status':
        return true;
      default:
        return false;
    }
  }

  // Function to check and hide empty spans
  function hideEmptySpanProperties() {
    const elements = document.querySelectorAll('.notion-collection-row-property');
    elements.forEach(function(element) {
      const span = element.querySelector('.notion-collection-row-value > span');
      if (span && span.textContent.trim() === '') {
        element.style.display = 'none';
      } else if (shouldHideTitle(element)){
        element.style.display = 'none';
      } else {
        // element.style.display = ''; // Ensure it is visible if not empty
      }
    });
  }

  // Set up the MutationObserver
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' || mutation.type === 'characterData') {
        hideEmptySpanProperties(); // Re-check when changes occur
      }
    });
  });

  // Specify what to observe
  const config = {
    childList: true,
    subtree: true,
    characterData: true
  };

  // Start observing the body for changes in the DOM
  observer.observe(document.body, config);

  // Initial check in case elements already exist
  hideEmptySpanProperties();
});

})();
`
              }}
            />
            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
