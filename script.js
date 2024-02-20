$(document).ready(function() {
    const apiKey = 'b76be47a628c4ddd2f15a1d1d79f664f';
    const token = 'ATTA783e4253ab6b04a5671a6babdd3585460977e708bfe5c9297d4b5cd55f2505bf9EDD17BB';
    const boardId = 'iyErhEbs';

    $('#createCardForm').submit(function(event) {
        event.preventDefault();
        const productDescription = $('textarea[name="productDescription"]').val();
        const productName = $('input[name="productName"]').val();
        const vendorName = $('input[name="vendorName"]').val();
        let listId;
        if (vendorName) {
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
                default:
                    listId = '65d3ff349ce0b130621ba87b';
                    break;
            }
        }

        const cardText = `${productDescription}`;

        $.ajax({
            url: `https://api.trello.com/1/cards?key=${apiKey}&token=${token}&idList=${listId}&name=${productName}&desc=${cardText}`,
            type: 'POST',
            success: function(response) {
                alert('Cartão criado com sucesso!');
                $('#createCardForm')[0].reset();
            },
            error: function(error) {
                console.error('Erro ao criar cartão:', error.responseText);
                alert('Erro ao criar cartão. Por favor, tente novamente.');
            }
        });
    });
});
