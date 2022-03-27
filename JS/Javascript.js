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

var typingArray = ["Joanna Assaeedi"];
var textposition = 0;
var speed = 170;

typewriter = () => {
	document.querySelector('#typing').innerHTML = typingArray[0].substring(0, textposition) + "<span>\u25ae</span>";

	if (textposition++ != typingArray[0].length) {
		setTimeout(typewriter,speed);
	}
	else{
		document.querySelector('#typing').innerHTML = typingArray[0].substring(0, textposition) + "<span></span>";
	}
}

window.addEventListener("load",typewriter);
