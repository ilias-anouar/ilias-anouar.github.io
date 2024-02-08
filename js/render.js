
let workWrapper = document.querySelector('#workContainer')


fetch('../portfolio/projects.json')
    .then(r => { return r.json() })
    .then(d => {
        let cols = ''
        d.forEach(project => {
            cols += `<div class="col-md-4">
            <div class="work-box" style="max-height: 300px;">
              <div class="work-img">
                <img src="img/${project.cover}" alt="Project cover" width="100%" style="min-height: 200px;">
              </div>
              <div class="work-content">
                <div class="row">
                  <div class="col-8">
                    <h2 class="w-title" data-toggle="tooltip" data-placement="top" title="${project.label}">${project.title}</h2>
                    <div class="w-more">
                      <span class="w-ctegory">${project.cat}</span> / <span class="w-date">${project.date}</span>
                    </div>
                  </div>
                  <div class="col">
                    <div class="w-like">
                      <span class="ion-ios-plus-outline details" data-id="${project.id}"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
        });
        workWrapper.innerHTML = cols
        $('[data-toggle="tooltip"]').tooltip()
    })

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

