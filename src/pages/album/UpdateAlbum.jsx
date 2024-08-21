import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateAlbum = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState({
        title: '',
        description: '',
        images: []
    });
    const [newImages, setNewImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const res = await axios.get(`http://localhost:5500/api/albums/${id}`);
                setAlbum(res.data.album);
            } catch (error) {
                setError('Failed to load album details');
                console.error("There was an error fetching the album details!", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAlbum();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAlbum({
            ...album,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setNewImages([...e.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', album.title);
        formData.append('description', album.description);

        // Append existing images' filenames to the form data
        album.images.forEach(image => {
            formData.append('existingImages', image);
        });

        // Append new images to the form data
        newImages.forEach(image => {
            formData.append('newImages', image);
        });

        try {
            await axios.put(`http://localhost:5500/api/albums/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate(`/albums/${id}`); // Redirect to the album details page after successful update
        } catch (error) {
            setError('Failed to update album');
            console.error("There was an error updating the album!", error);
        }
    };

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center min-vh-100"><div>Loading...</div></div>;
    }

    if (error) {
        return <div className="alert alert-danger text-center">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Update Album</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Album Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={album.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Album Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={album.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Current Images</label>
                    <div className="row">
                        {album.images.map((image, index) => (
                            <div key={index} className="col-md-4 col-sm-6 mb-4">
                                <div className="card">
                                    <img
                                        src={`http://localhost:5500/albums/${image}`}
                                        alt={`Album Image ${index + 1}`}
                                        className="card-img-top img-fluid rounded"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="images" className="form-label">Upload New Images</label>
                    <input
                        type="file"
                        className="form-control"
                        id="images"
                        multiple
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Album</button>
            </form>
        </div>
    );
};

export default UpdateAlbum;
