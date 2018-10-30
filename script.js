let params = new URLSearchParams(window.location.search)
let app_page = params.get("app_page")
if (app_page) {
  document.querySelector(".phone .screen").src = "app/" + app_page
}

document.querySelector(".commands button").addEventListener("click", () => {
  document.querySelector(".phone .screen").contentWindow.postMessage("hi", "*")
})

window.addEventListener("message", e => {
  document.querySelector(".commands button").innerText += " " + e.data
})
