fetch('http://192.168.43.7:8888/api/ukhan-list')
  .then(function (blob) {
    return blob.json();
  })
  .then(handleReponse)
  .catch(function (err) {
    console.log(err);
    const blockquoteEl = document.querySelector("blockquote");
    blockquoteEl.textContent = err.message;
  })


function handleReponse (ukhanList) {
  const blockquoteEl = document.querySelector("blockquote");
  const generateButton = document.querySelector("button");
  generateButton.addEventListener('click', handleClick);

  function handleClick() {
    const randomIndex = Math.round(Math.random() * ukhanList.length);
    blockquoteEl.textContent = ukhanList[randomIndex];
  }
}
