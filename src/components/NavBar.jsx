import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <>
            <div className="nav-bar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="/#"><span className='fw-bold fs-1 px-2 sp-1'>Vista</span><span className='fw-bold fs-1 px-2 sp-2'>Sport</span></a>
                        <form className="d-flex search-form" role="search">
                            <div className="input-group">
                            </div>
                        </form>
                        <div className="service-box d-flex flex-column justify-content-center align-items-center">
                            <span className='text-black-50'>Горячая линия</span>
                            <span className='fs-4'><a href="https://wa.me/79163688896?text=Здравствуйте!%20У%20меня%20есть%20вопрос." style={{color: "inherit", textDecoration: "none" }}>+79163688896</a></span>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
