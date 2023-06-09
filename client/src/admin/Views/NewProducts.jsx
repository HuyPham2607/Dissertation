import NavbarAdmin from '../Components/layout/NabvarAdmin/NavbarAdmin';
import SidbarAdmin from '../Components/layout/SidbarAdmin/SidbarAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { AddProducts } from '../../redux/apiCall';
import { useDispatch } from 'react-redux';
import AlertMessage from '../../Components/layout/AlertMessage/AlertMessage';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { adminRequest } from '../../requestMethods';
import app from '../../firebase';

function NewProducts() {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [type, setType] = useState(null);
    const [Identified, setIdentified] = useState(null);
    const [alertblock, setAlertBloack] = useState('none');
    const [alertblockfiel, setAlertBloackfiel] = useState('none');

    const handleChangeInput = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeType = (e) => {
        setType(e.target.value);
    };
    const handleChangeIdentified = (e) => {
        setIdentified(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime + file.name;
        const Storage = getStorage(app);
        const StorageRef = ref(Storage, fileName);
        const uploadTask = uploadBytesResumable(StorageRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('upload is paused');
                        break;
                    case 'running':
                        console.log('upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {},
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = {
                        ...inputs,
                        title: title,
                        imageUrl: downloadURL,
                        identified: Identified,
                        typeProduct: type,
                    };

                    const AddNewProducts = async () => {
                        adminRequest
                            .post(`http://localhost:5000/api/products/add`, product)
                            .then((res) => {
                                const data = res.data;
                                console.log(res);
                                AddProducts(data, dispatch);
                                if (data.success) {
                                    setAlertBloack('block');
                                    setTimeout(() => {
                                        setAlertBloack('none');
                                    }, 5000);
                                }
                            })
                            .catch((err) => {
                                console.log(err.response.data);
                                if (err.response.data.success === false) {
                                    setAlertBloackfiel('block');
                                    setTimeout(() => {
                                        setAlertBloackfiel('none');
                                    }, 5000);
                                }
                            });
                    };
                    AddNewProducts();
                });
            },
        );
    };

    return (
        <div>
            <NavbarAdmin />
            <div className="col-12 page-chart py-5">
                <div className="row">
                    <div className="nav-admin-dashboard">
                        <SidbarAdmin />
                    </div>
                    <div className="display-admin-dashboard padding-0">
                        <div className="d-flex home-route">
                            <span>
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                            <div className="px-2">/ New Product</div>
                        </div>
                        <div>
                            <h1>New Product</h1>
                        </div>
                        <AlertMessage open={alertblock} info="Successfully ! Product has been to created !" />
                        <AlertMessage
                            variant="danger"
                            open={alertblockfiel}
                            info="Failed ! Please check your product information !"
                        />
                        <div className="wrapper-dashboard-admin">
                            <div className="new-products-product-admin ">
                                <div>
                                    <div className="add-image-newproduct-admin my-2">
                                        <label htmlFor="file">Image</label>
                                        <br />
                                        <input
                                            type="file"
                                            name="name"
                                            id="file"
                                            placeholder="Air Jordan 1 Low SE"
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </div>
                                    <div className="add-name-newproduct-admin my-2">
                                        <label htmlFor="name">Product Name</label>
                                        <br />
                                        <input
                                            className="input-name-newproduct-admin"
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Air Jordan 1 Low SE"
                                            onChange={(e) => handleChangeInput(e)}
                                        />
                                    </div>
                                    <div className="add-price-newproduct-admin my-2">
                                        <label htmlFor="price">Price</label>
                                        <br />
                                        <input
                                            className="input-price-newproduct-admin"
                                            type="text"
                                            name="price"
                                            id="price"
                                            onChange={(e) => handleChangeInput(e)}
                                        />
                                    </div>
                                    <div className="add-color-newproduct-admin my-2">
                                        <label htmlFor="color">Color</label>
                                        <br />
                                        <input
                                            className="input-color-newproduct-admin"
                                            type="text"
                                            name="color"
                                            id="color"
                                            placeholder="red,black,blue, ..."
                                            onChange={(e) => handleChangeInput(e)}
                                        />
                                    </div>
                                    <div className="add-size-newproduct-admin  my-2">
                                        <label htmlFor="size">Size</label>
                                        <br />
                                        <input
                                            className="input-size-newproduct-admin"
                                            type="text"
                                            name="size"
                                            id="size"
                                            placeholder="41,42,43,44, ..."
                                            defaultValue="36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5"
                                            onChange={(e) => handleChangeInput(e)}
                                        />
                                    </div>
                                    <div className="add-title-newproduct-admin  my-2 d-flex justify-content-between">
                                        <label htmlFor="title">Choose title:</label>
                                        <select
                                            id="title"
                                            name="title"
                                            form="title"
                                            onChange={(e) => handleChangeTitle(e)}
                                        >
                                            <option defaultValue="Chooes">Choose Option</option>
                                            <option value="Men">Men</option>
                                            <option value="Wonmen">Wonmen</option>
                                            <option value="Kids">Kids</option>
                                        </select>
                                    </div>
                                    <div className="add-type-newproduct-admin  my-2 d-flex justify-content-between">
                                        <label htmlFor="type">Choose Type:</label>
                                        <select id="type" name="type" form="type" onChange={(e) => handleChangeType(e)}>
                                            <option value="Type">Choose Type</option>
                                            <option value="Shoesmens">Shoes-Mens</option>
                                            <option value="Shoeswomens">Shoes-Womens</option>
                                            <option value="Shoeskids">Shoes-Kids</option>
                                            <option value="Clothingwomens">Clothing-Womens</option>
                                            <option value="Clothingmens">Clothing-Mens</option>
                                            <option value="Clothingkids">Clothing-Kids</option>
                                        </select>
                                    </div>
                                    <div className="add-identified-newproduct-admin my-2 d-flex justify-content-between">
                                        <label htmlFor="identified">Choose identified:</label>
                                        <select
                                            id="identified"
                                            name="identified"
                                            form="identified"
                                            onChange={(e) => handleChangeIdentified(e)}
                                        >
                                            <option disabled value="identified">
                                                Choose identified
                                            </option>
                                            {/* mens */}
                                            <option
                                                disabled
                                                style={{ background: '#00B5B8', fontSize: '20px' }}
                                                value=""
                                            >
                                                Mens
                                            </option>
                                            <option value="Runningmens">Running-Mens</option>
                                            <option value="Jordanmens">Jordan-Mens</option>
                                            <option value="GymandTrainingmens">Gym and Training Mens</option>
                                            <option value="TopAndTShirtsmens">Top and T-Shirts Mens</option>
                                            <option value="Hoodies&Sweatshirtsmens">Hoodies & Sweatshirts Mens</option>
                                            <option value="Shortsmens">Shorts-Mens</option>
                                            <option value="Footballmens">Football-Mens</option>
                                            <option value="BacsicsEssentinalsmens">BacsicsEssentinals-Mens</option>
                                            {/* women */}
                                            <option
                                                disabled
                                                style={{ background: '#97D1CB', fontSize: '20px' }}
                                                value=""
                                            >
                                                Womens
                                            </option>

                                            <option value="PerformanceEssentinalswomens">PerformanceEssentinals</option>
                                            <option value="AllShoeswomens">AllShoes-Women</option>
                                            <option value="Sustainablematerialwomens">Sustainablematerial</option>
                                            <option value="Runingwomen">Runing-Women</option>
                                            <option value="Tenniswomen">Tennis-Women</option>
                                            <option value="GymandTrainingwomens">GymandTraining-Women</option>
                                            <option value="TopAndTShirtswomens">Top and T-Shirts Womens</option>
                                            <option value="Hoodies&Sweatshirtswomens">
                                                Hoodies & Sweatshirts Womens
                                            </option>
                                            <option value="PantandLeggingwomens">Pants & Leggings Womens</option>

                                            {/* kids */}
                                            <option
                                                disabled
                                                style={{ background: '#00B5B8', fontSize: '20px' }}
                                                value=""
                                            >
                                                Kids
                                            </option>
                                            <option value="BagsandBackpackskdis">Bags & Backpack Kids</option>
                                            <option value="ClubfootballKids">Clubfootball Kids</option>

                                            <option value="AllShoeswomens">AllShoes-Women</option>
                                            <option value="SandalsandSlideswomen">Sandals and Slides Kids</option>
                                            <option value="JordanKids">Jordan-Kids</option>
                                            <option value="LifeStyleKids">LifeStyle-Kids</option>
                                            <option value="TopAndTShirtsKids">Top and T-Shirts Kids</option>
                                            <option value="Hoodies&SweatshirtsKids">Hoodies & Sweatshirts Kids</option>
                                            <option value="PantandLeggingwomens">Pants & Leggings Womens</option>
                                            <option value="ShortKids">Short Kids</option>
                                            <option value="PantandLeggingKids">Pants & Leggings Kids</option>
                                        </select>
                                    </div>

                                    <div className="created-new-product-admin">
                                        <button
                                            className="btn-created-new-product-admin"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProducts;
