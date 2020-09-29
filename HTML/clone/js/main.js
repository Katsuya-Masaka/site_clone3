'use strict'
{
  
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    close.classList.remove('hidden');
    open.classList.add('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    close.classList.add('hidden');
    open.classList.remove('hidden');
  });


//   const headerItem = document.getElementById('headeritem');
//   const hH = headerItem.clientHeight;
//   let pos = 0;
  
//   const onScroll = () => {
//   if(pos < hH) {
//     headerItem.classList.remove('hidden');
//   } 
// };

//    window.addEventListener("scroll", () => {
//     pos = window.scrollY;
//     onScroll();
//   });

// (function() {
//   const target     = document.getElementById('headeritem'),
//         height     = 0;
//   let offset       = 0,
//       lastPosition = 0,
//       ticking      = false;
      
//   function onScroll() {
//     if (lastPosition > height) {
//       if (lastPosition > offset) {
//         target.classList.remove('head-animation');
//       } else {
//         target.classList.add('head-animation');
//       }
//       offset = lastPosition;
//     }
//   }
  
//   window.addEventListener('scroll', function(e) {
//     lastPosition = window.scrollY;
//     if (!ticking) {
//       window.requestAnimationFrame(function() {
//         onScroll(lastPosition);
//         ticking = false;
//       });
//       ticking = true;
//     }
//   });
// })();




}