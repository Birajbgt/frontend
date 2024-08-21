import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createNoteApi, deleteNote, getAllNotess } from "../../components/Api";

const AddNotes = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [note, setNote] = useState('');

    useEffect(() => {
        getAllNotess().then((res) => {
            if (Array.isArray(res.data.notes)) {
                console.log(res.data.notes)
                setNotes(res.data.notes);
            }
        }).catch((error) => {
            toast.error("Failed to load notes");
        });
    }, []);

    // Handle form submit for creating a new note
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('priority', priority);
        formData.append('notes', note);

        createNoteApi(formData)
            .then((res) => {
                if (res.status === 201) {
                    toast.success("Note created successfully");
                    setNotes(prevNotes => [...prevNotes, res.data.note]);
                } else {
                    toast.error("Something went wrong!");
                }
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || "Server error occurred");
            });
    };

    // Handle note deletion
    const handleDelete = (id) => {
        const confirmDialog = window.confirm("Are you sure you want to delete?");
        if (confirmDialog) {
            deleteNote(id).then((res) => {
                if (res.status === 200) {
                    toast.success("Note deleted successfully");
                    setNotes(notes.filter(note => note._id !== id));
                }
            }).catch((error) => {
                toast.error("Failed to delete note");
            });
        }
    };

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between">
                <h3>Notes</h3>
                <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Add Note
                </button>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create a new note</h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label>Note Title</label>
                                <input
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter note title"
                                />
                                <label className="mt-2">Choose the Priority</label>
                                <select
                                    onChange={(e) => setPriority(e.target.value)}
                                    className="form-control"
                                >
                                    <option value="">Select priority</option>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                                <label className="mt-2">Add Note</label>
                                <textarea
                                    onChange={(e) => setNote(e.target.value)}
                                    className="form-control"
                                ></textarea>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button onClick={handleSubmit} type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                {notes && notes.length > 0 ? (
                    notes.map((singleNote) => (
                        <div key={singleNote._id} className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{singleNote.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Priority: {singleNote.proprities}</h6>
                                    <p className="card-text">{singleNote.notes}</p>
                                    <Link to={`/note/update/${singleNote._id}`} className="btn btn-primary me-2">Edit</Link>
                                    <button onClick={() => handleDelete(singleNote._id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No notes available</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddNotes;
