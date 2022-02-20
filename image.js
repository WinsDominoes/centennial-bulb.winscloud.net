let timeElement = document.getElementById('time');

function convertTZ(date) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));   
}

setInterval(function() {
    const date = new Date();
    let calidate = convertTZ(date);
    timeElement.innerHTML = calidate.toLocaleTimeString();
}, 100);

setInterval(function(){
    const imagesrc = "https://www.centennialbulb.org/oldbulb/ctbulb.jpg?=" + new Date().getTime();

    document.getElementById("bulb").src = imagesrc;
    console.log("image updated");
}, 30000);


