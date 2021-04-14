// const axios = require('axios').default;
// const fetch = require('node-fetch');

// Cloudinary url
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/corentin7301/upload/'

// In settings/Upload presets/Unsigned uploading enabled
const CLOUDINARY_UPLOAD_PRESET = 'zgxmpxyu'

let images = [
    // "https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/5/8/858743bb35_50169458_chien-min.jpg"
    // "https://res.cloudinary.com/corentin7301/image/upload/f_auto,q_auto/v1/corentinperroux.fr/accueil/L_arcalod_j8dzsm.jpg",
    // "https://res.cloudinary.com/corentin7301/image/upload/f_auto,q_auto/v1/corentinperroux.fr/accueil/Subaru_sti2_r1icle.jpg",
    // "https://res.cloudinary.com/corentin7301/image/upload/f_auto,q_auto/v1/corentinperroux.fr/accueil/Rapha%C3%ABl5_ucxjtj.jpg",
    // "https://res.cloudinary.com/corentin7301/image/upload/f_auto,q_auto/v1/corentinperroux.fr/accueil/Tristan2_zys0j6.jpg"
]

images.forEach(image => {

    let formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    
    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function (res) {
        console.log('URL :', res.data.secure_url);
    }).catch(function (err) {
        console.error(err)
    })
});


// FETCH

// fetch('https://api.cloudinary.com/v1_1/corentin7301/upload/', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: file
// }).then(function (res) {
//     console.log(res);
// }).catch(function (err) {
//     console.error(err)
// })
