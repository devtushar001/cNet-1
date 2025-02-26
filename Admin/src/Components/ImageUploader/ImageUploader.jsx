import React, { useState, useEffect, useContext } from "react";
import "./ImageUploader.css";
import { toast } from "react-toastify";
import { TShakyaContext } from "../../Context/TShakyContext";

const ImageUploader = ({ object, imageSelector }) => {
    const [image, setImage] = useState(null);
    const [images, setImages] = useState([]);
    const { backend_url } = useContext(TShakyaContext);

    const fetchImages = async () => {
        try {
            const response = await fetch(`${backend_url}/api/images/image`);
            if (!response.ok) {
                throw new Error("Failed to fetch images");
            }
            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error("Error fetching images:", error);
            toast.error("Failed to load images");
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleUpload = async () => {
        if (!image) return toast.error("Please select an image");

        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await fetch(`${backend_url}/api/images/upload`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const data = await response.json();
            toast.success(data.message);
            setImage(null);
            fetchImages();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this image?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`${backend_url}/api/images/delete`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Failed to delete image");
            }

            toast.success("Image deleted successfully!");
            fetchImages();
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Failed to delete image");
        }
    };

    return (
        <div className="image-uploader">
            <button onClick={() => setSingleImageSelector(false)}>Close</button>
            <div className="inputs">
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button onClick={handleUpload}>Upload</button>
            </div>

            <div className="outputs">
                {images.length === 0 ? (
                    <p>No images found.</p>
                ) : (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {images.map((img) => (
                            <div className="single-image-grid" key={img._id} style={{ margin: "10px" }}>
                                <img src={img.imageUrl} alt="Uploaded" height="250px" />
                                <div className="buttons">
                                    <button onClick={() => handleDelete(img._id)}>Delete</button>
                                    {object.selection ? <button onClick={() => { imageSelector((prev) => ({ ...prev, image: img.imageUrl })), imageSelector((prev) => ({ ...prev, selection: false })) }}>Use</button> : null}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageUploader;
