setInterval(myTimer, 10000);

function myTimer()
{
    var love = document.getElementsByClassName("love")[0];
    var forever = document.getElementsByClassName("forever")[0];
    var memory = document.getElementsByClassName("memory")[0];

    // get style of the element
    var loveStyle = window.getComputedStyle(love);
    var foreverStyle = window.getComputedStyle(forever);
    var memoryStyle = window.getComputedStyle(memory);
    
    // get the value of the style
    var loveValue = loveStyle.getPropertyValue("display");
    var foreverValue = foreverStyle.getPropertyValue("display");
    var memoryValue = memoryStyle.getPropertyValue("display");

    // if the value is "none" then change it to "block"
    if (loveValue != "none")
    {
        love.style.display = "none";
        forever.style.display = "block";
        memory.style.display = "none";
    }
    else if (foreverValue != "none")
    {
        forever.style.display = "none";
        love.style.display = "none";
        memory.style.display = "block";
    }
    else if (memoryValue != "none")
    {
        memory.style.display = "none";
        love.style.display = "block";
        forever.style.display = "none";
    }
}