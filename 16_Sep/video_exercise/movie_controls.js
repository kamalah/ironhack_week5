var vid = document.querySelector('video');
$('#best').on('click', function(event) {
					event.preventDefault()
					vid.currentTime = 13;
				});
$('#loop').on('click', function(event) {
					event.preventDefault()
	if (vid.hasAttribute('loop')) {
		vid.removeAttribute('loop')
		$('#loop').text("Loop")
	} else {
		vid.setAttribute('loop',true)
		$('#loop').text("Un-loop")				
	}
});

$('#restart').on('click', function(event) {
					event.preventDefault()
					vid.currentTime = 0;
				});