const mainElement = document.querySelector('main#main');
mainElement.remove();


const newHeader = document.createElement('h1');

newHeader.id = 'victory';


const championName = 'Emmanuel Nyaanga';
newHeader.textContent = `${championName} is the champion`;


document.body.appendChild(newHeader);