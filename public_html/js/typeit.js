$('#welcome1').typeIt({
	strings: ['Software Developer.','Web Developer.', 'Welcome to my digital space.'],
	speed: 125,
	breakLines: false,
	autoStart: false
});

$('#hi').typeIt({
	speed: 125

})
	.tiType('Bonjour,')
	.tiPause(11000)
	.tiDelete(8)
	.tiType('はじめまして,')
	.tiPause(500)
	.tiDelete(7)
	.tiType('你好,')
	.tiPause(500)
	.tiDelete(3)
	.tiType('Hi,')
	.tiPause(800)
	.tiType(' I\'m Shihlin.');
