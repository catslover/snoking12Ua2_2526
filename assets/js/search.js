(function(){
  function attachFilter(listId, inputId){
    var list = document.getElementById(listId);
    var input = document.getElementById(inputId);
    if(!list || !input) return;
    input.addEventListener('input', function(){
      var q = input.value.toLowerCase();
      var cards = list.querySelectorAll('[data-item]');
      cards.forEach(function(c){
        var txt = c.getAttribute('data-index') || c.textContent;
        c.style.display = txt.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
  document.addEventListener('DOMContentLoaded', function(){
    attachFilter('tournament-list','tournament-search');
    attachFilter('event-list','event-search');
  });
})();