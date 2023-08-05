const personNames = [
    'bibi netanyahu',
    'benjamin netanyahu',
    'netanyahu',
    'bibi',
    'ביבי',
    'נתניהו',
    'ביבי נתניהו',
    'בנימין נתניהו'
];
const PLACEHOLDER_URL = '//placehold.co/widthXheight/EEE/31343C?font=oswald&text=hide%20him';

const images = document.getElementsByTagName('img');

function changeImag({ image }) {
    const newImage = new Image();
    newImage.style = image.style;
    const width = image.clientWidth;
    const height = image.clientHeight;
    if (image?.parentNode && width && height) {
        newImage.src = PLACEHOLDER_URL.replace('width', width).replace('height', height);
        image.parentNode.replaceChild(newImage, image);
    } else {
        image.style.display = 'none';
    }
}

Array.from(images).forEach((image) => {
    const altText = image.getAttribute('alt');
    const src = image.getAttribute('src');
    const title = image.getAttribute('title');

    personNames.forEach((personName) => {
        const inAltText = altText && altText.toLowerCase().includes(personName.toLowerCase());
        const inSrc = src && src.toLowerCase().includes(personName.toLowerCase());
        const inTitle = title && title.toLowerCase().includes(personName.toLowerCase());

        if (inAltText || inSrc || inTitle) {
            changeImag({ image });
        }
    });
});
