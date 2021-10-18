

    var news_container = document.getElementById("news-container");

    var story_detail = JSON.parse(localStorage.getItem("story_details"));
    console.log('story_detail:', story_detail[0]);

    //title

    let title_div = document.createElement("div");
        title_div.setAttribute("class", "title-div")
        
        let h1 = document.createElement("h1");
            h1.innerText = story_detail[0].title;

        title_div.append(h1);

    //img

    let img_div = document.createElement("div");
        img_div.setAttribute("class", "img-div")
        
        let img = document.createElement("img");
            img.src = story_detail[0].urlToImage;

        img_div.append(img);
        

    //content

    let content_div = document.createElement("div");
        content_div.setAttribute("class", "content-div")
        
        let content_p = document.createElement("p");
            content_p.innerHTML = story_detail[0].content;

        content_div.append(content_p);

    news_container.append(title_div, img_div, content_div)


