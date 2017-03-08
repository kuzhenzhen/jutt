window.onload = writemessage;

function writemessage (){
$("#hanzi").mouseover(function(){
	var x = document.getElementById("myaudio");
	x.play();
});

$("#ju0").append("hello");
$("#ju1").append("hello, world");
$("#ju2").append("^_^");
$("body").keydown(function(event){
	if (event.keyCode==13 ){
	var y= $("#shuru").val();
	$("#shuru").val("") ;
	var element1=document.getElementById("ju1");
	element1.innerHTML=y;
    var juzis=["私はあなたが好き","どのようにあなたについて？","私はあなたを好きではない","ありがとうございます",
	"もしもし","おはようございます"
	];
    var randomindex=Math.floor(Math.random()*juzis.length );
    var words=juzis[randomindex];
    var element2=document.getElementById("ju2");
	element2.innerHTML=words;
	
	
	}
	
});

}