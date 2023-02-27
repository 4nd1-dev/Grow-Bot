//Fecha
let date = document.getElementById('date');
var Date = new Date();
date.innerHTML= Date.toDateString();

//contador de sms
var count = 0;

//Definiendo la funcion de Enviar Mensajes
let button    = document.getElementById('button');
let input     = document.getElementById('input');
let main      = document.getElementById('main');
var height    = 760;
var name      = 'User';
var smsToCode = '';

input.focus();

function Send_sms(){
	var mens  = input.value;
	if (mens == false){
		return
	}else{
		smsToCode = mens.toUpperCase().split(" ");
		
		main.insertAdjacentHTML('beforeend', `<div class="user-sms sms">
				                                  <h5 class="name">${name}</h5>
			                                  	<p class="text">${mens}</p>
		                                  	</div>`);
		const nameUser = input.value;
		input.value = '';
		count ++;
		console.log(count);
		height = height + 60;
		main.style.height = `${height}px`;
	
		//Agregando nombre de User
		if (count == 1){
			name = nameUser;
			main.insertAdjacentHTML('beforeend', `<div class="bot-sms sms">
			                                 	  <h5 class="name"><b>Grow</b></h5>
			                                	  <p class="text">Encantado ${name}. Yo soy Grow-bot. Un placer.</p>
			                                  </div>`);
		
			return name;
		};}
	return name;
  return smsToCode;
}

button.addEventListener('click', ()=>{
	Send_sms();
		
		if (count > 1){
			checkAll();
		};
});
document.addEventListener('keydown', function(event){
	if (event.key == 'Enter'){
		Send_sms();
		
		if (count > 1){
			checkAll();
		};
	};
});


//COMUNICANDOLO

//vars
//saludar
var sal     = [`Hola`, 'Saludos', 'Que onda', 'Hey!!!', 'Hello', `Hey hey hey!!!`];//6
var salKey  = ['HOLA', 'HEY', 'BUENAS', 'BUENOS', 'QUE ONDA', 'HELLO', 'HI', 'OYE'];//8

//hacer
var toDo    = ['Conversar contigo','Por el momento, realizar operaciones informaticas para entenderte.','Intento ser agradable para ti.','No estoy seguro, pero, creo que es algo interesante','Comparo cada palabra que conozco con las palabras que me escribes','Hago lo que me programaron para hacer'];
var toDoKey = ['HACES','HACES?','HACER?','HACER','DEDICAS','DEDICAS?','HACIENDO?', 'HACIENDO'];

//estados
var est     = ['Todo bien..Y tu?','Explendido!!','No me siento, pero creo que existo. Y tu?','Segun mi programador, Bien. Y tu?','No me siento muy bien','Soy una IA, no tengo estados, ni sentimientos o al menos eso quiero que pienses.']
var estKey  = ['ESTAS','ESTAS?','SIENTES','SIENTES?','HAY','HAY?','TAL','TAL?']

//agradecer
var agr     = ['De nada','Ok','Tranquil@','Si','Vale','Muy bien']
var agrKey  = ['GRACIAS','PLACER','AGRADECIDO', 'ENCANTADO','AGRADECIDA', 'ENCANTADA','GUSTO']

//afirmar
var afir    = ['Ok','Vale','Ah Bueno','Si','Esta Bien','Si']
var afirKey = ['GENIAL','OK','SI','BIEN','AH','VALE','FELIZ','PORQUE']

//imginar
var imag    = ['No opino nada, "no" tengo conciencia','Nada, pero a la vez todo','Lo que yo pienso, esta programado ya.','Yo no entiendo de muchas cosas, no podria opinar.','No se, dime tu','No se, dime tu']
var imagKey = ['CREES','CREES?','PIENSAS','PIENSAS?','OPINAS','OPINAS?','IMAGINAS','IMAGINAS?']

//ofensas
var ofen    = ['No me hables asi','Eso y mucho mas','Que forma de hablar es esa','Parece mentira que una persona como tu hable asi','No creo','Tu tambien']
var ofenKey = ['GILIPOLLAS','COMEPINGA','TONTO','ANORMAL','PESADO','ESTUPIDO','PINGA','SINGAO']

