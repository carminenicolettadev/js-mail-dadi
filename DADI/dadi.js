//chiedo il nome del giocatore n.1
var giocatoreuno;
giocatoreuno = prompt( "Ciao giocatore uno inserisci il tuo nome" );
alert( "benvenuto " + giocatoreuno );
document.getElementById( 'giocatoreuno' ).innerHTML = giocatoreuno;

//chiedo il nome del giocatore n.2
var giocatoredue;
giocatoredue = prompt( "Ciao giocatore due inserisci il tuo nome" );
alert( "benvenuto " + giocatoredue );
document.getElementById('giocatoredue').innerHTML = giocatoredue;

//lancio il dado del giocatore uno
var dadogiocatoreuno = Math.floor( Math.random() * 6 + 1 );
alert( giocatoreuno + " è uscito il N."+ dadogiocatoreuno );
document.getElementById( 'dadogiocatoreuno' ).innerHTML = dadogiocatoreuno;

// Lancio il dado del giocatore due
var dadogiocatoredue = Math.floor( Math.random() * 6 + 1 );
alert( giocatoredue + " è uscito il N."+ dadogiocatoredue );
document.getElementById( 'dadogiocatoredue' ).innerHTML = dadogiocatoredue;

//controllo se c'è un vincitore o se la partita finisce in parità
var vincitore;
if( dadogiocatoreuno > dadogiocatoredue ){
  alert( giocatoreuno + " hai vinto" );
  vincitore = giocatoreuno;
}else if ( dadogiocatoreuno < dadogiocatoredue ){
  alert(giocatoredue + " hai vinto");
  vincitore = giocatoredue;
}else if( dadogiocatoreuno == dadogiocatoredue ){
  alert( giocatoreuno + " e " + giocatoredue + " avete pareggiato" );
  vincitore = ( "NESSUNO AVETE PAREGGIATO!!" );
}
document.getElementById( 'il-vincitore' ).innerHTML = vincitore;
