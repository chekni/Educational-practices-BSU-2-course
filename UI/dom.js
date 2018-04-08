document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementsByClassName('scrollup')[0].onclick = function () {
        scrollTo(document.documentElement, 0, 300);
    };

    //показать еще
    document.getElementById('load-more-id').onclick = function () {
        document.getElementById('load-more-id').style.display = "none";
        document.getElementById('loading-state').style.display = "table";

        let posts = Module.getPhotoPosts(10, 10);

        document.getElementById('load-more-id').style.display = "table";
        document.getElementById('loading-state').style.display = "none";
    };

    //эффект кнопки для добавления фото
    document.getElementById('add-post').onclick = function () {
        document.getElementById('add-post').style.display = 'none';
    };

    function scrollTo(element, to, duration) {
        if (duration < 0) return;
        let difference = to - element.scrollTop;
        let perTick = difference / duration * 10;

        setTimeout(function () {
            element.scrollTop = element.scrollTop + perTick;
            scrollTo(element, to, duration - 10);
        }, 10);
    }

    DomModule.displayPhotoPosts(Module.getPhotoPosts());
    DomModule.initUser();




    let tr = document.getElementsByClassName("add-button");

    tr[0].onclick = function () {
        elem = document.getElementsByClassName('add-post')[0];
        if (!elem.classList.contains('active')) {
            elem.classList.add('active')
        } else {
            elem.classList.remove('active');

        }
    };




}());