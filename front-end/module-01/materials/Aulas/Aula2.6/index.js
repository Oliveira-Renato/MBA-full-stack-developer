//EXEMPLO DE CURRYING

function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);
}

log(new Date(), "DEBUG", "Exemplo de currying");

const logCurrying = 
    date => 
        type => 
            message =>  
                console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);

logCurrying(new Date())("DEBUG")("Exemplo de currying");

let logNow = logCurrying(new Date());

logNow("DEBUG")("Exemplo de currying com parametro fixo");

let logDebugNow = logNow("DEBUG");

logDebugNow("Exemplo de nova funcao por currying com parametros fixos");
