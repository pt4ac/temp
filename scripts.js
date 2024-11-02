let triggered_once = false;

document.addEventListener('DOMContentLoaded', function() {
    // Show the initial content
    showContent('video');
    launchConfetti();
});

var e = document.getElementById('heading');
e.addEventListener('click', reset);

function reset() {
    showContent('video');
}

function applyStyles() {
    var element = document.getElementById('content');
    if (element) {
        element.style.display = 'flex';
        element.style.justifyContent = 'center';
        element.style.alignItems = 'center';
        element.style.height = '100%';
    } else {
        console.error('Element with ID "content" not found.');
    }
}

function clearStyles() {
    var element = document.getElementById('content');
    element.style.display = 'revert';
    element.style.justifyContent = 'revert';
    element.style.alignItems = 'revert';
    element.style.height = 'revert';
}

function showContent(page) {
  let content = document.getElementById('content');
  content.style.opacity = 0; // Start with fade-out

  setTimeout(function() {
      content.innerHTML = ''; // Clear previous content

      let items = document.querySelectorAll('.selected');
      items.forEach(function(item) {
          item.classList.remove('selected');
      });

      // Add logic for each new page
      if (page === 'video') {
          document.getElementById('1').classList.add('selected');
          applyStyles();
          content.innerHTML = `<iframe frameborder="0" allowfullscreen="" scrolling="no" allow="autoplay;fullscreen" src="https://streamable.com/e/oxemgi?" style="width: 100%; aspect-ratio: 1920 / 1080; box-shadow: rgb(51, 51, 51) 10px 10px 35px -10px;"></iframe>`;
      } else if (page === 'mammoth') {
          document.getElementById('2').classList.add('selected');
          clearStyles();
          content.innerHTML = `<h2 class="c-heading"><a href="https://pragyamtiwari.github.io/mammothrun/" target="_blank">Amherst Mammoth Run</a></h2><a href="https://pragyamtiwari.github.io/mammothrun/" target="_blank"><img class="c-img" src="mammothrunimage.png" width="80%"></a><p class="c-para"><b><a href="https://pragyamtiwari.github.io/mammothrun/" target="_blank">Click image to play!</a></b><br><br>Stop the mammoth from colliding into buildings! (Based on the Google Chrome Dino Game). See any familiar buildings?</p>`;
      } else if (page === 'grammar') {
          document.getElementById('3').classList.add('selected');
          clearStyles();
          content.innerHTML = `<h2 class="c-heading"><a href="https://pragyamtiwari.github.io/grammarally/" target="_blank">Grammar Ally</a></h2><a href="https://pragyamtiwari.github.io/grammarally/" target="_blank"><img class="c-img" src="grammarallyimage.png" width="80%"><p class="c-para"><b>Click image to play!</b></a><br><br>Gamifying learning grammar and punctuation for tests and also for fun. What's your high score?</p>`;
      } else if (page === 'akinator') {
          document.getElementById('4').classList.add('selected');
          clearStyles();
          content.innerHTML = `<a href="https://aiakinator.pythonanywhere.com/" target="_blank"><h2 class="c-heading">AI Akinator</h2><img class="c-img" src="raki.png" width="80%"><p class="c-para"><b>Click image to play!</a></b><br><br>AI-based 20 questions. Well, unlimited questions really. Guess the famous politician by asking AI Yes/No Questions!</p>`;
      } else if (page === 'elections') {
          document.getElementById('5').classList.add('selected');
          clearStyles();
          content.innerHTML = `<a href="https://pragyamtiwari.github.io/electionseye/" target="_blank"><h2 class="c-heading">ElectionsEye</h2><img class="c-img" src="ee.png" width="80%"><p class="c-para"><b>Click image to visit!</a></b><br><br>2024 saw over half the global population participating in the election. This website tries to summarize them all!</p>`;
      } else if (page === 'ikwyaf') {
          document.getElementById('6').classList.add('selected');
          clearStyles();
          content.innerHTML = `<a href="https://pragyamtiwari.github.io/ikwyaf/" target="_blank"><h2 class="c-heading">I Know Where You Are From</h2><img class="c-img" src="ip.png" width="80%"><p class="c-para"><b>Click image to play!</a></b><br><br>The webiste will figure out where you are from. Works 100% of the time, 90% of the time.</p>`;
      } else if (page === 'tweeter') {
          document.getElementById('7').classList.add('selected');
          clearStyles();
          content.innerHTML = `<a href="https://pragyamtiwari.github.io/quote-e-mon/" target="_blank"><h2 class="c-heading">Quote-é-Mon</h2><img class="c-img" src="qem.png" width="80%"><p class="c-para"><b>Click image to play!</a></b><br><br>Guess whose quote that is. I've tried to keep them funny ones.</p>`;
      } else if (page === 'sentiment') {
          document.getElementById('8').classList.add('selected');
          clearStyles();
          content.innerHTML = `<a href="https://sapapragyamtiwari.pythonanywhere.com/" target="_blank"><h2 class="c-heading">EmotionExtractor</h2><img class="c-img" src="sa.png" width="80%"><p class="c-para"><b>Click image to visit!</a></b><br><br>Reading the emotions from letters. Harder than it looks...</p>`;
      } else if (page === 'clock') {
          document.getElementById('9').classList.add('selected');
          clearStyles();
          content.innerHTML = `<a href="https://pragyamtiwari.github.io/countingclock/" target="_blank"><h2 class="c-heading">Counting Clock</h2><img class="c-img" src="cc.png" width="80%"><p class="c-para"><b>Click image to visit!</a></b><br><br>Recreation of Dutch Flower Reverse Auctions, where time literally is money.</p>`;
      }

      content.style.opacity = 1; // Trigger fade-in after content is updated
  }, 300); // This delay should match the transition duration (0.3s)
}

function launchConfetti() {
    var duration = 2.5 * 1000; // 2.5 seconds
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 4,
            startVelocity: 20,
            spread: 360,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Mobile warning logic (unchanged)
document.addEventListener('DOMContentLoaded', function() {
    function checkScreenWidth() {
        const mobileWarning = document.getElementById('mobile-warning');
        if (window.innerWidth < 750 && !triggered_once) {
            mobileWarning.style.display = 'block';
        } else {
            mobileWarning.style.display = 'none';
        }
    }

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    window.proceedAnyway = function() {
        const mobileWarning = document.getElementById('mobile-warning');
        triggered_once = true;
        mobileWarning.style.display = 'none';
    };
});
