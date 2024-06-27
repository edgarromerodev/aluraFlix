import React, { useState } from 'react'
import Banner from '../../components/banner/Banner'
import Categoria from '../../components/listavideos/Categoria'
import EditarVideoModal from '../../components/editarvideomodal/EditarVideoModal';

const Home = ({videos, eliminarVideo, actualizarVideo, categorias, marcarDestacado, desmarcarDestacado, destacados, favoritos, marcarFavorito, desmarcarFavorito, manejarLike, likes}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [videoParaEditar, setVideoParaEditar] = useState(null);

  const abrirModalEditar = (video) => {
    setVideoParaEditar(video);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setVideoParaEditar(null); // Limpiar el video seleccionado después de cerrar el modal
  };

  return (
    <>
    <Banner
    marcarDestacado = {marcarDestacado}
    desmarcarDestacado = {desmarcarDestacado}
    destacados = {destacados}
    videos={videos}
    />
    
    <Categoria videos={videos} 
    eliminarVideo= {eliminarVideo} 
    actualizarVideo={actualizarVideo} 
    abrirModalEditar={abrirModalEditar}
    destacados={destacados}
    desmarcarDestacado={desmarcarDestacado}
    marcarDestacado={marcarDestacado}
    marcarFavorito={marcarFavorito}
    desmarcarFavorito={desmarcarFavorito}
    favoritos={favoritos}
    manejarLike= {manejarLike}
    likes = {likes}
    />
    {modalVisible && <EditarVideoModal 
    cerrarModal={cerrarModal}
    
    video={videoParaEditar} // Pasa el video seleccionado al modal de edición
     actualizarVideo={actualizarVideo} 
     categorias={categorias}
    
    />}
    </>
  )
}

export default Home