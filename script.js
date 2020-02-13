const createSlice = ( sliceCount, imageSource, width ) => {
    let i = 0
    let slices = [];
    while (i < sliceCount) {
        let slice = document.createElement('div');
        slice.style.position = 'relative';
        slice.style.width = `${(width / sliceCount)}px`;
        slice.style.height = 'fit-content';
        slice.style.overflowX = 'hidden';
        slice.style.float = 'left';
        slice.style.marginLeft = '0em';

        let img = document.createElement('img');
        img.style.position = 'relative';
        img.style.marginLeft = `${(i * -1) * (width / sliceCount)}px`;
        img.style.width = `${sliceCount * 100}%`;
        img.style.height = 'auto';
        img.src = imageSource;
        slice.appendChild(img);
        slices.push(slice);
        i++;
    }
    slices.forEach( item => {
        document.querySelector('.pic-holder').appendChild(item);
    });
    return slices;

};

let slices = createSlice(7, "./images/man_clouds_height_154550_1280x720.jpg", 700);

function joinImage() {
    slices.forEach( item => {
        setTimeout(() => {
            item.style.marginLeft = '0em';
        }, 10);
    });
}
function spreadImage() {
    slices.forEach( item => {
        setTimeout(() => {
            item.style.marginLeft = '2em';
        }, 10);
    });
}

document.querySelector('.pic-holder').addEventListener('mouseenter', () => {
    spreadImage();
});
document.querySelector('.pic-holder').addEventListener('mouseleave', () => {
    joinImage();
});


