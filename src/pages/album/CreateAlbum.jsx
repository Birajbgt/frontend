import React, { useState } from 'react';
import axios from 'axios';

const CreateAlbum = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    const handleFileChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        try {
            await axios.post('http://localhost:5500/api/album/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Album created successfully!');
        } catch (error) {
            console.error('Error creating album:', error);
            alert('Error creating album!');
        }
    };

    return (
        <div>
            <h2>Create Album</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Images:</label>
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Create Album</button>
            </form>
        </div>
    );
};

export default CreateAlbum;
