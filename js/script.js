let fullImgBox = document.querySelector('#fullImgBox'),
    fullImg = document.querySelector('#fullImg'),
    loading = document.querySelector('.loading');

function openFullImg(pic) {
    fullImgBox.style.display = 'flex';
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = 'none';
}

setTimeout(function() {
    loading.style.display = 'none';
}, 2000);