console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
    type: "get",
    dataType: "json",
    success: (data) => {
        let temp = data["main"]["temp"]

        console.log(temp);
        console.log("worked!");
    },
    error: () => {
        console.log("did not work!");
    }
})

// Add another console log here, outside your AJAX request
console.log('this is outside the AJAX request');