function maincall(){
	var diwali_msg=["May the light of the diyas guide you towards the way of wealth and prosperity. Happy Diwali!","May these illuminating Diwali lights surround you and your loved ones with happiness and positivity. Happy Deepawali!","Diyon ki roshni se jhilmilata aangan ho, patakhon ki goonjo se aasman roshan ho. Aisi aaye jhoom ke yeh diwali, har taraf kushiyon ka mausam ho!"];
	var index=Math.floor(Math.random()*diwali_msg.length);
	document.getElementById("resultdiv").innerHTML=diwali_msg[index];
}