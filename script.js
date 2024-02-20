$(document).ready(function() {
    // Configurações da API do Trello
    const apiKey = 'b76be47a628c4ddd2f15a1d1d79f664f';
    const token = 'ATTA783e4253ab6b04a5671a6babdd3585460977e708bfe5c9297d4b5cd55f2505bf9EDD17BB';
    const boardId = 'iyErhEbs';

    $('#createCardForm').submit(function(event) {
        event.preventDefault();

        // Coletar os dados do formulário
        const productName = $('input[name="productName"]').val();
        const vendorName = $('input[name="vendorName"]').val();
        const productDescription = $('textarea[name="productDescription"]').val();

        // Determinar o ID da lista com base no nome do vendedor
        let listId;
        const firstLetter = vendorName.charAt(0).toUpperCase();
        switch (firstLetter) {
            case 'L':
                listId = '65d3ff0c825a6c88247f8245';
                break;
            case 'F':
                listId = '65d3ff16e63abf3618e74c82';
                break;
            case 'W':
                listId = '65d3ff1dac508673f403f625';
                break;
            case 'E':
                listId = '65d3ff139a93494d89159f31';
                break;
            // Adicione mais casos para outras letras conforme necessário
            default:
                listId = '65d3ff349ce0b130621ba87';
                break;
        }

        // Montar o texto do cartão
        const cardText = `Nome do Produto: ${productName}\nDescrição do Produto: ${productDescription}`;

        // Requisição para criar um cartão no Trello
        $.ajax({
            url: `https://api.trello.com/1/cards?key=${apiKey}&token=${token}&idList=${listId}&name=${productName}&desc=${cardText}`,
            type: 'POST',
            success: function(response) {
                alert('Cartão criado com sucesso!');
                // Limpa o formulário após o envio
                $('#createCardForm')[0].reset();
            },
            error: function(error) {
                console.error('Erro ao criar cartão:', error.responseText);
                alert('Erro ao criar cartão. Por favor, tente novamente.');
            }
        });
    });
});
