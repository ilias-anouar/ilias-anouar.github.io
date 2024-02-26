
let workWrapper = document.querySelector('#workContainer')


fetch('../portfolio/projects.json')
  .then(r => { return r.json() })
  .then(d => {
    let cols = ''
    console.log(d);
    d.forEach(project => {
      cols += `<div class="col-md-4 mb-3">
      <div class="work-box-costume">
        <div class="work-content-costume">
          <img src="img/${project.cover}" alt="work" class="work-box-image">
          <div class="work-box-details">
            <p class="work-box-title">${project.title}</p>
            <div class="work-like">
              <span class="ion-ios-plus-outline details" data-id="${project.id}"></span>
            </div>
          </div>
        </div>
      </div>
    </div>`
    });
    workWrapper.innerHTML = cols
    $('[data-toggle="tooltip"]').tooltip()
  })


fetch('../portfolio/blogs.json')
  .then(r => { return r.json() })
  .then(d => {
    let Blogs = ""
    for (let i = 0; i < d.length; i++) {
      Blogs += blogTemplate(d[i])
    }
    $('.blogsContainer').html(Blogs)
  })

const blogTemplate = (data) => {
  let title, image, disc, date, id
  id = data.id
  title = data.title
  image = data.cover
  disc = data.description
  date = data.date
  return `<div class="col-md-4">
  <div class="blog-card">
    <a href="./blog-single.html?${id}" class="blog-card-link"><img src="img/${image}" alt="" class="blog-card-image">
      <div class="card-blog-content">
        <p class="card-blog-title">${title}</p>
        <p class="card-blog-text">${disc}</p>
        <p class="card-blog-label">${date}</p>
      </div>
    </a>
  </div>
</div>`
}

$(document).on('click', '.details', e => {
  console.log('test');
  let id = $(e.target).data('id')
  fetch('../portfolio/projects.json')
    .then(r => { return r.json() })
    .then(d => {
      let searchedProject
      for (let i = 0; i < d.length; i++) {
        if (d[i].id == id) {
          searchedProject = d[i]
          break
        }
      }
      let links = ''
      let i = 0
      searchedProject.references.forEach(link => {
        i++
        links += `<div class="col-sm-3"><a class="text-danger" href="${link}">Link ${i}</a></div>`
      })
      $('#projectTitle').html(searchedProject.title + ' project details')
      let card = `<div class="card">
            <img class="card-img-top" src="img/${searchedProject.cover}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${searchedProject.title}</h5>
              <p class="card-text">${searchedProject.details}</p>
              <h6 class="card-title">References</h6>
              <div class="row mb-2">${links}</div>
              <p class="card-text"><small class="text-muted">${searchedProject.date}</small></p>
            </div>
          </div>`
      $('#projectBody').html(card)

      $('#projectDetails').modal('show')
    })
})



fetch('https://api.adviceslip.com/advice')
  .then(r => { return r.json() })
  .then(d => {
    $('#quoteContainer').html(`<h5 class="text-monospace font-weight-bold">'${d.slip.advice}'</h5>`)
  })


$(document).on('click', '#refreshAdvice', e => {
  fetch('https://api.adviceslip.com/advice')
    .then(r => { return r.json() })
    .then(d => {
      $('#quoteContainer').html(`<h5 class="text-monospace font-weight-bold">'${d.slip.advice}'</h5>`)
    })
})