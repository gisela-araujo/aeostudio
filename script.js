// simple lightbox + keyboard close
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const close = document.getElementById('lightbox-close');

document.querySelectorAll('.grid a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    lbImg.src = a.href;
    lb.hidden = false;
  });
});
close.addEventListener('click', () => lb.hidden = true);
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });
lb.addEventListener('click', e => { if (e.target === lb) lb.hidden = true; });
