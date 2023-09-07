export function createPicture(file) {
    // return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function () {
    //         resolve(reader.result)
    //     };
    //     reader.onerror = reject
    // })

    const reader = new FileReader();
    reader.addEventListener('load', () => {
        localStorage.setItem('url', reader.result)
    })

    if (file) {
        reader.readAsDataURL(file);
    }
    return localStorage.getItem('image');
}