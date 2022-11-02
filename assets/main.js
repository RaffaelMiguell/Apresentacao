const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    if (tab.classList.contains('select')) {
      return
    }

    const selectTab = document.querySelector('.tab.select')

    selectTab.classList.remove('select')

    tab.classList.add('select')

    const selectBox = document.querySelector('.box-main.select')

    selectBox.classList.remove('select')

    const tabBoxActive = `linking-${tab.id}`

    const tabBoxShow = document.getElementById(tabBoxActive)

    tabBoxShow.classList.add('select')

    console.log(tabBoxShow)
  })
})
