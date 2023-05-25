import React from 'react';
import ReactDOM from'react-dom/client';
import './app.css'
import Navbar from './components/navbar/navbar';
import Banner from './components/Banner/banner';
import Poster from './components/poster/poster'
import {actions,originals,romanceMovies,comedyMovies,horrorMovies,documentaries} from './url'


const AppLayout = ()=>{
    return (
        <>
        <Navbar/>
        <Banner/>
        <Poster title={'Netflix Originals'} url={originals} />
        <Poster title={'Action Movies'} isSmallImage url={actions} />
        <Poster title={'Romance Movies'} isSmallImage url={romanceMovies} />
        <Poster title={'Comedy Movies'} isSmallImage url={comedyMovies} />
        <Poster title={'Horror Movies'} isSmallImage url={horrorMovies} />
        <Poster title={'Documentaries'} isSmallImage url={documentaries} />
        </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<AppLayout/>)

