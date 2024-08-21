import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSingleNote, updateNote } from '../../components/Api';
// import { getSingleNote, updateNote } from '../../../components/Api';

const UpdateNote = () => {
    // Get ID from URL
    const { id } = useParams();

    // Get note information (from backend)
    useEffect(() => {
        getSingleNote(id).then((res) => {
            console.log(res.data);
            // Set the state with the fetched note data
            setTitle(res.data.note.title);
            setProprities(res.data.note.proprities);
            setNotes(res.data.note.notes);
        }).catch((error) => {
            console.log(error);
        });
    }, [id]);

    // State for input fields
    const [title, setTitle] = useState('');
    const [proprities, setProprities] = useState('');
    const [notes, setNotes] = useState('');

    // Handle update
    const handleUpdate = (e) => {
        e.preventDefault();

        // Make form data
        const formData = {
            title,
            proprities,
            notes,
        };

        // API call to update the note
        updateNote(id, formData).then((res) => {
            if (res.status === 200) {
                toast.success(res.data.message);
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                toast.error(error.response.data.message);
            } else if (error.response.status === 400) {
                toast.error(error.response.data.message);
            }
        });
    };

    return (
        <>
            <div className='container mt-3'>
                <h2>Update Note for <span className='text-danger'>'{title}'</span></h2>

                <form>
                    <label htmlFor="">Note Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' type="text" placeholder='Enter your note title' />

                    <label className='mt-2'>Choose Priority</label>
                    <select value={proprities} onChange={(e) => setProprities(e.target.value)} className='form-control'>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>

                    <label className='mt-2'>Enter Note</label>
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className='form-control'></textarea>

                    <button onClick={handleUpdate} className='btn btn-primary w-100 mt-2'>Update Note</button>
                </form>
            </div>
        </>
    );
};

export default UpdateNote;
