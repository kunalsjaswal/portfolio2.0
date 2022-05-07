var shadowchange="dark";
function darktheme(){
    shadowchange="dark";

    slide.style.right="6%";
    slide2.style.right="6%";
    slide3.style.right="8%";


    seperation.style.display="none";


    pagee1.style.backgroundColor="black";
    pagee2.style.backgroundColor="rgb(75, 75, 75)";

    
    
    pagee2.style.backgroundImage="url('/static/images/galaxy2.jpg')";
    pagee1.style.backgroundImage="url('/static/images/galaxy.jpg')";


    line1.style.backgroundColor="white";
    line2.style.backgroundColor="white";

    
    profile.src="/static/images/kunallight.jpg";

    image_sec.style.color="white";


}
function lighttheme(){

    shadowchange="light";

    slide.style.right="2.5%";
    slide2.style.right="2.5%";
    slide3.style.right="0.5%";

    pagee2.style.backgroundImage="url('/static/images/sun2.jpg')";
    pagee1.style.backgroundImage="url('/static/images/meteroid2.png')";
    

    seperation.style.display="block";

    profile.src="/static/images/kunaldark.jpg";
    image_sec.style.color="black";
}


function mainsec(){
    about_section.style.display="block";
}
function mainsec2(){
    contact_section.style.display="block";
}
function mainsec3(){
    beam.style.display="block";
}
function aboutme(){
    beam.style.display="none";
    contact_section.style.display="none";
    window.setTimeout(mainsec3,200);
    window.setTimeout(mainsec,2000);

}

function contactme(){
    beam.style.display="none";
    about_section.style.display="none";
    window.setTimeout(mainsec3,200);
    window.setTimeout(mainsec2,2000);
}

function closecontact(){
    contact_section.style.display="none";
    beam.style.display="none";
}
function closeabout(){
    beam.style.display="none";
    about_section.style.display="none";
}


function clouded(){
    cloud1.style.display="block";
}
function stopaudio(){
    myaudio.pause();
}

function changewindow(){
    window.location.href = "/views/main.html";
}
function changetheme(){
    para1.style.display="none";
    para2.style.display="block";
    moon1.style.display="none";
    moon12.style.display="block";
    roc1.style.display="none";
    roc2.style.display="block";
    myaudio.play();
    window.setTimeout(stopaudio,19000);
    window.setTimeout(changewindow,19000);


    window.setTimeout(clouded,13000);

}