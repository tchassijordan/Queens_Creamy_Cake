export default function ImageRedirector(props) {
    function importAll(r) {
        let imagesObj = {};
        r.keys().map((item, index) => imagesObj[item.replace('./', '')] = r(item))
        return imagesObj;
    }
    const images = importAll(require.context('./images', true, /\.jpg$|.jpeg$|.svg$|.png$/))
    return images;
}