const images =[
    'images/pic-1.avif',
    'images/pic-2.avif',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.avif',
    'images/pic-6.avif',
    'images/pic-7.avif',
    'images/pic-8.avif',
    'images/pic-9.avif',
    'images/pic-10.avif',
    'images/pic-11.avif',
    'images/pic-12.avif',
    'images/pic-13.avif',
    'images/pic-14.avif',
]


let imgIndex =0;
const imgId =document.getElementById('slider-image');
setInterval( ()=>{
    if(imgIndex === images.length){
        imgIndex =0;
    }
    const imgUrl =images[imgIndex];
    console.log(imgUrl);
    imgId.setAttribute('src',imgUrl);
    imgIndex++;
}, 1000)