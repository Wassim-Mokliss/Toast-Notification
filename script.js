console.log('connecté !');
// Je selctionne et je stock le bouton
const btn = document.querySelector('.btn');
// Je selectionne et stock la div notification
const ctn = document.querySelector('.container-notifications');
console.log(ctn);

btn.addEventListener('click', function(){
    console.log('clické');
    const notification = document.createElement('div');
    console.log(notification);
    notification.classList.add('toast');
    notification.innerText = ('Votre fichier est bien enregistré !');
    ctn.appendChild(notification);
    setTimeout(function(){
        notification.remove();
    }, 2000)
});