$(document).ready(function(){
	console.log("hello");
	

	var controller = new ScrollMagic.Controller();
	var timeline = new TimelineMax()

    .add(TweenMax.to("#boot", 400, {rotation: "+=180", ease:Linear.easeNone}))
     .add(TweenMax.to("#boot", 400, {rotation: "-=180", ease:Linear.easeNone}))
     .add(TweenMax.to('#ping',5,{rotation:"+=3600"}))
       .add(TweenMax.to("#scroll", 20, {rotation: "+=3600", ease:Linear.easeNone}))
    .add(TweenMax.to('#scroll ',400,{transform:'rotation(+=300)',transform:"translate(400px,400px)", ease:Linear.easeNone}))
    // .add(TweenMax.to("#scroll", 20, {rotation: "+=36000", ease:Linear.easeNone}))
      .add(TweenMax.to("#scroll", 20, {rotation: "+=3600", ease:Linear.easeNone}))
    .add(TweenMax.to('#scroll',400,{transform:"translate(-100px,700px)",ease:Linear.easeNone,delay:200}))
      .add(TweenMax.to("#scroll", 20, {rotation: "+=3600", ease:Linear.easeNone}))
    .add(TweenMax.to('#scroll',400,{transform:"translate(0px,900px)",ease:Linear.easeNone,delay:200}))
      .add(TweenMax.to("#scroll", 20, {rotation: "+=3600", ease:Linear.easeNone}))
    .add(TweenMax.to('#scroll',400,{transform:"translate(-100px,1100px)",ease:Linear.easeNone,delay:200}))
      .add(TweenMax.to("#scroll", 20, {rotation: "+=3600", ease:Linear.easeNone}))
    .add(TweenMax.to('#scroll',400,{transform:"translate(0px,1300px)",ease:Linear.easeNone,delay:200}))
      .add(TweenMax.to("#scroll", 20, {rotation: "+=3600", ease:Linear.easeNone}))
    .add(TweenMax.to('#scroll',400,{transform:"translate(-100px,1500px)",ease:Linear.easeNone,delay:200}))
    .add(TweenMax.to("#scroll", 20, {rotation: "+=3600", ease:Linear.easeNone}))
    .add(TweenMax.to('#scroll ',400,{transform:"translate(400px,1800px)", ease:Linear.easeNone,delay:200}))
     .add(TweenMax.to("#scroll", 20, {rotation: "-=1800", ease:Linear.easeNone}))
    .add(TweenMax.to('#scroll',400,{transform:"translate(-100px,2000px)",ease: Circ.easeOut,delay:200}))
    // .add(TweenMax.to('#scroll',400,{transform:"myOrbit 4s linear infinite",ease:Linear.easeNone,delay:200}))

	// var tween = TweenMax.to("#scroll", 200, {rotation: "+=36000", top: 100, ease:Linear.easeNone})
	// 	TweenMax.to('#scroll',200,{left:100, ease:Linear.easeNone})

	var scene = new ScrollMagic.Scene({
		triggerElement: "#scrollContainer",
		triggerHook: 'onLeave',
		triggerHook:(.2),
		duration:2000
	})
	.setTween(timeline)// trigger a TweenMax.to tween
	// .setTween('#scroll',20000,{right:100, ease:Linear.easeNone})
	.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)

	// var scene2 = new ScrollMagic.Scene({
	// 	triggerElement: '#trigger1',
	// 	duration: 50
	// })
	// .setTween(".animate2",5, {bottom: 0, opacity: 1})
	// .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)

	// var scene3 = new ScrollMagic.Scene({
	// 	triggerElement: '#trigger1',
	// 	duration: 50
	// })
	// .setTween('.animate3',5,{opacity: 1, width: 200})
	// .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)

	controller.addScene([
		scene
		// scene2,
		// scene3
		// scene2
	]);
});