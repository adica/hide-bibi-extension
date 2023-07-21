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

const images = document.getElementsByTagName('img');

Array.from(images).forEach((image) => {
    const altText = image.getAttribute('alt');
    const src = image.getAttribute('src');
    personNames.forEach((personName) => {
        if (altText && altText.toLowerCase().includes(personName.toLowerCase())) {
            image.style.display = 'none';
        } else if (src && src.toLowerCase().includes(personName.toLowerCase())) {
            image.style.display = 'none';
        }
    });
});
