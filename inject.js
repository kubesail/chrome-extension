// this is the code which will be injected into a given page...

;(function() {
  const pres = document.querySelectorAll('pre')
  Array.from(pres).map(pre => {
    const lines = pre.innerText.split('\n')
    if (
      lines[0] &&
      lines[0].startsWith('apiVersion: ') &&
      lines[1] &&
      lines[1].startsWith('kind: ')
    ) {
      console.log(pre.innerText)
      console.log(pre)
      pre.classList.add('kubesail-apply')
    }
  })
})()
