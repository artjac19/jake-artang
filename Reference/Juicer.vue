

<script setup>

// Wrap your script in a named function
function loadJuicer() {
  var juicerCssUrl = "https://www.juicer.io/embed.css";
  var juicerJsUrl = "https://www.juicer.io/embed.js";

  function setAttributesToJuicerElement(juicerFeed) {
    if (!juicerFeed.hasAttribute('data-feed-id')) {
      juicerFeed.setAttribute('data-feed-id', 'jakedoesjazz');
    }
    if (!juicerFeed.hasAttribute('data-origin')) {
      juicerFeed.setAttribute('data-origin', 'embed-code');
    }
  }

  var feedElements = document.querySelectorAll('.juicer-feed[data-feed-id="jakedoesjazz" i]');
  if (feedElements.length === 0) {
    var juicerFeed = document.createElement('div');
    juicerFeed.setAttribute('class', 'juicer-feed');
    setAttributesToJuicerElement(juicerFeed);
    document.getElementById("Instagram").appendChild(juicerFeed); // Append to body instead of using currentScript
  } else {
    feedElements.forEach(setAttributesToJuicerElement);
  }

  var head = document.head;
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = juicerCssUrl;
  link.media = 'all';
  head.appendChild(link);

  var script = document.createElement('script');
  script.src = juicerJsUrl;
  head.appendChild(script);
}

// Call the function directly
loadJuicer();

</script>