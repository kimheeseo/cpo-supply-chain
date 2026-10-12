/* Scope the enlarged labels and horizontal panning to the requested main 2D view. */
(function(){
  function mount(){
    var stage=document.querySelector('.reference-image-stage[data-passive-2d="true"]');
    if(!stage||stage.parentElement.classList.contains('cpo2d-label-scroll'))return;
    var scroller=document.createElement('div');
    scroller.className='cpo2d-label-scroll';scroller.tabIndex=0;
    scroller.setAttribute('role','region');
    scroller.setAttribute('aria-label','2D CPO architecture · enlarged labels · horizontal scroll');
    stage.parentNode.insertBefore(scroller,stage);scroller.appendChild(stage);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
