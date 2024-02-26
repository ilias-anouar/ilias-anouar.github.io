let id = location.href.split('?')[1]
if (id != undefined) {
    if (id.includes('#')) {
        id = id.split('#')[0]
    }

    fetch('../portfolio/blogs.json')
        .then(r => { return r.json() })
        .then(d => {
            let searchedBlog
            for (let i = 0; i < d.length; i++) {
                if (d[i].id == id) {
                    console.log(d[i]);
                    searchedBlog = d[i]
                    break
                }
            }
            document.querySelector('.blogContainer').innerHTML = blogTemplate(searchedBlog)
        })

} else {
    document.querySelector('.blogContainer').innerHTML = `<div class="row text-center"><div class="col"><h1>No Content</h1></div></div>`
}

const blogTemplate = (data) => {

    let tags = '', paragraphs = "", author, category, title, image

    image = data.cover
    title = data.title
    author = data.content.author
    category = data.content.category
    data.content.tags.forEach(tag => {
        tags += `<li><a href="#">${tag}.</a></li>`
    });

    for (let i = 1; i < 10; i++) {
        let paragraph = data.content.sections[`p-${i}`]
        console.log(paragraph);
        if (paragraph == undefined) {
            break
        } else {
            paragraphs += `<p>${paragraph}</p>`
        }
    }
    return `<div class="row">
        <div class="col-md-8">
            <div class="post-box">
                <div class="post-thumb">
                    <img src="img/${image}" class="img-fluid" alt="">
                </div>
                <div class="post-meta">
                    <h1 class="article-title">${title}</h1>
                    <ul>
                        <li>
                            <span class="ion-ios-person"></span>
                            <a href="#">${author}</a>
                        </li>
                        <li>
                            <span class="ion-pricetag"></span>
                            <a href="#">${category}</a>
                        </li>
                        <li>
                            <span class="ion-chatbox"></span>
                            <a href="#">14</a>
                        </li>
                    </ul>
                </div>
                <div class="article-content">
                ${paragraphs}
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="widget-sidebar widget-tags">
                <h5 class="sidebar-title">Tags</h5>
                <div class="sidebar-content">
                    <ul>
                    ${tags}
                    </ul>
                </div>
            </div>
        </div>
    </div>`
}