function toggleClasses() {
  [].map.call(document.querySelectorAll('.cube'), function(el) {

                // classList is the key here - contains functions to manipulate
                // classes on an element
                el.classList.toggle('toRight');
            });
  // document.getElementById('cube').classList.add('toRight');
}
