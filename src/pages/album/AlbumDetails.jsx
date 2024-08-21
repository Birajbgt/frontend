import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AlbumDetails = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                console.log("hi")
                const response = await axios.get('http://localhost:5500/api/albums');
                console.log("hello", response.data.albums)
                setAlbums(response.data.albums);
            } catch (error) {
                setError('Failed to load albums');
                console.error("There was an error fetching the albums!", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAlbums();
    }, []);



    if (loading) return <div className="d-flex justify-content-center align-items-center min-vh-100"><div>Loading...</div></div>;
    if (error) return <div className="alert alert-danger text-center">{error}</div>;

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2 className="display-4">Albums</h2>
            </div>
            <div className="row">
                {albums.map((album) => (
                    <div key={album._id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <img
                                src={`http://localhost:5500/albums/${album.images[0]}`}
                                className="card-img-top img-fluid rounded-top"
                                alt={album.title}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{album.title}</h5>
                                <p className="card-text">{album.description}</p>
                                <Link to={`/albums/${album._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumDetails;
