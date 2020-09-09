var img = document.getElementById("img")
var images = ['./images/1.jpg','./images/2.jpg','./images/3.jpg']
var i=0

function next(){
    
    document.getElementById('img').src = images[i];
    i++;
    if(i==images.length)
    {
        i=0
    }
}

function previous(){
    if(i==0)
    {
        i=2
        document.getElementById('img').src = images[i];
        
    }
    else if(i==1)
    {
        i=0
        document.getElementById('img').src = images[i];
        
    }
    else if(i==2)
    {
        i=1
        document.getElementById('img').src = images[i];
        
    }
}