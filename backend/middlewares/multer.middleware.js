const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Determine folder and resource type based on MIME type
    const isImage = file.mimetype.startsWith("image/");
    return {
      folder: isImage ? "college-erp/profiles" : "college-erp/materials",
      resource_type: isImage ? "image" : "raw",
      allowed_formats: isImage
        ? ["jpg", "jpeg", "png", "webp"]
        : ["pdf", "doc", "docx", "ppt", "pptx", "xls", "xlsx", "txt"],
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
