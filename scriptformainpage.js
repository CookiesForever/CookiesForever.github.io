
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function changeImageSystem(){
    images=new Array('image3.png','image4.png','image1.jpg','image2.jpg','image3.png','P1.png','P2.jpg','P3.png');
    imageLen=8;
    count=imageLen-1;
    //changeImage(images[count]);
    for(;;)
    {
        
        count--;
        if(count<0)
        {
            count=imageLen-1;
        }
        changeImage(images[count]);
        await sleep(5000);
    }
}
function changeImage(imageName)
{
    var x=document.getElementById('workingImage').style;
    var name="url('"+imageName+"')"
    x.backgroundImage=name;
    x.backgroundRepeat="no-repeat";
}
