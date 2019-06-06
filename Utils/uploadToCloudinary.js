import swal from 'sweetalert';
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dbyvxd3za/image/upload';
const cloudinaryUploadPreset = "iuemz9mo";

const uploadToCloudnary = data => {
  data.append('upload_preset', cloudinaryUploadPreset);

  return window
    .fetch(cloudinaryUrl, {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
    .then(res => res.json())
    .then((res) => {
      swal({
        title: 'Image loading...',
        timer: 1000
      });
    return res;
  })
    .catch((err) => {
      swal({
        icon: 'warning',
        title: err,
        timer: 2000
      });
      return err;
    });
};

export default uploadToCloudnary;
