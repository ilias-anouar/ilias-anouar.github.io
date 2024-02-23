window.onload = function () {
  HTML(85)
  CSS(75)
  JS(90)
  PHP(50)
  NODE(75)
  KOTLIN(10)
  PYTHON(20)
}


const HTML = (progress) => {
  var elm = document.querySelector('#progress-html');
  let fill = document.getElementById('fill-html')
  setInterval(function () {
    if (elm.innerHTML != `${progress}%`) {
      elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
      fill.style.width = `${parseInt(elm.innerHTML) + 1}%`
    } else {
      clearInterval();
    }
  }, 18)
}

const CSS = (progress) => {
  var elm = document.querySelector('#progress-css');
  let fill = document.getElementById('fill-css')
  setInterval(function () {
    if (elm.innerHTML != `${progress}%`) {
      elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
      fill.style.width = `${parseInt(elm.innerHTML) + 1}%`
    } else {
      clearInterval();
    }
  }, 18)
}

const JS = (progress) => {
  var elm = document.querySelector('#progress-js');
  let fill = document.getElementById('fill-js')
  setInterval(function () {
    if (elm.innerHTML != `${progress}%`) {
      elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
      fill.style.width = `${parseInt(elm.innerHTML) + 1}%`
    } else {
      clearInterval();
    }
  }, 18)
}

const PHP = (progress) => {
  var elm = document.querySelector('#progress-php');
  let fill = document.getElementById('fill-php')
  setInterval(function () {
    if (elm.innerHTML != `${progress}%`) {
      elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
      fill.style.width = `${parseInt(elm.innerHTML) + 1}%`
    } else {
      clearInterval();
    }
  }, 18)
}

const NODE = (progress) => {
  var elm = document.querySelector('#progress-node');
  let fill = document.getElementById('fill-node')
  setInterval(function () {
    if (elm.innerHTML != `${progress}%`) {
      elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
      fill.style.width = `${parseInt(elm.innerHTML) + 1}%`
    } else {
      clearInterval();
    }
  }, 18)
}

const KOTLIN = (progress) => {
  var elm = document.querySelector('#progress-kotlin');
  let fill = document.getElementById('fill-kotlin')
  setInterval(function () {
    if (elm.innerHTML != `${progress}%`) {
      elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
      fill.style.width = `${parseInt(elm.innerHTML) + 1}%`
    } else {
      clearInterval();
    }
  }, 18)
}

const PYTHON = (progress) => {
  var elm = document.querySelector('#progress-python');
  let fill = document.getElementById('fill-python')
  setInterval(function () {
    if (elm.innerHTML != `${progress}%`) {
      elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
      fill.style.width = `${parseInt(elm.innerHTML) + 1}%`
    } else {
      clearInterval();
    }
  }, 18)
}