let form = document.querySelector("form")
let searchBtn = document.querySelector("#search-btn")
let backBtn = document.querySelector("#back")
let exploreBtn = document.querySelector("#explore")
let searchHeader = document.querySelector(".header")
let welcomePage = document.querySelector(".welcome")
let searchInput = document.querySelector("#search")
let container = document.querySelector(".container")
let mainHeader = document.querySelector(".main-header")
let left = document.querySelector("#left")
let infoPage  = document.querySelector(".info-page")

   let poster = document.querySelector(".posterr")

     let movieName = document.querySelector(".movie-name")
     let proDate = document.querySelector(".date")
     let countryy = document.querySelector(".country")
     let mins = document.querySelector(".mins")
     let genreBox = document.querySelector(".genre")
     let rate = document.querySelector(".rate")
     let synopText = document.querySelector(".synop-text")
     let infoImageBox = document.querySelector(".image")
     
     

     

function displaySearchPage() {
    welcomePage.classList.add("active")
    container.style.display = "flex"
    searchHeader.style.display = "flex"
    mainHeader.classList.add("active")
    container.classList.remove("active")
    searchHeader.classList.remove("active")
    infoPage.classList.add("active")
setTimeout(() => {
    welcomePage.style.display = "none"
    mainHeader.style.display ="none"
infoPage.style.display = "none"
}, 1100);    
}

function goBack() {
    container.classList.add("active")
    searchHeader.classList.add("active")
 
    mainHeader.classList.remove("active")
    welcomePage.classList.remove("active")
    setTimeout(() => {
        container.style.display = "none"
        searchHeader.style.display = "none"
        welcomePage.style.display = "block"
        mainHeader.style.display = "flex"
    }, 1100);
}

/*fetching the api from the movie database */



  form.addEventListener("submit", (event)=>{
    event.preventDefault()
    
    async function movieLiveSearch() {
    
  
  try{
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`)
    let data = res.data
    const summary = res.data[0].show.summary
    const url = res.data[0].show.url
    const name = res.data[0].show.name
    const genres = res.data[0].show.genres
    const rating = res.data[0].show.rating.average
    const img = res.data[0].show.image.original
    
    container.innerHTML = ""
    
    
    
    
    
    data.forEach((el,index) => {
      
   let imageBox = document.createElement("div")
  let imgTag = document.createElement("img")
  let nameBox = document.createElement("div")
  let nameTag = document.createElement("p")
  let yearTag = document.createElement("p")
   
   container.append(imageBox)
    imageBox.append(imgTag)
    imageBox.append(nameBox)
    nameBox.append(nameTag)
    nameBox.append(yearTag)
    
    
    imageBox.classList.add("image")
    imgTag.classList.add("img")
    nameBox.classList.add("name")
    nameTag.classList.add("name-text")
    yearTag.classList.add("year")
 
      nameTag.innerHTML = el.show.name
      imgTag.src = el.show.image.original
      


  imageBox.addEventListener('click',()=>{
     
     
     el.show.genres.forEach(el => {
       let genreItem = document.createElement("span")
       genreBox.append(genreItem)
       genreItem.classList.add("genre-item")
       
       genreItem.innerText = el
     })
     
   
   
   poster.src = el.show.image.original
   movieName.innerHTML = el.show.name
   proDate.innerText = el.show.premiered
  countryy.innerText = el.show.network.country.name
   mins.innerText = `${el.show.runtime} mins`
   rate.innerText = el.show.rating.average
   synopText.innerHTML = el.show.summary
     
     
     container.style.display = "none"
     infoPage.style.display = "block"
     mainHeader.style.display = "flex"
     searchHeader.style.display = "none"
     mainHeader.classList.remove("active")
     left.style.display = "block"
     infoPage.classList.remove("active")
    
  
  
})

    })
  
  
   
  
    
    
  }
  catch (e) {
    container.innerHTML = ""
    let imageBox = document.createElement("div")
    container.append(imageBox)
    imageBox.classList.add("image")
    imageBox.innerText = "Not Found!!"
    
    
  }
 
  }
  movieLiveSearch()
    
  
  })








    
searchBtn.addEventListener("click", displaySearchPage)
exploreBtn.addEventListener("click", displaySearchPage)
backBtn.addEventListener("click", goBack)
left.addEventListener("click", displaySearchPage)

async function a(){
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=girls`)

    let data = res.data

    
   
}

a()