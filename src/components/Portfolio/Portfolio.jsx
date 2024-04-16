// Portfolio.jsx

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import found from "@/images/banner/fondPcBanner.webp";
import Title from '../Title/Title';
import WorksContainer from './WorksContainer';
import data from "@/data/data.json";
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import useObserverAnimation from '../Helper/ObserverAnimation';
import { toggleStateOfModal } from '@/redux/modalSlice/modalSlice';

const Portfolio = () => {
  const stateModal = useSelector((state) => state.modal.stateOfModal);
  const stateIdModal = useSelector((state) => state.modal.modalId);
  const stateModalMode = useSelector((state) => state.modal.modalMode);
  const dataProject = data.projects

  const [currentWorksIndex, setCurrentWorksIndex] = useState(0);
  const [animateTop, setAnimateTop] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(Array(dataProject.length).fill(false));
  const [animatedModal, setAnimatedModal] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    const workIndex = data.projects.findIndex(works => works.id === stateIdModal);
    if (workIndex !== -1) {
      setCurrentWorksIndex(workIndex);
    }
  }, [stateIdModal]);

  const dataSelected = data.projects[currentWorksIndex];

  // On gère l'ouverture et la fermeture de la modal

  useEffect(() => {
    if(stateModal) {
      setAnimatedModal(true)
    } else {
      setAnimatedModal(false)
    }
  }, [stateModal])

  const nextWork = () => {
    setAnimatedModal(false)
    const timer = setTimeout(() => {
      setCurrentWorksIndex((nextIndex) => (nextIndex + 1) % data.projects.length);
      setAnimatedModal(true)
    }, 500)
    return () => clearTimeout(timer)
  };

  const previousWorks = () => {
    setAnimatedModal(false)
    const timer = setTimeout(() => {
      setAnimatedModal(true)
      setCurrentWorksIndex((prevIndex) => (prevIndex - 1 + data.projects.length) % data.projects.length);
    }, 500)
    return () => clearTimeout(timer)
  };

  const previousProjectTitle = data.projects[(currentWorksIndex - 1 + data.projects.length) % data.projects.length];
  const nextProjectTitle = data.projects[(currentWorksIndex + 1) % data.projects.length];

  // Gestion de l'animation des items
  
  const { observedRef, isIntersecting } = useObserverAnimation();

  useEffect(() => {
    if (isIntersecting) {
      setAnimateTop(true);
      const timer = setTimeout(() => {
        const animationInterval = setInterval(() => {
          setAnimatedItems((prevItems) => {
            const nextItems = [...prevItems];
            const nextIndex = nextItems.findIndex((animated) => !animated);
            if (nextIndex !== -1) {
              nextItems[nextIndex] = true;
            } else {
              clearInterval(animationInterval);
            }
            return nextItems;
          });
        }, 350);
        return () => clearInterval(animationInterval);
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting, dataProject]);

  // On gère la fermeture de la modal

  const closeModal = () => { 
    setAnimatedModal(false)
    const timer = setTimeout(() => {
      dispatch(toggleStateOfModal(false))
    }, 500)
    return () => clearTimeout(timer)
  }

  return (
    <section id='portfolio' ref={observedRef} className='portfolio'>
      <Image
        className='portfolio-foundImage'
        src={found}
        alt="Image d'un fond blanc avec des formes"
      />
      <div className='portfolio-container'>
        <div className={`${'portfolio-container-top'} ${animateTop ? "portfolio-container-top-animate" : ''}`}>
          <Title title="Mes réalisations" />
          <p className='portfolio-container-top-subTitle'>Découvrez l'ensemble de mes réalisations</p>
        </div>
        <div className='portfolio-container-row'>
          <WorksContainer data={dataProject} animatedItems={animatedItems} />
        </div>
      </div>
      {stateModal && stateModalMode === "portfolio" && (
        <Modal
          title={dataSelected.title}
          imageModal={dataSelected.image}
          imageModalAlt={dataSelected.textAltImage}
          widthImage={350}
          heightImage={225}
          dataStack={dataSelected.stack}
          textDescription={dataSelected.description}
          textClient={dataSelected.nature}
          linkSite={dataSelected.link}
          linkGithub={dataSelected.linkGithub}
          nextProject={nextWork}
          prevProject={previousWorks}
          nextTitle={nextProjectTitle.title}
          previousTitle={previousProjectTitle.title}
          animateModal={animatedModal}
          toogleCloseModal={closeModal}
        />
      )}
    </section>
  );
};

export default Portfolio;

