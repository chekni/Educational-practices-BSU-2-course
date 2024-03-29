var Module = (function () {

    var user = {};

    let allPostsShowed = false;

    var setUser = function (login, password) {
        user.login = login;

        user.password = password;
    };

    var getUser = function () {
        return user;
    };

    if (user.isAdmin) {
        localStorage.setItem("add-button", true);
    }

    var contentBlock = document.getElementsByClassName("content")[0];

    var filter = {};

    var countShowedPosts = 0;

    let setCountShowedPosts = function (num) {
        countShowedPosts = num;
    };


    var photoPosts = [
        {
            id: '1',
            idPerson: '1',
            author: 'annica',
            description: 'Воспоминания бесценны',
            createdAt: new Date(2018, 11, 26),
            photoLink: 'assets/photo1.png',
            favorites: ['Lola', 'No name', 'Karina', 'alexx'],
            likes: ['Nina', 'Viola', 'Mable'],
            hashTags: ['море', 'отпуск', 'Новая-Зеландия', 'былиВНовойЗеландии'],
            isLikedIt: false,
            isFavoritedIt: true
        },
        {
            id: '2',
            idPerson: '2',
            author: 'KlaraWrittenBlog',
            description: 'Сегодня наконец выбрались в зоопарк. Больше всего понравилось, конечно же, Аннабель.',
            createdAt: new Date(2017, 11, 23, 19, 43),
            photoLink: 'assets/photo2.png',
            favorites: ['Karina', 'Mable'],
            countFavorites: 2,
            likes: ['Santa'],
            countLikes: 1,
            hashTags: ['Аннабель', 'мойлюбимыйребенок', 'мыкупилизоопарк', 'какукрастьшляпу'],
            isLikedIt: false,
            isFavoritedIt: true
        },
        {
            id: '3',
            idPerson: '3',
            author: 'Lola',
            description: '',
            createdAt: new Date(2017, 11, 29, 3, 54, 0),
            photoLink: 'assets/photo3.png',
            favorites: ['KlaraWrittenBlog'],
            countFavorites: 1,
            likes: ['KlaraWrittenBlog'],
            countLikes: 1,
            hashTags: ['морскаязвезда', 'подводныекамни'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '4',
            idPerson: '4',
            author: 'Алина Воробьева',
            description: 'Почему бы не забежать на кофе к хорошему человеку?)',
            createdAt: new Date(2018, 0, 18, 8, 21, 0),
            photoLink: 'assets/photo4.png',
            favorites: [],
            countFavorites: 0,
            likes: ['Santa'],
            countLikes: 1,
            hashTags: [],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '5',
            idPerson: '5',
            author: 'НеГлупаяБлондинка',
            description: 'А у вас случался книжный голод? У меня определенно да',
            createdAt: new Date(2018, 11, 26, 11, 41, 12),
            photoLink: 'assets/photo5.png',
            favorites: [],
            countFavorites: 0,
            likes: ['Nina', 'Viola'],
            countLikes: 2,
            hashTags: ['книгинашевсе', 'хочубытьюиюлиотекарем'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '6',
            idPerson: '6',
            author: 'No Name',
            description: 'Это было последнее из того, что видел мой дрон(',
            createdAt: new Date(2018, 1, 9, 11, 2),
            photoLink: 'assets/photo6.png',
            favorites: [],
            countFavorites: 0,
            likes: [],
            countLikes: 0,
            hashTags: [],
            isLikedIt: false,
            isFavoritedIt: false
        },

        {
            id: '7',
            idPerson: '7',
            author: 'alexx',
            description: 'My life is good',
            createdAt: new Date(2018, 1, 9, 11, 1),
            photoLink: 'assets/photo7.png',
            favorites: ['annica', 'Lola'],
            countFavorites: 2,
            likes: ['НеГлупаяБлондинка', 'Viola'],
            countLikes: 2,
            hashTags: [],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '8',
            idPerson: '8',
            author: 'Karina',
            description: 'London is the capital of Great Britain',
            createdAt: new Date(2018, 1, 6, 23, 14),
            photoLink: 'assets/photo8.png',
            favorites: [],
            countFavorites: 0,
            likes: ['Nina', 'Viola', 'KlaraWrittenBlog', 'alexx'],
            countLikes: 4,
            hashTags: ['яуедужитьвлондон', 'мнемоскваНЕбудетсниться'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '9',
            idPerson: '9',
            author: 'Santa',
            description: 'Happy \n' + 'New \n' + 'Year',
            createdAt: new Date(2018, 0, 1, 0, 0),
            photoLink: 'assets/photo9.png',
            favorites: ['Karina'],
            countFavorites: 1,
            likes: ['Karina', 'annica', 'alexx', 'Lola', 'KlaraWrittenBlog', 'No name', 'Алина Воробьева', 'Santa'],
            countLikes: 8,
            hashTags: ['найдименя'],
            isLikedIt: true,
            isFavoritedIt: true
        },
        {
            id: '10',
            idPerson: '8',
            author: 'Karina',
            description: 'В мире столько красивого, что жизни не хватит чтобы все посмотреть, но мы же будем стараться, правда?',
            createdAt: new Date(2017, 11, 20, 19, 56),
            photoLink: 'assets/photo10.png',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 3,
            likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
            countLikes: 5,
            hashTags: ['Амстердам', 'найдименя'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '11',
            idPerson: '2',
            author: 'KlaraWrittenBlog',
            description: 'Добрый волшебник (догадались как я завуалировала мужа?) разбудил долгожданным подарком',
            createdAt: new Date(2017, 11, 6, 9, 41),
            photoLink: 'assets/photo11.jpg',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 3,
            likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
            countLikes: 5,
            hashTags: ['доброеУтро'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '12',
            idPerson: '4',
            author: 'Алина Воробьева',
            description: 'Привет, друзья! А мы на море! УРА!!!',
            createdAt: new Date(2017, 10, 30, 17, 24),
            photoLink: 'assets/photo12.jpg',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 3,
            likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
            countLikes: 5,
            hashTags: ['шлемПриветы'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '13',
            idPerson: '5',
            author: 'НеГлупаяБлондинка',
            description: 'Природой так интересно все предусмотрено. От одного цветочка аромат на всю студию',
            createdAt: new Date(2017, 10, 2, 21, 18),
            photoLink: 'assets/photo13.png',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 3,
            likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
            countLikes: 5,
            hashTags: [],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '14',
            idPerson: '10',
            author: 'Viola',
            description: 'Люблю ч/б фото, а значит, и вы полюбите:)',
            createdAt: new Date(2017, 9, 28, 11, 46),
            photoLink: 'assets/photo14.jpg',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 3,
            likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
            countLikes: 5,
            hashTags: ['ч/б', 'новыеобои'],
            isLikedIt: false,
            isFavoritedIt: false
        }, {
            id: '15',
            idPerson: '11',
            author: 'Nina',
            description: 'Год прошел. А это значит, что с ситцевой сводьбой нас!!!',
            createdAt: new Date(2017, 9, 10, 10, 10),
            photoLink: 'assets/photo15.jpg',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 3,
            likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
            countLikes: 5,
            hashTags: ['самаяСчастливая', 'ниДняБезСмеха', '365днейСчастья'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '16',
            idPerson: '1',
            author: 'annica',
            description: 'В Норвегии уже зима, а у вас?',
            createdAt: new Date(2017, 11, 20, 19, 56),
            photoLink: 'assets/photo16.jpg',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 3,
            likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
            countLikes: 5,
            hashTags: ['Норвегия'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '17',
            idPerson: '12',
            author: 'Mable',
            description: 'Уютный Хеллоуинский вечер',
            createdAt: new Date(2017, 9, 21, 17, 40),
            photoLink: 'assets/photo17.jpg',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 3,
            likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
            countLikes: 5,
            hashTags: ['MyHomeIsMyCastle', 'октябрь'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '18',
            idPerson: '11',
            author: 'Nina',
            description: 'На пределе сил и возможностей',
            createdAt: new Date(2017, 8, 29, 20, 52),
            photoLink: 'assets/photo19.jpg',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 1,
            likes: [],
            countLikes: 0,
            hashTags: ['nature', 'sun'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '19',
            idPerson: '10',
            author: 'Viola',
            description: 'Когда мечты становятся реальностью... С Днем Рождения меня!!!',
            createdAt: new Date(2017, 8, 29, 10, 52),
            photoLink: 'assets/photo19.jpg',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 1,
            likes: [],
            countLikes: 0,
            hashTags: ['HappyBirthday', 'dreamcometrue'],
            isLikedIt: false,
            isFavoritedIt: false
        },
        {
            id: '20',
            idPerson: '10',
            author: 'Viola',
            description: 'Пора простуд и серых туч... Привет, осень!',
            createdAt: new Date(2017, 8, 1, 0, 1),
            photoLink: 'assets/photo20.jpg',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 3,
            likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
            countLikes: 5,
            hashTags: ['грипп', 'желтыеЛимоны'],
            isLikedIt: false,
            isFavoritedIt: false
        },

        {
            id: '21',
            idPerson: '11',
            author: 'Nina',
            description: 'Интересно, любовь к азиатской кухне передается на генетическом уровне?',
            createdAt: new Date(2017, 5, 19, 21, 44),
            photoLink: 'assets/photo21.jpg',
            favorites: ['annica', 'alexx', 'Lola'],
            countFavorites: 3,
            likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
            countLikes: 5,
            hashTags: ['пп', 'прхудеюКЛету'],
            isLikedIt: false,
            isFavoritedIt: false
        }
    ];

    // var photoPostsString = JSON.stringify(photoPosts);

    //localStorage.setItem("photoPosts", photoPostsString);

    var checkers = {

        id: function (id) {
            return (typeof id === 'string' && id.trim().length > 0);
        },

        description: function (description) {
            return (typeof description === 'string' && description.length < 201)
        },

        createdAt: function (createdAt) {
            return (createdAt instanceof Date);
        },

        author: function (author) {
            return (typeof author === 'string' && author.trim().length > 0);
        },

        photoLink: function (photoLink) {
            return (typeof photoLink === 'string' && photoLink.trim().length > 3);
        },

        countLikes: function (countLikes) {
            return (Number.isInteger(countLikes) && countLikes >= 0);
        },

        countFavorites: function (countFavorites) {
            return (Number.isInteger(countFavorites) && countFavorites >= 0);
        },

        idPerson: function (idPerson) {
            return (typeof idPerson === 'string' && idPerson.trim().length > 0);
        },

        favorites: function (favorites) {
            return !!(favorites);
        },

        likes: function (likes) {
            return !!(likes);
        },

        hashTags: function (hashTags) {
            return !!(hashTags);
        }

    };

    var findPhotoPostById = function (id) {
        for (i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === id)
                return i;
        }
        return -1;
    };

    var getPhotoPosts = function (skip = 0, top = 10, filterConfig) {

        skip = countShowedPosts;

        if (typeof skip !== 'number' || typeof top !== 'number') {
            console.log('Error type');
            return;
        }

        if (filterConfig && typeof filterConfig !== 'object') {
            console.log('Error type');
            return;
        }

        let skipped = 0;
        let photoPostsFilter = [];

        // photoPosts = JSON.parse(localStorage.getItem("photoPosts"));

        for (let i = 0; i < photoPosts.length; i++) {

            if (checkPostForFilterSuitable(photoPosts[i], filterConfig)) {
                if (skipped < skip) {
                    skipped++;
                } else {
                    photoPostsFilter.push(photoPosts[i]);
                    countShowedPosts++;
                    if (top === photoPostsFilter.length)
                        break;
                }
            }
        }

        /*   filter = filterConfig;

           if (countShowedPosts === photoPosts.length){
               allPostsShowed = true;
           }
   */
        return photoPostsFilter;
    };

    var checkPostForFilterSuitable = function (photoPost, filterConfig) {
        let isGood = true;
        if (filterConfig) {
            if (filterConfig.author !== undefined && photoPost.author !== filterConfig.author) {
                isGood = false;
            }

            if (isGood && !!filterConfig.hashTags && filterConfig.hashTags.length > 0) {
                for (let j = 0; j < filterConfig.hashTags.length; j++) {
                    let hashtag = filterConfig.hashTags[j];

                    if (!photoPost.hashTags || !photoPost.hashTags.includes(hashtag)) {
                        isGood = false;
                        break;
                    }
                }
            }

            if (isGood && filterConfig.dateFrom !== undefined) {
                if (photoPost.createdAt < filterConfig.dateFrom) {
                    isGood = false;
                }
            }

            if (isGood && filterConfig.dateTo !== undefined) {
                if (photoPost.createdAt > filterConfig.dateTo) {
                    isGood = false;
                }
            }
        }

        return isGood;
    };

    var validatePhotoPost = function (photoPost) {
        for (let property in photoPost) {
            if (photoPost[property]) {
                if (!checkers[property] || !checkers[property](photoPost[property]) || findPhotoPostById(photoPost.id())) {
                    return false;
                }
            }
        }
        return true;
    };

    var getPhotoPost = function (id) {
        let index = findPhotoPostById(id);
        if (index !== -1) {
            return photoPosts[index];
        }
        return null;
    };

    var addPhotoPost = function (photoPost) {
        if (validatePhotoPost(photoPost)) {
            photoPosts.push(photoPost);
        }
    };

    var editPhotoPost = function (id, newPhotoPost) {
        let i = findPhotoPostById(id);
        if (i === -1) {
            return false;
        }

        for (let property in newPhotoPost) {
            if (newPhotoPost[property]) {
                if (checkers[property] && checkers[property](newPhotoPost[property])) {
                    photoPosts[i][property] = newPhotoPost[property];
                }
            }
        }
    };

    var removePhotoPost = function (id) {
        let index = findPhotoPostById(id);
        if (index !== -1) {
            photoPosts.splice(index, 1);
        }

    };

    var fillLocalStorage = function () {

    };

    let getCountShowedPosts = function () {
        return countShowedPosts;
    };

    return {
        allPostsShowed: allPostsShowed,
        countShowedPosts: countShowedPosts,
        setCountShowedPosts: setCountShowedPosts,
        getCountShowedPosts: getCountShowedPosts,
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost,
        getUser: getUser,
        setUser: setUser,
        findPhotoPostById: findPhotoPostById,
        filter: filter
    };

}());

var DomModule = (function () {

    let showedPosts = 0;

    function addPhotoPostBlock(photoPost) {
        Module.addPhotoPost(photoPost);
        let newPhotoPostBlock = createPhotoPostBlock(photoPost);
        let contentBlock = document.getElementsByClassName("content")[0];
        contentBlock.appendChild(newPhotoPostBlock);
        showedPosts++;
    }

    function editPhotoPostBlock(id, newPhotoPost) {
        Module.editPhotoPost(id, newPhotoPost);
        let oldPhotoPost = document.getElementById(id);
        let newPostBlock = DomModule.createPhotoPostBlock(Module.getPhotoPost(newPhotoPost.id));
        let contentBlock = document.getElementsByClassName("content")[0];
        contentBlock.replaceChild(newPostBlock, oldPhotoPost);
    }

    function removePhotoPostBlock(id) {
        let contentBlock = document.getElementsByClassName("content")[0];
        contentBlock.removeChild(document.getElementById(id));
        showedPosts--;
        Module.removePhotoPost(id);
        displayPhotoPosts(Module.getPhotoPosts(showedPosts, 1, Module.filter));
    }

    function initUser() {
        if (Module.getUser()) {

            if (!Module.getUser().login) {
                let reg_sign = document.getElementsByClassName("reg-sign")[0];
                reg_sign.innerHTML = "Регистрация/Вход";
            } else {
                let loginButton = document.getElementsByClassName("username")[0];
                loginButton.innerHTML = Module.getUser().login;
            }
        }
    }

    function displayPhotoPosts(photoPosts) {
        let content = document.getElementsByClassName("content")[0];
        for (let i = 0; i < photoPosts.length; i++) {
            content.appendChild(createPhotoPostBlock(photoPosts[i]));
            showedPosts++;
        }
    }

    function createImageWrapperBlock(photoPost) {
        let imageWrapperDiv = document.createElement('div');
        imageWrapperDiv.className = "image-wrapper";

        let image = document.createElement('img');
        image.className = "photo";
        image.src = photoPost.photoLink;
        image.alt = "Изображение";

        imageWrapperDiv.appendChild(image);
        return imageWrapperDiv;
    }

    function createFavoriteWrapperBlock(photoPost) {

        let favoriteWrapper = document.createElement('div');
        favoriteWrapper.className = "count-favorite";

        let star = document.createElement('img');
        star.className = "actionElements";

        if (photoPost.isFavoritedIt) {
            star.src = "assets/blackstar.png";
            star.alt = "В избранном";
        } else {
            star.src = "assets/whitestar.png";
            star.alt = "Добавить в избранное";
        }

        let countFavorite = document.createElement('span');
        countFavorite.innerHTML = photoPost.favorites.length;

        let whoFavoriteItDiv = document.createElement('div');
        whoFavoriteItDiv.className = "whoFavoriteIt";

        if (photoPost.favorites.length) {
            for (let i = 0; i < photoPost.favorites.length; i++) {
                let whoFavoriteIt = document.createElement('p');
                whoFavoriteIt.innerHTML = photoPost.favorites[i];
                whoFavoriteItDiv.appendChild(whoFavoriteIt);
            }
        }

        favoriteWrapper.appendChild(star);
        favoriteWrapper.appendChild(countFavorite);
        favoriteWrapper.appendChild(whoFavoriteItDiv);

        return favoriteWrapper;
    }

    function createLikeWrapperBlock(photoPost) {

        let likeWrapper = document.createElement('div');

        likeWrapper.onclick = () => {
            editPhotoPostBlock(photoPost.countLikes++);
        };

        likeWrapper.className = "count-likes";

        let heart = document.createElement('img');
        heart.className = "actionElements";

        if (photoPost.isLikedIt) {
            heart.src = "assets/redlike.png";
            heart.alt = "Мне нравится";
        } else {
            heart.src = "assets/whitelike.png";
            heart.alt = "Нравится?";
        }


        let countLikes = document.createElement('span');
        countLikes.innerHTML = photoPost.likes.length;

        let whoLikedItDiv = document.createElement('div');
        whoLikedItDiv.className = "whoLikedIt";

        if (photoPost.likes.length) {
            for (let i = 0; i < photoPost.likes.length; i++) {
                let whoLikedIt = document.createElement('p');
                whoLikedIt.innerHTML = photoPost.likes[i];
                whoLikedItDiv.appendChild(whoLikedIt);
            }
        }

        likeWrapper.appendChild(heart);
        likeWrapper.appendChild(countLikes);
        likeWrapper.appendChild(whoLikedItDiv);

        return likeWrapper;
    }


    function createSettingsBlock(photoPost) {
        let settingWrapperDiv =document.createElement('div');
        settingWrapperDiv.className = "setting";

        let setting = document.createElement('img');
        setting.className = "actionElements";

        setting.src = "assets/settings.png";
        setting.alt = "Изменить/удалить";

        settingWrapperDiv.appendChild(setting);
    }

    function createActionsWrapper(photoPost) {
        let actionsWrapperDiv = document.createElement('div');
        actionsWrapperDiv.className = "actions-wrapper";

        actionsWrapperDiv.appendChild(createFavoriteWrapperBlock(photoPost));
        actionsWrapperDiv.appendChild(createLikeWrapperBlock(photoPost));
        

        if (!!Module.getUser().login && Module.getUser().login === photoPost.author) {
            let changeWrapper = document.createElement('div');
            changeWrapper.className = "changePost";

            cre

            let changePostImg = document.createElement("img");
            changePostImg.src = "assets/settings.png";
            changePostImg.alt = "Изменить/Удалить";
            changePostImg.className = "actionElements";

            changeWrapper.appendChild(changePostImg);

            actionsWrapperDiv.appendChild(changeWrapper);

        }

        return actionsWrapperDiv;
    }

    function createInfoWrapper(photoPost) {
        let infoWrapperDiv = document.createElement('div');
        infoWrapperDiv.className = "info-wrapper";

        let nickname = document.createElement('div');
        nickname.innerHTML = photoPost.author;
        nickname.className = "nickname";

        let annotation = document.createElement('div');
        annotation.innerHTML = photoPost.description;
        annotation.className = "annotation";

        let tagsWrapper = document.createElement('div');
        tagsWrapper.className = "title-tags";
        tagsWrapper.innerHTML = "ТЕГИ";

        let listTags = document.createElement('div');
        listTags.className = "list-tags";

        for (let i = 0; i < photoPost.hashTags.length; i++) {
            let oneTag = document.createElement('p');
            oneTag.innerHTML = photoPost.hashTags[i];
            listTags.appendChild(oneTag);
        }

        tagsWrapper.appendChild(listTags);

        let creationData = document.createElement('div');
        creationData.className = "data";
        creationData.innerHTML = photoPost.createdAt;

        infoWrapperDiv.appendChild(nickname);
        infoWrapperDiv.appendChild(annotation);
        infoWrapperDiv.appendChild(tagsWrapper);
        infoWrapperDiv.appendChild(creationData);

        return infoWrapperDiv;
    }

    function createPhotoPostBlock(photoPost) {
        let photoPostDiv = document.createElement('div');
        photoPostDiv.className = "photopost";
        photoPostDiv.id = photoPost.id;
        photoPostDiv.appendChild(createImageWrapperBlock(photoPost));
        photoPostDiv.appendChild(createActionsWrapper(photoPost));
        photoPostDiv.appendChild(createInfoWrapper(photoPost));
        return photoPostDiv;
    }

    return {
        initUser: initUser,
        displayPhotoPosts: displayPhotoPosts,
        createImageWrapperBlock: createImageWrapperBlock,
        createFavoriteWrapperBlock: createFavoriteWrapperBlock,
        createLikeWrapperBlock: createLikeWrapperBlock,
        createActionsWrapper: createActionsWrapper,
        createInfoWrapper: createInfoWrapper,
        createPhotoPostBlock: createPhotoPostBlock,
        removePhotoPostBlock: removePhotoPostBlock,
        addPhotoPostBlock: addPhotoPostBlock,
        editPhotoPostBlock: editPhotoPostBlock
    }

}());