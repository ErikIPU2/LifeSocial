
// Inicia a tela basico do jogo

var INTERVAL;

var idade;
var diasVividos;
var money;

var fomebarL = 100;
var saudebarL = 100;

 function initGame(indexUser) {

	$('.sidenav').sidenav();

	$("#loginModal").modal("close");

	$(".gameTela").show();

	$.get("/getUserdata", (data, status) => {

		idade = data[indexUser].dados.idade;
		diasVividos = data[indexUser].dados.diasVividos;
		money = data[indexUser].dados.money;

		$("#nomePrincipal").html(data[indexUser].dados.nome + " "+ data[indexUser].dados.sobrenome);
		$("#anos").html("Anos vividos: "+ idade);
		$("#vivo").html("Dias vividos: "+ diasVividos);
		$("#money").html("Dinheiro: " + money);

		passDay();

	});
}

$("#fotoDiv").click(function() {
	$("#file").click();
});

$("#option").click(function() {
	stopDay();
})


function passDay() {
	INTERVAL =  setInterval(() => {
		diasVividos++;
		if (diasVividos % 365 == 0) {
			idade++;
		}

		if ($("#fomeBar").css("width") <= 0 ) {
			saudebarL = 0;
		}
		else {
			$("#fomeBar").css("width", fomebarL-- +"%");
		}

		saudebarL = saudebarL - 0.5;


		$("#saudeBar").css("width", saudebarL+"%");

		


		refreshData();

	}, 100);
}

function stopDay() {
	clearInterval(INTERVAL);
}

function refreshData() {
	$("#anos").html("Anos vividos: "+ idade);
	$("#vivo").html("Dias vividos: "+ diasVividos);
	$("#money").html("Dinheiro: " + money);
}

