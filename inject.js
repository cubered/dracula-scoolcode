/* CSS classok
    .mtk1 minden más
    .mtk4 nevek
    .mtk5 string
    .mtk7 számok
    .mtk9 commentek
    .mtk14 metúdusok
*/

function draculaInject() {
    var m = new MutationObserver(_ => {
      document.querySelectorAll('.mtk14').forEach(e => { e.style.color = "#8be9fd" })
      document.querySelectorAll('.mtk7').forEach(e => { e.style.color = "#bd93f9" })
      document.querySelectorAll('.mtk5').forEach(e => { e.style.color = "#f1fa8c" })
      document.querySelectorAll('.mtk1').forEach(e => { e.style.color = "#f8f8f2" })
      document.querySelectorAll('.mtk4').forEach(e => { e.style.color = "#50fa7b" })
      document.querySelectorAll('.mtk9').forEach(e => { e.style.color = "#6272a4" })
      document.querySelectorAll('main > div').forEach(e => { e.style.backgroundColor = "#282a36" })
      document.querySelectorAll('.current-line').forEach(e => { e.style.backgroundColor = "#44475a" })
    })
    m.observe(document.getElementById('root'), {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
    })
}

var injected = false

var mo = new MutationObserver(_ => {
    if(document.querySelectorAll('.theme-colors-preview-container').length < 10 || injected) return;

    injected = true

    document.querySelectorAll('.theme-colors-preview-container')[7].getElementsByTagName("span")[0].innerHTML = "Red"
    
    var main = document.createElement("div");
    main.setAttribute("class", "theme-colors-preview-container")
    main.setAttribute("onclick", "draculaInject()")
        
    var m = document.createElement("div");
    m.setAttribute("class", "theme-colors-preview");
    m.setAttribute("style", "background: linear-gradient(to right bottom, #282a36 15%, #6272a4 85%);")
    
    var s = document.createElement("div");
    s.setAttribute("class", "theme-colors-preview-border");
    s.setAttribute("style", "border: 2px solid transparent;");
    
    
    var t = document.createElement("span");
    t.setAttribute("class", "theme-name");
    t.setAttribute("style", "#ffffff; text-transform: capitalize;")
    
    main.appendChild(m);
    main.appendChild(s);
    t.innerHTML = "Dracula";
    main.appendChild(t);
    
    
    document.querySelectorAll('.panel-background')[1].appendChild(main)
})

mo.observe(document.getElementById('popup'), {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
})
