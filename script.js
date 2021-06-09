window.addEventListener("load", () => {
    const GameCardList = document.querySelector("#GameCardList");
    const Search = document.forms.Search;
    let newArr = null;

    // Рандомное значение карты
    const getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var NumberOfShownCards = 0;
    var GenerateCrads = true;
    var CardLoading = false;
    var MainInfo = null;

    if (document.querySelector("#infos") == undefined) {
        GenerateCrads = false;
        CardLoading = false;
        MainInfo = document.querySelector("#info");
        // return
    } else {
        MainInfo = document.querySelector("#infos");
    }

    const ScrollCardLoad = (cards) => {
        if (cards === newArr) {
            GameCardList.innerHTML = null;
            for (let item of newArr) {
                GenerateCrads = false;
                GameCardList.innerHTML += PageCard[item];
            }
            MainInfo.style = [
                "display: none;"
            ];
        }

        // while(NumberOfShownCards != Object.keys(PageCard).length && GenerateCrads != false) {
        //     var windowPosBottom = document.documentElement.getBoundingClientRect().bottom;
        //     if (windowPosBottom > document.documentElement.clientHeight + 100) break;
    
        //     GameCardList.innerHTML += PageCard[GamesNames[NumberOfShownCards]];
        //     NumberOfShownCards++;
        // }

        while(GenerateCrads != false) {
            var windowPosBottom = document.documentElement.getBoundingClientRect().bottom;
            if (windowPosBottom > document.documentElement.clientHeight + 100) break;
    
            GameCardList.innerHTML += PageCard[GamesNames[getRandomNum(0, GamesNames.length)]];
            GameCardList.innerHTML += PageCard[GamesNames[getRandomNum(0, GamesNames.length)]];
        }
    }
    window.addEventListener("scroll", ScrollCardLoad);
    ScrollCardLoad();


    // Поиск
    const SearchGame = (e) => {
        e.preventDefault();

        var SearchItem = Search.elements[0].value;

        let exp = new RegExp(SearchItem, "i");
        newArr = GamesNames.filter(el => {
            if (exp.test(el)) return el;
        })
        
        if (newArr.length != "0") {
            ScrollCardLoad(newArr);
        } else {
            GenerateCrads = false;
            GameCardList.innerHTML = SearchError[0];
        }
    }

    Search.addEventListener("submit", SearchGame);
    Search.addEventListener("search", () => {
        MainInfo.style = [
            "display: block;"
        ];
        NumberOfShownCards = 0;
        if (CardLoading == false) { GenerateCrads = true; }
        GameCardList.innerHTML = null;
        ScrollCardLoad();
    })
})