window.addEventListener("load", () => {
    const GameCardList = document.querySelector("#GameCardList");

    // Добавление карт
    // const getRandomNum = (min, max) => {
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }

    var NumberOfShownCards = 0;
    var GenerateCrads = true;
    const ScrollCardLoad = (card) => {
        while(NumberOfShownCards != Object.keys(PageCard).length && GenerateCrads != false) {
            var windowPosBottom = document.documentElement.getBoundingClientRect().bottom;
            if (windowPosBottom > document.documentElement.clientHeight + 100) break;

            // var RandomNum = getRandomNum(0, GamesNames.length);
            // var RandGame = GamesNames[RandomNum];

            // GameCardList.innerHTML += PageCard[RandGame];
            // GamesNames.splice(RandomNum, 1);

            GameCardList.innerHTML += PageCard[GamesNames[NumberOfShownCards]];
            NumberOfShownCards++;
        }

        if (card === newArr) {
            GenerateCrads = false;
            GameCardList.innerHTML = PageCard[card];
        }
    }
    
    window.addEventListener("scroll", ScrollCardLoad);
    ScrollCardLoad;


    // Поиск
    const Search = document.forms.Search
    let newArr = null;

    const SearchGame = (e) => {
        e.preventDefault();

        var SearchItem = Search.elements[0].value;

        let exp = new RegExp(SearchItem, "i");
        newArr = GamesNames.filter(el => {
            if (exp.test(el)) return el;
        })
        
        if (PageCard[newArr] !== undefined) {
            ScrollCardLoad(newArr);
        } else if (PageCard[newArr] === undefined) {
            GenerateCrads = false;
            GameCardList.innerHTML = SearchError[0];
        }
    }

    Search.addEventListener("submit", SearchGame);
    Search.addEventListener("search", () => {GameCardList.innerHTML = PageCard; console.log(PageCard);})
})