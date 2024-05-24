import React, { useState } from "react";

const AdminDashboard = () => {

    // State for input fields
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')


    // State for images

    const [productImage, setProductImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    // image upload handler
    const handleImage = (event) => {
        const file = event.target.files[0]
        setProductImage(file)  // for backend

        setPreviewImage(URL.createObjectURL(file))

    }

    // handle Summit 
    const handleSummit=(e)=>{
        e.preventDefult()
        console.log(
            productName,
            productCategory,
            productImage,
            productPrice,
            productDescription
        )
    }


    return (
        <>
            <div className="container mt-3">
                <div className="d-flex justify-content-between">
                    <h3>Admin Dashboard</h3>

                    <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Add Product
                    </button>

                    <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                                        Create a new product
                                    </h1>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <label> Product Name</label>
                                        <input onChange={(e) => setProductName(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter product name"
                                        />

                                        <label className="mt-2"> Product Price</label>
                                        <input onChange={(e) => setProductPrice(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Product Price"
                                        />

                                        <label className="mt-2">Choose the category</label>

                                        <select onChange={(e) => setProductCategory(e.target.value)} className="form-control">
                                            <option value="plants">Plants</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="gadgets">Gadgets</option>
                                            <option value="furniture">Furniture</option>
                                        </select>

                                        <label className="mt-2"> Enter Description</label>
                                        <textarea onChange={(e) => setProductDescription(e.target.value)} className="form-control"></textarea>

                                        <label className="mt-2">Choose Image</label>
                                        <input onChange={handleImage} type="file" className="form-control" />

                                        {/* Preview image */}
                                        {
                                            previewImage && <img src={previewImage} alt="preview image" className="img-fluid rounded mt-2" />
                                        }


                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button onClick={handleSummit} type="button" class="btn btn-primary">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table mt-2">
                    <thead class="table-dark">
                        {" "}
                        <tr>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Descriptions</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <img
                                    width={"40px"}
                                    height={"40px"}
                                    src="https://th.bing.com/th/id/R.e20f7ec88066f86e7aad2950004169e8?rik=VsxPD3Pg4jtTLA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fa%2fa9%2f20090809_Lotus_flower_2736.jpg&ehk=R%2fh6nva8bzB14hIEe1YBypqrfel6%2fmZx0SWoV5V7g0A%3d&risl=1&pid=ImgRaw&r=0"
                                    alt=""
                                />
                            </td>
                            <td>Flower</td>
                            <td>$10</td>
                            <td>Home Decor</td>
                            <td>Beautiful flower vase</td>

                            <td>
                                <button className="btn btn-primary"> Edit</button>
                                <button className="btn btn-danger ms-2"> Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminDashboard;