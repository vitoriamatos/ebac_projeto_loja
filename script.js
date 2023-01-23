
$(document).ready(function () {


    for (let i = 0; i <= 6; i++) {

        $("#image" + i).hover(
            function () {
                $(this).attr("src", './images/tshirts/product' + i + '-2.png');
            },
            function () {
                $(this).attr("src", './images/tshirts/product' + i + '.png');
            }
        );

        touch = document.getElementById("#image" + i);

        function touch(event) {
            if (event.type == 'touchstart') {
                $(this).attr("src", './images/tshirts/product' + i + '-2.png');
            }
            if (event.type == 'touchend') {
                $(this).attr("src", './images/tshirts/product' + i + '.png');
            }
        }
    }

});