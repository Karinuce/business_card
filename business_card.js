function infoGoes() {
    document.getElementById("BC-submit").submit();
  }

function infoDis() {
    document.getElementById("BC-submit").reset();
}

let BC = [];
const businessCard = (ev)=>{
    ev.preventDefault();
    let BSs= {
        name: document.getElementById('name').value,
        busad: document.getElementById('busad').value,
        email: document.getElementById('email').value,
        phn: document.getElementById('phn').value,
        jb: document.getElementById('jb').value
    }
    BC.push(BCs);
    document.querySelector('form').reset();

    localStorage.setItem('BC-submit', JSON.stringify(BC));
    }
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', businessCard)
});

