const btn = document.querySelector("#btn");
const body = document.body;

btn.addEventListener("click" , e => {
  const overlayElement = document.createElement('div');
  overlayElement.classList.add('overlay');

  overlayElement.addEventListener('click', e => {
    if (!e.target.classList.contains('overlay__content')){
    closeElement.click();  
    }
  })

  const containerElement = document.createElement('div');
  containerElement.classList.add('overlay__container');

  const contentElement = document.createElement('div');
  contentElement.classList.add('overlay__content');

  contentElement.innerHTML = "Привет <b>мир</b> !" ;

  const closeElement = document.createElement('a');
  closeElement.classList.add('close');
  closeElement.textContent = 'x';
  closeElement.href = "#";

  closeElement.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);
  body.appendChild(overlayElement);

  return overlayElement;
})