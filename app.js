document.getElementById("ping").addEventListener("click", function(){
    document.getElementById("out").innerText = "JS is Working";

})

// Helper File
// Runs in the background, separate from the main page
//Offline performance,overall performance, push notification
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(()=> console.log("Service Worker Registered"))
    .catch(err=> console.log("Service Worker Registration Failed",err));
}