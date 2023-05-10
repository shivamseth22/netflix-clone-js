
//const 

const apikey = "0ecfbaa1f819bc81255719bbe28d30bb";
const apiEndpoint = "https://api.themoviedb.org/3/";

const apiPaths  ={
    fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`
}

//boost app
function init(){
    fetchAndBuildAllSections()
}

function fetchAndBuildAllSections(){
    fetch(apiPaths.fetchAllCategories)
    .then(res => res.json())
    .then(res => {
        const categories =res.genres;
        if (Array.isArray(categories) && categories.length){
            categories.forEach(category=> fetchAndBuildMovieSection(category))
        }
        // console.table(movies);
    })
    .catch(err=> console.error(err));
}

function fetchAndBuildMovieSection(category){
    console.log(category)

}
window.addEventListener('load',function(){
    init();
})