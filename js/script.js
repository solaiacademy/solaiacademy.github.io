const sideNav=document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNav);

const slider=document.querySelectorAll('.slider');
        M.Slider.init(slider,{
        	indicators:false,
        	height:350,
        	trasition:600,
        	interval: 2500
        });

var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);