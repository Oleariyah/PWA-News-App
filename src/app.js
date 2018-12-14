//get your apiKey from www.newsapi.org
const apiKey = "";

const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelector');
const defaultSource = 'the-washington-post'


    window.addEventListener('load', async e => {
        updateNews();
        await updateSource();

        sourceSelector.value = defaultSource;

        sourceSelector.addEventListener('change', e => {
            updateNews(e.target.value);
        });
        
        if ('serviceWorker' in navigator) {
            
            navigator.serviceWorker.register("sw.js")
            .then(console.log)
            .catch(console.error);
        
        }
        
    });

const updateSource = async () => {
    const res = await fetch(`https://newsapi.org/v1/sources`);
    const json = await res.json()

    sourceSelector.innerHTML = json.sources
    .map(src =>  `<option value="${src.id}">${src.name}</option>`)
    .join('\n');
    
};

const updateNews = async (source = defaultSource) => {
    const res = await fetch(`https://newsapi.org/v1/articles?source=${source}&sortBy=popularity&apiKey=${apiKey}`);
    const json = await res.json()

    main.innerHTML = json.articles.map(createArticle).join('\n');
};

function createArticle(article) {
    
    return `<div class="card" > 
        <a href = "${article.url}">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}" width="100%" height="auto">
            <br><br>
            <p> ${article.description} </p>
        </a>
    </div>` 
}