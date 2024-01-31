const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {

    //Primeira função, responsavel para iniciar as respostas determinando categorias
    function categoria_principal(){

        if(message.body.toLocaleLowerCase() === 'opções'){
            client.sendMessage(message.from,'*DIGITE O NUMERO DA OPÇÃO DESEJADA:* \n\n 1 - Kits festa \n 2 - Cardápio de salgados \n 3 - Cardápio de doces' );
        }

        if(message.body.toLowerCase() === '1'){
            client.sendMessage(message.from,'*KITS FESTA* \n\n Kit(10 pessoas)\n 40 doces(2 tipos)\n 60 salgados (3 tipos) \n *R$: 130,00* \n\n Kit(15 pessoas)\n 1,5kg torta \n 60 doces(3 tipos)\n 90 salgados (3 tipos) \n *R$: 192,00* \n\n Kit(20 pessoas)\n 2kg torta \n 80 doces(4 tipos)\n 120 salgados (5 tipos) \n *R$: 260,00*' );
        }

        if(message.body.toLowerCase() === '2'){
            client.sendMessage(message.from,'*SALGADOS* \n\n Coxinha\n Risole presunto e queijo\n Bolinho de 2 queijo\n Maravilha de carne\n Bol. de queijo c/  azeitona\n Empada de frango\n Empada de camarão\n Pastel de forno\n Bolinho de calabresa\n Bolinho de charque\n Caiçara\n Croquete de bacalhau\n Quiches 4 queijo\n Camarão empanado\n Barquete\n\n **OBS.: O mínimo é 20 unidade por sabor.**');
        }

        if(message.body.toLowerCase() === '3'){
            client.sendMessage(message.from, '**DOCES TRADICIONAIS**\n\n Brigadeiro\n Bem cansado\n Beijinho\n Ouriço\n Moranguinho\n Brigadeiro de churros\n Cajuzinho\n Napolitano\n Tortinha de limão\n Tortinha 3 sabores\n Surpresa de uva\n Olho de sogra\n\n  **OBS:. Pedido mínimo por  doce ou salgado é 20 de cada.**')
        }
        
        

    }

    //inicia chamando a categoria princial
    categoria_principal()
    
});

client.initialize();
 
