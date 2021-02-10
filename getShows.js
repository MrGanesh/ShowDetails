const getData = () => {
    var input = document.querySelector("#getVal").value
    getConvertData(input)
}

async function getConvertData(input) {
    let resData = await fetch('http://api.tvmaze.com/singlesearch/shows?q=' + input)
    let data = await resData.json()
    // var output =  Object.values(data)[0] 
    console.log(data)
    document.querySelector("#name").value = data.name
    document.querySelector("#name").disabled = true
    document.querySelector("#genres").value = data.genres.join(',')
    document.querySelector("#genres").disabled = true
    document.querySelector("#banners").innerHTML = 'Banner'
    document.querySelector("#banner").src = data.image.medium
    document.querySelector("#premier").value = data.premiered
    document.querySelector("#premier").disabled = true
    document.querySelector("#country").value = data.network.country.name
    document.querySelector("#country").disabled = true
    document.querySelector("#channel").value = data.network.name
    document.querySelector("#channel").disabled = true
    document.querySelector("#demo").innerHTML = data
}