//GSAP variables
var master = new TimelineMax({repeat:-1}),
    card = $(".crd"),
    firstCard = $(".firstCard"),
    secondCard = $(".secondCard"),
    thirdCard = $(".thirdCard"),
    fourthCard = $(".fourthCard"),
    cardContent = $('.crd_cntnt'),
    cardContentClone = $('.crd_cntnt_two'),
    cardButton = $('.crd_btn'),
    cardCursor = $('.crd_arrow'),
    splash = $('.splash'),
    correct = $('.correct');

master.set(secondCard,{transformOrigin:"50% 50%",opacity:"-=.3",scale:"-= .15",y: -30})
      .set(thirdCard,{transformOrigin:"50% 50%",opacity:"-=.5",scale:"-= .25",y: -50})
      .set(fourthCard,{transformOrigin:"50% 50%",opacity:"0",scale:"-= .35",y: -65})
      .set(cardContentClone,{transformOrigin:"50% 50%",opacity:"0",scale:"-= .15",y: -30})
      .set( splash,{drawSVG: 0})
      .add( cardSlideIn())
      .add( cursor())
      .add( correctAnswer(),'-= 1')

//card slide in
function cardSlideIn(){
    var tl = new TimelineMax();
    tl.to([cardContent,firstCard],.3, {transformOrigin:"50% 50%",opacity:0,scale:"+= .15",y: +30},'cardStart')
      .to(secondCard,1, {transformOrigin:"50% 50%",opacity:1,scale:"+= .15",y: 0},'cardStart')
      .to(thirdCard,1, {transformOrigin:"50% 50%",opacity:"+= .2",scale:"+= .1",y:'+=20'},'cardStart')
      .to(fourthCard,1, {transformOrigin:"50% 50%",opacity:"+= .2",scale:"+= .1",y: "+=15"},'cardStart')
      .to(cardContentClone,1, {transformOrigin:"50% 50%",opacity:1,scale:"+= .1",y: 0},'cardStart')
    return tl;
}

//cursor animation
function cursor(){
    var tl = new TimelineMax();
    tl.to(cardCursor,.7, {y:-10, x:-65},'cursorIn')
      .to(cardButton,.2, {transformOrigin:"50% 50%",scale:"+=.3",ease:Back.easeOut})
      .to(cardCursor,.04, {y: "+=3"},"+=.3")
      .to(cardCursor,.04, {y: "-=3"})
      .set( splash,{display: 'block'})
      .fromTo( splash,.5, {drawSVG: '100%'},{drawSVG: '0'})
      .to(cardCursor,.7, {y:0, x:0},"cursorOut")
      .to(cardButton,.3, {transformOrigin:"50% 50%",scale:"-=.3",ease:Back.easeOut},'cursorOut')
    return tl;
}

//correctAnswer answer
function correctAnswer(){
    var tl = new TimelineMax();
    tl.set(correct,{display: 'block'})
      .from(correct,.7, {transformOrigin:"50% 50%",opacity:0,scale:0,ease:Back.easeOut})
      .to(correct,.4, {transformOrigin:"50% 50%",opacity:0,scale:0},1.5)
      .to(correct,1, {})
    return tl;
}











