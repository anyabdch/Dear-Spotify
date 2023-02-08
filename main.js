var playlists = [
    {   
        img: "hihy.png",
        desc: 'This playlist is the product of 2 weeks worth of parsing through my library, Spotify playlists, and similar playlists by other users \
                to produce the ultimate 10 hour road trip playlist. Being on the road is one of my favorite passtimes -- after graduating high school \
                I road tripped with my best friend. I did all the driving for 18 days over 1600 miles.',
        embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2alGpZzvMPxiAev0miTfra?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        img: "meyefe.png",
        desc: "For those times when you just need soft, chill vibes. The introduction of the sleep timer was a total game changer for me as someone \
                who loves to listen to music to fall asleep but hates waking up and knowing I've let my phone run all night. Bad for battery health! \
                This playlist is the reason Amsterdam was my top song last year -- I listen to it most nights to quiet my brain and conk out.",
        embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2pyD1jp3R82gURJzeQTIWU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        img: "wi.png",
        desc: "I'm an experimenter at heart. I'm guilty of having like 10 different types of 'progress' photo albums on my phone to see if I've changed \
                over time. My Spotify is not immune to impulsive data collection. My latest idea has been to have playlists for every season and whenever \
                I add a song to my library or get a song stuck in my head, I also put it in the season playlist for whatever time of year it is. I want to \
                find out if there's a certain vibe for each season that naturally develops, and have fun little caches of seasonal memories.",
        embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/12bkxiqORMdwp0TxdHqpLy?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        img: "es.png",
        desc: "",
        embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0oa6tevkiM8XlRaL6ffBcQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        img: "qugast.png",
        desc: "",
        embded: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1o565KfcNpmEIkbX06jdXK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        img: "fa.png",
        desc: "",
        embded: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/51gyD1SzsAxdTSeeZfVVPO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        img: "sccrwi.png",
        desc: "",
        embded: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/68fT60Q8GgCkYPY6aw8s9c?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        img: "patn.png",
        desc: "",
        embded: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6r3CmZR6YjVuthveWqwGn2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        img: "titosc.png",
        desc: "",
        embded: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7xFZ2ylghoz9ioZrYgFaVp?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        img: "csre.png",
        desc: "",
        embded: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2t9Io6PdiEDfExHFhsCn3d?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    }
]

function listPlaylists() {
    let library = document.querySelector("#library")
    if (library){
      if(playlists instanceof Array){
        for (let playlist of playlists){
            let html =  `
                        <img class="p-img" src="images/${playlist.img}" onclick="toggleDisplay(${playlists.indexOf(playlist)});">
                        </div>
                    `
            let container = document.createElement("div");
            container.className = "plist";
            container.innerHTML = html;
            container.tabIndex = playlists.indexOf(playlist);
            library.append(container);
            }
        }
    }
}

function toggleDisplay(idx) {
    let window = document.querySelector("#window")
    if (idx >= 0){
        window.innerHTML = `${playlists[idx].embed} 
                                <div class="desc"> <p> ${playlists[idx].desc} </p> </div>
                                <button onclick="toggleDisplay(-1);">&#10007</button>`
    }
    window.classList.toggle("hidden")
}
