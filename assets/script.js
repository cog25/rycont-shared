document.getElementById('location').appendChild(document.createTextNode(location.pathname))
document.getElementById('github').setAttribute('href', "https://github.com/rycont/rycont-shared/blob/master" + location.pathname + location.pathname.endsWith('html') ? '' : '.html')