
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload a local file to Cloudinary
const uploadToCloudinary = async (filePath, folder) => {
  const response = await cloudinary.uploader.upload(filePath, {
    folder,
    resource_type: "auto",
  });
  return response;
};

// Delete a file from Cloudinary using its public URL or public_id
const deleteFromCloudinary = async (fileUrl, resourceType = "raw") => {
  if (!fileUrl) return;
  try {
    // Extract public_id from the URL
    const parts = fileUrl.split("/");
    const fileName = parts[parts.length - 1].split(".")[0];
    const folderIndex = parts.indexOf("upload") + 2; // skip version segment
    const publicId = parts.slice(folderIndex).join("/").split(".")[0];
    await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
  } catch (err) {
    console.warn("Could not delete Cloudinary file:", err.message);
  }
};

module.exports = cloudinary;
module.exports.uploadToCloudinary = uploadToCloudinary;
module.exports.deleteFromCloudinary = deleteFromCloudinary;
