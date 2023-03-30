import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../../redux/apiCall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faAngleLeft,
    faBars,
    faXmark,
    faCaretDown,
    faCaretUp,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
function Navbars() {
    const dispatch = useDispatch();
    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);
    const [inputsearch, setInputSearch] = useState('');
    const [sidebaruser, setsidebaruser] = useState(false);
    const products = useSelector((state) => state.products.products);
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
    };
    const routeChangeregister = () => {
        let path = `/register`;
        navigate(path);
    };
    const routeChangeShoes = () => {
        let path = `/shoes`;
        navigate(path);
    };
    const routeChangeHome = () => {
        let path = `/`;
        navigate(path);
    };

    const routeChangeDashBoard = () => {
        let path = `/admin/dashboard`;
        navigate(path);
    };

    const routeChangeCart = () => {
        let path = `/cart`;
        navigate(path);
    };
    const routeChangeShoesRunning = () => {
        let path = `/shoes-runing`;
        navigate(path);
    };
    const routeChangeJordan = () => {
        let path = `/jordan`;
        navigate(path);
    };
    const routeChangeGymandTraining = () => {
        let path = `/gymandtraining`;
        navigate(path);
    };
    const routeChangeBackToBasics = () => {
        let path = `/bacsicseseentinails`;
        navigate(path);
    };
    const routeChangeTopsAndTShirts = () => {
        let path = `/TopAndTShirts`;
        navigate(path);
    };
    const routeChangeHoodiesAndSweatshirts = () => {
        let path = `/hoodiesandsweatshirts`;
        navigate(path);
    };

    const routeChangeShortMen = () => {
        let path = `/shortmen`;
        navigate(path);
    };

    const routeChangeMen = () => {
        let path = `/men`;
        navigate(path);
    };
    const routeChangeWoMen = () => {
        let path = `/women`;
        navigate(path);
    };
    const routeChangeClubFootBall = () => {
        let path = `/clubfootball`;
        navigate(path);
    };
    const routeChangeAllClothing = () => {
        let path = `/allclothingmen`;
        navigate(path);
    };
    const routeChangeProfile = () => {
        let path = `/profile`;
        navigate(path);
    };

    /// women
    const routeChangePerformance = () => {
        let path = `/performanceEssentinals`;
        navigate(path);
    };
    const routeChangeSustainableMaterial = () => {
        let path = `/SustainableMaterial`;
        navigate(path);
    };
    const routeChangeAllShoseWomen = () => {
        let path = `/allshosewomen`;
        navigate(path);
    };
    const routeChangeRunningWomen = () => {
        let path = `/running-women`;
        navigate(path);
    };
    const routeChangeTennisWomen = () => {
        let path = `/tennis-women`;
        navigate(path);
    };
    const routeChangeGymandTrainingWomen = () => {
        let path = `/gymandtraining-women`;
        navigate(path);
    };
    const routeChangeAllClothingWomen = () => {
        let path = `/allclothing-women`;
        navigate(path);
    };
    const routeChangeTopandTshirtsWomen = () => {
        let path = `/topandtshirts-women`;
        navigate(path);
    };
    const routeChangehoodiesandSweatshirtsWomen = () => {
        let path = `/hoodiesandsweatshirt-women`;
        navigate(path);
    };
    const routeChangepantsandLeggingsWomen = () => {
        let path = `/pantsandlegging-women`;
        navigate(path);
    };

    /// Kids
    const routeChangeBagsandBackpacks = () => {
        let path = `/bagsandbackpackskids`;
        navigate(path);
    };
    const routeChangeClubFootBallKids = () => {
        let path = `/clubfootballkids`;
        navigate(path);
    };
    const routeChangeAllShosekids = () => {
        let path = `/allshose-kids`;
        navigate(path);
    };
    const routeChangeSandalsandSlideskids = () => {
        let path = `/sandalandslides-kids`;
        navigate(path);
    };
    const routeChangeJordankids = () => {
        let path = `/jordan-kids`;
        navigate(path);
    };
    const routeChangeLifeStylekids = () => {
        let path = `/lifestyle-kids`;
        navigate(path);
    };
    const routeChangeAllClothingkids = () => {
        let path = `/allclothing-kids`;
        navigate(path);
    };
    const routeChangeTopandTshirtskids = () => {
        let path = `/topandtshirts-kids`;
        navigate(path);
    };
    const routeChangehoodiesandSweatshirtskids = () => {
        let path = `/hoodiesandsweatshirt-kids`;
        navigate(path);
    };
    const routeChangeShortkids = () => {
        let path = `/short-kids`;
        navigate(path);
    };
    const routeChangepantsandLeggingskids = () => {
        let path = `/pantsandlegging-kids`;
        navigate(path);
    };

    const routeProduct = (_id) => {
        const s = document.getElementById('pre-scrim');
        const x = document.getElementById('list-search');
        const u = document.getElementById('nav-search');
        u.classList.remove('nav-search');
        x.classList.remove('nav-list-display-block');
        s.classList.remove('is-open');
        let path = `/products/${_id}`;
        navigate(path);
    };

    ///Logou
    const handleDeleteLocalStorage = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('persist:root');
        routeChangeHome();
        window.location.reload();
    };

    const handleFocus = () => {
        const s = document.getElementById('pre-scrim');
        const x = document.getElementById('list-search');
        const u = document.getElementById('nav-search');
        u.classList.add('nav-search');
        x.classList.add('nav-list-display-block');
        s.classList.add('is-open');
    };
    const handleUnFocus = () => {
        const s = document.getElementById('pre-scrim');
        const x = document.getElementById('list-search');
        const u = document.getElementById('nav-search');
        u.classList.remove('nav-search');
        x.classList.remove('nav-list-display-block');
        s.classList.remove('is-open');
    };

    let SearchProduct;
    if (products) {
        SearchProduct = products.filter((e) => {
            if (inputsearch === '') {
                return e;
            } else {
                return e.name.includes(inputsearch);
            }
        });
    }
    const handleSearch = (e) => {
        var lowerCase = e.target.value;
        setInputSearch(lowerCase);
    };

    const proPerPage = 4;
    const pagesVistied = proPerPage;
    const displayUser = SearchProduct.slice(pagesVistied, pagesVistied + proPerPage).map((item, i) => {
        return (
            <div key={i}>
                <div className="py-2 d-flex" onClick={() => routeProduct(item._id)}>
                    <img className="image-small" src={item.imageUrl} alt="" />
                    <div className="name-small mx-3">{item.name}</div>
                </div>
            </div>
        );
    });

    const handleMenu = () => {
        const m = document.getElementById('nav-sidebar');
        const s = document.getElementById('pre-scrim');
        s.classList.add('is-open');
        m.classList.add('active-menu');
        m.classList.remove('unactive-menu');
    };

    const handleCloseMenu = () => {
        const s = document.getElementById('pre-scrim');
        const m = document.getElementById('nav-sidebar');
        const men = document.getElementById('nav-men');
        const women = document.getElementById('nav-women');
        const kids = document.getElementById('nav-kids');
        s.classList.remove('is-open');
        m.classList.add('unactive-menu');
        m.classList.remove('active-menu');
        men.classList.remove('nav-men-open');
        men.classList.add('nav-men-unopen');
        women.classList.remove('nav-women-open');
        women.classList.add('nav-women-unopen');
        kids.classList.remove('nav-kids-open');
        kids.classList.add('nav-kids-unopen');

        ////
        const mennew = document.getElementById('nav-men-new');
        mennew.classList.remove('nav-men-new-open');
        mennew.classList.add('nav-men-new-unopen');
        const womennew = document.getElementById('nav-women-new');
        womennew.classList.remove('nav-women-new-open');
        womennew.classList.add('nav-women-new-unopen');
        const kidsnew = document.getElementById('nav-kids-new');
        kidsnew.classList.remove('nav-kids-new-open');
        kidsnew.classList.add('nav-kids-new-unopen');
        /////
        const shoesmen = document.getElementById('nav-men-shoes');
        shoesmen.classList.remove('nav-men-shoes-open');
        shoesmen.classList.add('nav-men-shoes-unopen');
        const shoeswomen = document.getElementById('nav-women-shoes');
        shoeswomen.classList.remove('nav-women-shoes-open');
        shoeswomen.classList.add('nav-women-shoes-unopen');
        const shoes = document.getElementById('nav-kids-shoes');
        shoes.classList.remove('nav-kids-shoes-open');
        shoes.classList.add('nav-kids-shoes-unopen');
        ////
        const clothingmen = document.getElementById('nav-men-clothing');
        clothingmen.classList.remove('nav-men-clothing-open');
        clothingmen.classList.add('nav-men-clothing-unopen');
        const clothingwomen = document.getElementById('nav-women-clothing');
        clothingwomen.classList.remove('nav-women-clothing-open');
        clothingwomen.classList.add('nav-women-clothing-unopen');
        const clothingkids = document.getElementById('nav-kids-clothing');
        clothingkids.classList.remove('nav-kids-clothing-open');
        clothingkids.classList.add('nav-kids-clothing-unopen');
    };

    const handleCloseAll = () => {
        handleUnFocus();
        handleCloseMenu();
    };

    const hanldeClickNavMen = () => {
        const men = document.getElementById('nav-men');
        men.classList.add('nav-men-open');
        men.classList.remove('nav-men-unopen');
    };

    const hanldeClickNavWomen = () => {
        const women = document.getElementById('nav-women');
        women.classList.add('nav-women-open');
        women.classList.remove('nav-women-unopen');
    };

    const hanldeClickNavKids = () => {
        const kids = document.getElementById('nav-kids');
        kids.classList.add('nav-kids-open');
        kids.classList.remove('nav-kids-unopen');
    };

    const handleCloseNaVMen = () => {
        const men = document.getElementById('nav-men');
        men.classList.remove('nav-men-open');
        men.classList.add('nav-men-unopen');
    };

    const handleCloseNaVWomen = () => {
        const women = document.getElementById('nav-women');
        women.classList.remove('nav-women-open');
        women.classList.add('nav-women-unopen');
    };

    const handleCloseNaVKids = () => {
        const kids = document.getElementById('nav-kids');
        kids.classList.remove('nav-kids-open');
        kids.classList.add('nav-kids-unopen');
    };

    const handleNavMenNewOpen = () => {
        const mennew = document.getElementById('nav-men-new');
        mennew.classList.add('nav-men-new-open');
        mennew.classList.remove('nav-men-new-unopen');
    };

    const handleNavWomenNewOpen = () => {
        const womennew = document.getElementById('nav-women-new');
        womennew.classList.add('nav-women-new-open');
        womennew.classList.remove('nav-women-new-unopen');
    };

    const handleNavKidsNewOpen = () => {
        const kidsnew = document.getElementById('nav-kids-new');
        kidsnew.classList.add('nav-kids-new-open');
        kidsnew.classList.remove('nav-kids-new-unopen');
    };

    const handleBackNavMen = () => {
        const backmen = document.getElementById('nav-men-new');
        const shoesbackmen = document.getElementById('nav-men-shoes');
        const clthingbackmen = document.getElementById('nav-men-clothing');
        shoesbackmen.classList.remove('nav-men-shoes-open');
        shoesbackmen.classList.add('nav-men-shoes-unopen');
        backmen.classList.remove('nav-men-new-open');
        backmen.classList.add('nav-men-new-unopen');
        clthingbackmen.classList.remove('nav-men-clothing-open');
        clthingbackmen.classList.add('nav-men-clothing-unopen');
    };

    const handleBackNavWomen = () => {
        const backwomen = document.getElementById('nav-women-new');
        const shoesbackwomen = document.getElementById('nav-women-shoes');
        const clthingbackwomen = document.getElementById('nav-women-clothing');
        shoesbackwomen.classList.remove('nav-women-shoes-open');
        shoesbackwomen.classList.add('nav-women-shoes-unopen');
        backwomen.classList.remove('nav-women-new-open');
        backwomen.classList.add('nav-women-new-unopen');
        clthingbackwomen.classList.remove('nav-women-clothing-open');
        clthingbackwomen.classList.add('nav-women-clothing-unopen');
    };

    const handleBackNavKids = () => {
        const backkids = document.getElementById('nav-kids-new');
        const shoesbackkids = document.getElementById('nav-kids-shoes');
        const clthingbackkids = document.getElementById('nav-kids-clothing');
        shoesbackkids.classList.remove('nav-kids-shoes-open');
        shoesbackkids.classList.add('nav-kids-shoes-unopen');
        backkids.classList.remove('nav-kids-new-open');
        backkids.classList.add('nav-kids-new-unopen');
        clthingbackkids.classList.remove('nav-kids-clothing-open');
        clthingbackkids.classList.add('nav-kids-clothing-unopen');
    };

    const handleOpenShoes = () => {
        const shoes = document.getElementById('nav-men-shoes');
        shoes.classList.add('nav-men-shoes-open');
        shoes.classList.remove('nav-men-shoes-unopen');
    };

    const handleOpenShoesWomen = () => {
        const shoes = document.getElementById('nav-women-shoes');
        shoes.classList.add('nav-women-shoes-open');
        shoes.classList.remove('nav-women-shoes-unopen');
    };
    const handleOpenShoesKids = () => {
        const shoes = document.getElementById('nav-kids-shoes');
        shoes.classList.add('nav-kids-shoes-open');
        shoes.classList.remove('nav-kids-shoes-unopen');
    };

    const handleOpenClothing = () => {
        const clothingmen = document.getElementById('nav-men-clothing');
        clothingmen.classList.add('nav-men-clothing-open');
        clothingmen.classList.remove('nav-men-clothing-unopen');
    };
    const handleOpenClothingWomen = () => {
        const clothingwomen = document.getElementById('nav-women-clothing');
        clothingwomen.classList.add('nav-women-clothing-open');
        clothingwomen.classList.remove('nav-women-clothing-unopen');
    };

    const handleOpenClothingKids = () => {
        const clothing = document.getElementById('nav-kids-clothing');
        clothing.classList.add('nav-kids-clothing-open');
        clothing.classList.remove('nav-kids-clothing-unopen');
    };

    const handleUsernameMenuSidebar = () => {
        const username = document.getElementById('username-menusidebar');
        username.classList.toggle('open-sidebar');
        setsidebaruser(!sidebaruser);
    };
    ///cart selector
    const quantity = useSelector((state) => state.cart.quantity);
    let user = useSelector((state) => state.user.currentUser);
  

    let body = (
        <>

            <Navbar className="navbar-2">
                <Navbar.Brand onClick={routeChangeHome} className="nav-bar">
                    <svg className="pre-logo-svg" height="60px" width="60px" fill="#111" viewBox="0 0 69 32">
                        <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
                    </svg>
                </Navbar.Brand>
                <div className="nav-header nav-center">
                    <ul className="menu-main">
                        <li className="px-3">
                            <span onClick={routeChangeMen}>Men</span>
                            <div className="menu-sub" id="menu-sub">
                                <div className="d-flex justify-content-center">
                                    <div className="list">
                                        <h5 className="text-center">New & featured</h5>
                                        <ul className="text-center">
                                            <li onClick={routeChangeBackToBasics}>
                                                <span>Basics Essentinals</span>
                                            </li>
                                            <li onClick={routeChangeClubFootBall}>
                                                <span>Club Football</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="list">
                                        <h5 className="text-center">Shoes</h5>
                                        <ul className="text-center">
                                            <li onClick={routeChangeShoes}>
                                                <span>All Shoes</span>
                                            </li>
                                            <li onClick={routeChangeShoesRunning}>
                                                <span>Running</span>
                                            </li>
                                            <li onClick={routeChangeJordan}>
                                                <span>Jordan</span>
                                            </li>
                                            <li onClick={routeChangeGymandTraining}>
                                                <span>Gym and Training</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="list">
                                        <h5 className="text-center">Clothing</h5>
                                        <ul className="text-center">
                                            <li onClick={routeChangeAllClothing}>
                                                <span>All Clothing</span>
                                            </li>
                                            <li onClick={routeChangeTopsAndTShirts}>
                                                <span>Tops and T-Shirts</span>
                                            </li>
                                            <li onClick={routeChangeHoodiesAndSweatshirts}>
                                                <span>Hoodies & Sweatshirts</span>
                                            </li>
                                            <li onClick={routeChangeShortMen}>
                                                <span>Shorts</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span onClick={routeChangeWoMen}>Women</span>
                            <div className="menu-sub">
                                <div className="d-flex justify-content-center">
                                    <div className="list">
                                        <h5 className="text-center">New & featured</h5>
                                        <ul className="text-center">
                                            <li onClick={routeChangePerformance}>
                                                <span>Performance Essentinals</span>
                                            </li>
                                            <li onClick={routeChangeSustainableMaterial}>
                                                <span>Sustainable Material</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="list">
                                        <h5 className="text-center">Shoes</h5>
                                        <ul className="text-center">
                                            <li onClick={routeChangeAllShoseWomen}>
                                                <span>All Shoes</span>
                                            </li>
                                            <li onClick={routeChangeRunningWomen}>
                                                <span>Running</span>
                                            </li>
                                            <li onClick={routeChangeTennisWomen}>
                                                <span>Tennis</span>
                                            </li>
                                            <li onClick={routeChangeGymandTrainingWomen}>
                                                <span>Gym and Training</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="list">
                                        <h5 className="text-center">Clothing</h5>
                                        <ul className="text-center">
                                            <li onClick={routeChangeAllClothingWomen}>
                                                <span>All Clothing</span>
                                            </li>
                                            <li onClick={routeChangeTopandTshirtsWomen}>
                                                <span>Tops and T-Shirts</span>
                                            </li>
                                            <li onClick={routeChangehoodiesandSweatshirtsWomen}>
                                                <span>Hoodies & Sweatshirts</span>
                                            </li>
                                            <li onClick={routeChangepantsandLeggingsWomen}>
                                                <span>Pants and Leggings</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="px-3">
                            <span>Kids</span>
                            <div className="menu-sub">
                                <div className="d-flex justify-content-center">
                                    <div className="list">
                                        <h5 className="text-center">New & featured</h5>
                                        <ul className="text-center">
                                            <li onClick={routeChangeBagsandBackpacks}>
                                                <span>Bags & Backpacks</span>
                                            </li>
                                            <li onClick={routeChangeClubFootBallKids}>
                                                <span>Club Football</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="list">
                                        <h5 className="text-center">Shoes</h5>
                                        <ul className="text-center">
                                            <li onClick={routeChangeAllShosekids}>
                                                <span>All Shoes</span>
                                            </li>
                                            <li onClick={routeChangeSandalsandSlideskids}>
                                                <span>Sandals & Slides</span>
                                            </li>
                                            <li onClick={routeChangeJordankids}>
                                                <span>Jordan</span>
                                            </li>
                                            <li onClick={routeChangeLifeStylekids}>
                                                <span>Lifestyle</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="list">
                                        <h5 className="text-center">Clothing</h5>
                                        <ul className="text-center">
                                            <li onClick={routeChangeAllClothingkids}>
                                                <span>All Clothing</span>
                                            </li>
                                            <li onClick={routeChangeTopandTshirtskids}>
                                                <span>Tops and T-Shirts</span>
                                            </li>
                                            <li onClick={routeChangehoodiesandSweatshirtskids}>
                                                <span>Hoodies & Sweatshirts</span>
                                            </li>
                                            <li onClick={routeChangeShortkids}>
                                                <span>Shorts</span>
                                            </li>
                                            <li onClick={routeChangepantsandLeggingskids}>
                                                <span>Pants and Leggings</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nav-bottom">
                    <Form.Control
                        className="input-search"
                        onFocus={handleFocus}
                        onChange={(e) => handleSearch(e)}
                        type="search"
                        id="nav-search"
                        placeholder="Search"
                        aria-label="Search"
                    />

                    <Button variant="outline border-none">
                        <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                            <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path>
                        </svg>
                    </Button>
                    <Button onClick={routeChangeCart} variant="outline border-none" className="button-cart">
                        <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                            <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                            <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
                        </svg>
                        <Badge>{quantity}</Badge>
                    </Button>
                    <div>
                        <div className="menu-navbar pt-1 px-2">
                            <div onClick={handleMenu}>
                                <FontAwesomeIcon icon={faBars} size="2x" />
                            </div>
                        </div>
                    </div>
                    <nav className="nav-sidebar unactive-menu" id="nav-sidebar">
                        <div onClick={handleCloseMenu} className="close-sidebar-menu">
                            <span className="px-4">
                                <FontAwesomeIcon icon={faXmark} size="2x" />
                            </span>
                        </div>
                        <div>
                            <button
                                onClick={hanldeClickNavMen}
                                className="d-flex justify-content-between btn-sidebar-menu"
                            >
                                <span>Men</span>
                                <span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                            </button>
                            <nav className="nav-men nav-men-unopen" id="nav-men">
                                <div className="nav-back-all">
                                    <h3 className="text-center">Men</h3>
                                    <button
                                        onClick={handleCloseNaVMen}
                                        className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faAngleLeft} />
                                        </span>
                                        <span>ALL</span>
                                    </button>
                                    <div>
                                        <button
                                            onClick={handleNavMenNewOpen}
                                            className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                        >
                                            <div className="pt-1">New & Featured</div>
                                            <div className="pt-1">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                        </button>
                                        <nav className="nav-men-new nav-men-new-unopen" id="nav-men-new">
                                            <div>
                                                <button
                                                    onClick={handleBackNavMen}
                                                    className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                                >
                                                    <span>
                                                        <FontAwesomeIcon icon={faAngleLeft} />
                                                    </span>
                                                    <span>Men</span>
                                                </button>
                                                <button
                                                    onClick={routeChangeBackToBasics}
                                                    className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                                >
                                                    <div className="pt-1">Bacsic Eseentinals</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button
                                                    onClick={routeChangeClubFootBall}
                                                    className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                                >
                                                    <div className="pt-1">Club Football</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                            </div>
                                        </nav>
                                        <button
                                            onClick={handleOpenShoes}
                                            className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                        >
                                            <div className="pt-1">Shoes</div>
                                            <div className="pt-1">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                        </button>
                                        <nav className="nav-men-shoes nav-men-shoes-unopen" id="nav-men-shoes">
                                            <div>
                                                <button
                                                    onClick={handleBackNavMen}
                                                    className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                                >
                                                    <span>
                                                        <FontAwesomeIcon icon={faAngleLeft} />
                                                    </span>
                                                    <span>Men</span>
                                                </button>
                                                <button
                                                    onClick={routeChangeShoes}
                                                    className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                                >
                                                    <div className="pt-1">All Shoes</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Running</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Jordan</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Gym and Training</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                            </div>
                                        </nav>
                                        <button
                                            onClick={handleOpenClothing}
                                            className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                        >
                                            <div className="pt-1">Clothing</div>
                                            <div className="pt-1">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                        </button>
                                        <nav className="nav-men-clothing nav-men-clothing-unopen" id="nav-men-clothing">
                                            <div>
                                                <button
                                                    onClick={handleBackNavMen}
                                                    className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                                >
                                                    <span>
                                                        <FontAwesomeIcon icon={faAngleLeft} />
                                                    </span>
                                                    <span>Men</span>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">All Clothing</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Tops And T'Shirts</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Hoodies & Sweatshirts</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Short</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </nav>
                            <button
                                onClick={hanldeClickNavWomen}
                                className="d-flex justify-content-between btn-sidebar-menu"
                            >
                                <span>Women</span>
                                <span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                            </button>
                            <nav className="nav-women nav-women-unopen" id="nav-women">
                                <div className="nav-back-all">
                                    <h3 className="text-center">Women</h3>
                                    <button
                                        onClick={handleCloseNaVWomen}
                                        className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faAngleLeft} />
                                        </span>
                                        <span>ALL</span>
                                    </button>
                                    <div>
                                        <button
                                            onClick={handleNavWomenNewOpen}
                                            className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                        >
                                            <div className="pt-1">New & Featured</div>
                                            <div className="pt-1">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                        </button>
                                        <nav className="nav-women-new nav-women-new-unopen" id="nav-women-new">
                                            <div>
                                                <button
                                                    onClick={handleBackNavWomen}
                                                    className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                                >
                                                    <span>
                                                        <FontAwesomeIcon icon={faAngleLeft} />
                                                    </span>
                                                    <span>Women</span>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3 ">
                                                    <div className="pt-1">Bacsic Eseentinals</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Club Football</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                            </div>
                                        </nav>
                                        <button
                                            onClick={handleOpenShoesWomen}
                                            className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                        >
                                            <div className="pt-1">Shoes</div>
                                            <div className="pt-1">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                        </button>
                                        <nav className="nav-women-shoes nav-women-shoes-unopen" id="nav-women-shoes">
                                            <div>
                                                <button
                                                    onClick={handleBackNavWomen}
                                                    className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                                >
                                                    <span>
                                                        <FontAwesomeIcon icon={faAngleLeft} />
                                                    </span>
                                                    <span>Women</span>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">All Shoes</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Running</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Jordan</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Gym and Training</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                            </div>
                                        </nav>
                                        <button
                                            onClick={handleOpenClothingWomen}
                                            className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                        >
                                            <div className="pt-1">Clothing</div>
                                            <div className="pt-1">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                        </button>
                                        <nav
                                            className="nav-women-clothing nav-women-clothing-unopen"
                                            id="nav-women-clothing"
                                        >
                                            <div>
                                                <button
                                                    onClick={handleBackNavWomen}
                                                    className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                                >
                                                    <span>
                                                        <FontAwesomeIcon icon={faAngleLeft} />
                                                    </span>
                                                    <span>Women</span>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">All Clothing</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Tops And T'Shirts</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Hoodies & Sweatshirts</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Short</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </nav>
                            <button
                                onClick={hanldeClickNavKids}
                                className="d-flex justify-content-between btn-sidebar-menu"
                            >
                                <span>Kids</span>
                                <span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                            </button>
                            <nav className="nav-kids nav-kids-unopen" id="nav-kids">
                                <div className="nav-back-all">
                                    <h3 className="text-center">Kids</h3>

                                    <button
                                        onClick={handleCloseNaVKids}
                                        className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                    >
                                        <span>
                                            <FontAwesomeIcon icon={faAngleLeft} />
                                        </span>
                                        <span>ALL</span>
                                    </button>
                                    <div>
                                        <button
                                            onClick={handleNavKidsNewOpen}
                                            className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                        >
                                            <div className="pt-1">New & Featured</div>
                                            <div className="pt-1">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                        </button>
                                        <nav className="nav-kids-new nav-kids-new-unopen" id="nav-kids-new">
                                            <div>
                                                <button
                                                    onClick={handleBackNavKids}
                                                    className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                                >
                                                    <span>
                                                        <FontAwesomeIcon icon={faAngleLeft} />
                                                    </span>
                                                    <span>Kids</span>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Bacsic Eseentinals</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Club Football</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                            </div>
                                        </nav>
                                        <button
                                            onClick={handleOpenShoesKids}
                                            className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                        >
                                            <div className="pt-1">Shoes</div>
                                            <div className="pt-1">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                        </button>
                                        <nav className="nav-kids-shoes nav-kids-shoes-unopen" id="nav-kids-shoes">
                                            <div>
                                                <button
                                                    onClick={handleBackNavKids}
                                                    className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                                >
                                                    <span>
                                                        <FontAwesomeIcon icon={faAngleLeft} />
                                                    </span>
                                                    <span>Kids</span>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">All Shoes</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Running</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Jordan</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Gym and Training</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                            </div>
                                        </nav>
                                        <button
                                            onClick={handleOpenClothingKids}
                                            className="w-100 btn-small-nav d-flex justify-content-between px-3"
                                        >
                                            <div className="pt-1">Clothing</div>
                                            <div className="pt-1">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                        </button>
                                        <nav
                                            className="nav-kids-clothing nav-kids-clothing-unopen"
                                            id="nav-kids-clothing"
                                        >
                                            <div>
                                                <button
                                                    onClick={handleBackNavKids}
                                                    className="d-flex w-100 justify-content-between btn-sidebar-menu"
                                                >
                                                    <span>
                                                        <FontAwesomeIcon icon={faAngleLeft} />
                                                    </span>
                                                    <span>Kids</span>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">All Clothing</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Tops And T'Shirts</div>{' '}
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Hoodies & Sweatshirts</div>
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                                <button className="w-100 btn-small-nav d-flex justify-content-between px-3">
                                                    <div className="pt-1">Short</div>{' '}
                                                    <div className="pt-1">
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </div>
                                                </button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div>
                            <span className="description-sidebar-menu px-4">
                                Become a Nike Member for the best products, inspiration and stories in sport. Learn more
                            </span>
                        </div>

                        <div>
                            <span>
                                <Button onClick={routeChangeCart} variant="outline border-none" className="button-cart">
                                    <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                                        <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                                        <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
                                    </svg>
                                    <Badge>{quantity}</Badge>
                                </Button>
                                Bag
                            </span>
                        </div>
                    </nav>
                </div>
            </Navbar>
            <div onClick={handleCloseAll} className="pre-scrim " id="pre-scrim" data-pre="Scrim"></div>
            <div className="form-list-search" id="list-search">
                <div className="d-flex justify-content-center">
                    <div className="list-item">
                        <p>Popular Search Terms</p>
                        <ul className="padding-0">{displayUser}</ul>
                    </div>
                </div>
            </div>
        </>
    );

    return body;
}

export default Navbars;
