async function movieSearch(m_name) {

    let info = await fetch(`https://imdb-api.com/en/API/Search/k_2b1434mz/${m_name}`);
    let info_json = await info.json();
    let length = info_json.results.length;
    console.log(info_json.results.length);
    let html_e = ''
    let el = document.getElementById('movies_info');
    for (let i = 0; i < length; i++) {
        html_e += `
        <div class="marg">
        <strong>
            <p>${info_json.results[i].title}</p>
        </strong>
        <p ">${info_json.results[i].description}</p>
        <img id="" src="${info_json.results[i].image}" alt="">
        </div.
         `
        el.innerHTML = html_e;
    }


}


document.getElementById("btnorg").addEventListener('click', () => {
    let m_name = document.getElementById("btn").value;
    console.log(m_name);
    movieSearch(m_name);
})


// 


/*    
 https://imdb-api.com/en/API/Search/k_2b1434mz/  =>21
 https://imdb-api.com/en/API/Search/k_xq8q7gi3/  => 12
  inception 2010


*/
