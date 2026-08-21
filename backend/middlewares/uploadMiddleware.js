const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const fileFilter = (req, file, cb) => {
    // console.log("Field name:", file.fieldname);
    // console.log("Original name:", file.originalname);
    // console.log("MIME type:", file.mimetype);

    const allowedExtensions = [".jpg", ".jpeg", ".png"];

    const extension = path
        .extname(file.originalname)
        .toLowerCase();

    if (allowedExtensions.includes(extension)) {
        cb(null, true);
    } else {
        cb(
            new Error("Only .jpeg, .jpg and .png formats are allowed"),
            false
        );
    }
};

const upload = multer({
    storage,
    fileFilter,
});

module.exports = upload;