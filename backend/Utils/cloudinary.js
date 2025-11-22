import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config({ path: "backend/config/config.env" });

cloudinary.config({
  cloud_name: "do4snjg0o",
  api_key: "563915455672962",
  api_secret: "mhb_TxEliVIsYC5sVphGFvN3qo4",
});

// ✅ Upload file to Cloudinary
export const upload_file = (file, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      {
        resource_type: "auto",
        folder,
      },
      (error, result) => {
        if (error) return reject(error);
        resolve({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
    );
  });
};

// ✅ Delete file from Cloudinary
export const delete_file = async (public_id) => {
  const res = await cloudinary.uploader.destroy(public_id);
  return res.result === "ok";
};
