//selecting side Navbar,menu icon
var sidenav = document.getElementById("sidenav")
var mennuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

mennuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"

})
