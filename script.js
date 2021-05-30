window.addEventListener("load", () => {
    const GameCardList = document.querySelector("#GameCardList");

    // Добавление карт
    const getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var NumberOfShownCards = 0;
    const ScrollCardLoad = () => {
        while(NumberOfShownCards != Object.keys(PageCard).length) {
            var windowPosBottom = document.documentElement.getBoundingClientRect().bottom;
            if (windowPosBottom > document.documentElement.clientHeight + 100) break;

            var RandomNum = getRandomNum(0, GamesNames.length);
            console.log(RandomNum);
            var RandGame = GamesNames[RandomNum];
            console.log(RandGame);

            console.log(GamesNames);

            GameCardList.innerHTML += PageCard[RandGame];
            GamesNames.splice(RandomNum, 1);
            NumberOfShownCards++;
        }
    }
    
    window.addEventListener("scroll", ScrollCardLoad);
    ScrollCardLoad;


    // Поиск
    const Search = document.forms.Search

    const SearchGame = (e) => {
        e.preventDefault();

        var SearchItem = Search.elements[0].value;

        let exp = new RegExp(SearchItem, "i");
        let newArr = GamesNames.filter(el => {
            if (exp.test(el)) return el;
        })
        
        GamesNames[newArr]
    }

    Search.addEventListener("submit", SearchGame);
})