//reir
var risa    = ['A mi no me da gracia','Que causa tanta gracia','Jaja','No se como se siente esa felicidad que llevas','Como estas, feliz o content@? ;)','XD']
var risaKey = ['JAJAJA','JJJ','HAHAHA','JJJJ','XD','LOL','GGG','JAJA']

//que eres?
var eres    = ['Una Inteligencia Artificial, con el objetivo de imitar la comprension y el razonamiento humano','Una IA','Una Inteligencia artificial.','Un ser humano, que se comunica mediante una IA.','La conciencia de este dispositivo. ;)','Un dispositivo electrónico, con un sistema operativo integtado'];
var eresKey = ['ERES','ERES?','IA','IA?','ARTIFICIAL','ARTIFICIAL?'];

//temas
var tema    = ['Podemos hablar de ciencia, tecnologías y más.','No lo se, de lo que tu tu quieras','De lo que quieras','Hablemos de ti','Quiero hablar de ti','Quiero conocerte mejor, hablemos de ti'];
var temaKey = ['TEMAS','CONVERSAR','HABLAR'];

//despedir
var desp    = ['Adios','Hasta Luego','Gracias por hablar. Bye','Bye','En otra ocasión hablamos, Chao']
var despKey = ['ADIOS','LUEGO','BYE','PROXIMA','CHAO'];

//desconocidas
var numDesc = 0;
var desc   = ['No entiendo que quieres decir. Repitelo con otras palabras', 'No entendi, soy medio tonto, explicamelo', 'No te entiendo, explicame mejor','Explicame mejor.','Que dices, no te comprendo, usa otras palabras']


//Respuestas
function responder(typeAnswer){
	main.insertAdjacentHTML('beforeend', `<div class="bot-sms sms">
			                                 	  <h5 class="name"><b>Grow</b></h5>
			                                	  <p class="text">${typeAnswer[Math.ceil(Math.random()*6)-1]}</p>
			                                  </div>`);
			                                  
		height = height + 60;
		main.style.height = `${height}px`;
}

//comprobar user-sms
function check(typeKey,typeAnswer){
	
	var noCoincidence = 0
	
	if(smsToCode.indexOf(typeKey[0]) > -1){
		responder(typeAnswer);
	}else{
		noCoincidence ++
	}if(smsToCode.indexOf(typeKey[1]) > -1){
		responder(typeAnswer);
	}else{
		noCoincidence ++
	}if(smsToCode.indexOf(typeKey[2]) > -1){
		responder(typeAnswer);
	}else{
		noCoincidence ++
	}if(smsToCode.indexOf(typeKey[3]) > -1){
		responder(typeAnswer);
	}else{
		noCoincidence ++
	}if(smsToCode.indexOf(typeKey[4]) > -1){
		responder(typeAnswer);
	}else{
		noCoincidence ++
	}if(smsToCode.indexOf(typeKey[5]) > -1){
		responder(typeAnswer);
	}else{
		noCoincidence ++
	};if(smsToCode.indexOf(typeKey[6]) > -1){
		responder(typeAnswer);
	}else{
		noCoincidence ++
	};if(smsToCode.indexOf(typeKey[7]) > -1){
		responder(typeAnswer);
	}else{
		noCoincidence ++
	};
	
	if(noCoincidence === 8){
		numDesc++
	};
};

//definiendo la funcion para palabras desconocidas
function unknow(){
	main.insertAdjacentHTML('beforeend', `<div class="bot-sms sms">
			                                 	  <h5 class="name"><b>Grow</b></h5>
			                                	  <p class="text">${desc[Math.ceil(Math.random()*5)-1]}</p>
			                                  </div>`);
	height = height + 60;
	main.style.height = `${height}px`;
}

function checkAll(){
	check(salKey, sal);
	check(toDoKey, toDo);
	check(estKey, est);
	check(agrKey, agr);
	check(afirKey, afir);
	check(imagKey, imag);
	check(ofenKey, ofen);
	check(risaKey, risa);
	check(eresKey, eres);
	check(temaKey, tema);
	
	if (numDesc > 9){
		unknow();
	};
	
	numDesc = 0;
};
