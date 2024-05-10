import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

const SectionPrendas = () => {
    return (
        <section className='sectionProductos'>

            <div>
                <Link to="/Camisas">
                    <img src="https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67084028_99_D1.jpg?ts=1703842425927&imwidth=417&imdensity=2" alt="" />
                </Link>
                <Link to="/Camisas"> <p>Camisas</p></Link>
            </div>
            <div>
                <Link to="/Trajes">
                    <img src="https://shop.mango.com/assets/rcs/pics/static/T6/fotos_alt/S/67046313_08_03_D9.jpg?ts=1713517443000&imwidth=320&imdensity=2" alt="" />
                </Link>
                <Link to="/Trajes"> <p>Trajes</p></Link>
            </div>

            <div>
                <Link to="/Pantalones">
                    <img src="https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67036725_05_D5.jpg?ts=1713955043287&imwidth=320&imdensity=2" alt="" />
                </Link>
                < Link to="/Pantalones"> <p>Pantalones</p></Link>
            </div>
            <div>
                <Link to="/Accesorios">
                    <img src="https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S/67000454_PL-99999999_01.jpg?ts=1702573386188&imwidth=320&imdensity=2" alt="" />
                </Link>
                <Link to="/Accesorios"> <p>Accesorios</p></Link>
            </div>



        </section>
    )
}

export default SectionPrendas
