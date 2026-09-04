import {API_PATHS} from './apiPaths.js'
import axiosInstance from './axiosInstance.js'

const uploadImage = async (imageFile) => {
    const formData = new FormData(); // It is the built in browswer api way to oackage files(and other fields) for upload, mimicking a real HTML form submission,
    //Append image file to formData
    formData.append('image',imageFile);

    try{
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE,formData, {
            headers:{
                'Content-Type': 'multipart/form-data',  //set header for file upload 
            },
        });
        return response.data; //Return response data
    } catch (error) {
        console.error('Error uploading the image:',error);
        throw error; //Rethrow error for handling
    }
}

export default uploadImage;