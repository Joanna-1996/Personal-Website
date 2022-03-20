// $(document).ready(function(){
// 	$('#fullPage').fullpage({
// 		controlArrows: false,
// 		loopBottom: true,
// 		afterRender: function () {
// 			setInterval(function () {
// 				$.fn.fullpage.moveSlideRight();
// 			}, 3000);
// 		}
// 	});
// });
var myFullpage = new fullpage('#fullpage', {
		anchors: ['firstPage', 'secondPage', 'thirdPage','fourthPage','fifthPage','sixthPage','seventhPage'],
		sectionsColor: ['#4C5270'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['ME', 'Whoami', 'Education','Skills','Experiances','Projects','News']
});
