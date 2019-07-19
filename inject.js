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
      const wrapper = document.createElement('div')
      wrapper.classList.add('kubesail-apply')
      pre.parentNode.insertBefore(wrapper, pre)
      wrapper.appendChild(pre)
      const a = document.createElement('a')
      a.classList.add('kubesail-apply-button')
      a.href = `https://kubesail.com/template?source=${encodeURIComponent(pre.innerText)}`
      a.innerText = 'Apply on KubeSail'
      a.target = '_blank'
      wrapper.appendChild(a)
    }
  })
})()
