const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();


// In settings/Upload presets/Unsigned uploading enabled


let images = [
    "https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/5/8/858743bb35_50169458_chien-min.jpg",
    "https://images.pexels.com/photos/3854478/pexels-photo-3854478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/6624612/pexels-photo-6624612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/7473017/pexels-photo-7473017.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/6399488/pexels-photo-6399488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];


async function superFetch() {

    for await (const image of images) {

        let datas = {
            file: image,
            upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET
        }

        const response = await fetch(process.env.CLOUDINARY_URL, {
            method: 'POST',
            body: JSON.stringify(datas),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const cleanResponse = await response.json()
        console.log(cleanResponse.secure_url);
        }
}
superFetch()