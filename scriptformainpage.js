
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function changeImageSystem(){
    images=new Array('testImage1.png','testImage2.png');
    imageLen=2;
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
