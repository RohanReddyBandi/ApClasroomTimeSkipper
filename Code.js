if (window.quizClickerRunning) 
{
  
} 
else 
{
window.quizClickerRunning = true;

  function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

  async function runQuiz() {
    const min = 30000;
    const max = 40000;

    for (let i = 0; i < 60 && window.quizClickerRunning; i++) {
      const delay = Math.random() * (max - min) + min;
      console.log(`Waiting ${Math.round(delay / 1000)} seconds...`);

      await sleep(delay);

      if (!window.quizClickerRunning) break;

      const btn = document.querySelector('[data-test-id="next-button"]');

      if (btn && !btn.disabled) 
      {
        btn.click();
        console.log(`Clicked ${i + 1}/60`);
      } 
      else 
      {
        console.log("Button not ready");
      }

      await sleep(3000);
    }

    window.quizClickerRunning = false;
    console.log("Done.");
  }

  runQuiz();
}
