import multer  from 'multer';

class Storage {
    constructor(){
        console.log("storage");
    }

    public diskStorage() {
        return multer.diskStorage(
            {
                destination: (req, file, cb) => {
                    cb(null, "./images");
                },
                filename: (req, file, cb) => {
                    const fileName = file.originalname;
                    console.log("filename", fileName);
                    cb(null, fileName);
                }
            }
        );
    }

}

const storageClass = new Storage();
const storage= multer({storage: storageClass.diskStorage(), fileFilter: (req , file, cb) => {
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
} }).single('images');
export default storage;