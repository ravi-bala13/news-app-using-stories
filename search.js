

    // Get_stroies();

    async function Get_stroies(){

        let query = document.getElementById("input").value;

        var container = document.getElementById("container");
            container.innerHTML = null;

        // My Api key --  3f65384760f64f8291d15408a9197ede

        let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2021-09-18&sortBy=publishedAt&apiKey=3f65384760f64f8291d15408a9197ede`)
        // console.log('res:', res)

        let data = await res.json();
        // console.log('data:', data)
        console.log('data articles:', data.articles)

        Show_stories(data.articles);

        function Show_stories(stories){

            stories.forEach(story => {
                // console.log('story:', story)

                

                let each_story = document.createElement("div");
                    each_story.setAttribute("class", "each_story");

                let title_div = document.createElement("div");
                    title_div.setAttribute("class", "title_div");
                    
                    let title_p = document.createElement("p");
                        title_p.setAttribute("class", "title_p");
                        title_p.innerText = story.title;

                    let author_p = document.createElement("p");
                        author_p.innerText = story.author;

                    let date_p = document.createElement("p");
                        date_p.innerText = story.publishedAt;

                    title_div.append(title_p, author_p, date_p)

                let descript_div = document.createElement("div");
                    descript_div.setAttribute("class", "descript_div");

                    let p = document.createElement("p");
                        p.innerHTML = story.description;
                        p.setAttribute("class", "desript_p")

                    descript_div.append(p);

                // console.log("author", story.author);
                // console.log("title", story.title);
                // console.log("date", story.publishedAt);
                    

                let img_div = document.createElement("div");
                    img_div.setAttribute("class", "img_div");
                    // console.log('story-img url:', story.urlToImage)
                    console.log('story-img url:', story.url)

                    let img = document.createElement("img");
                        img.src = story.urlToImage;
                    
                    img_div.append(img);

                each_story.append(title_div, descript_div, img_div);

                // add eventlistener when click the each div it do some operation

                each_story.onmouseenter = ()=>{

                    each_story.style.opacity = "0.5";

                }

                    each_story.onmouseleave = ()=>{

                    each_story.style.opacity = "1";

                }

                each_story.onclick = ()=>{

                    // alert("hai");
                    console.log("each story", story)
                    // console.log("each story", story.content)

                    // store in the local storage

                    if(localStorage.getItem("story_details") === null){
                        localStorage.setItem("story_details", JSON.stringify( [story] ));
                    }else{
                        localStorage.setItem("story_details", JSON.stringify( [story] ));
                    }

                    window.location.href = "news.html";

                }

                container.append(each_story)
                
            });

        }


    }

