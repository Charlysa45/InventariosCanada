import React from 'react'
import TitlePage from '../../../Components/TitlePage'
import functionalitiesIcon from '../../../../assets/FunctionalitiesIcon.png'
import { useParams } from 'react-router-dom'
import WarehouseForm from './components/WarehouseForm/WarehouseForm'
import ShoppingForm from './components/ShoppingForm/ShoppingForm'
import { motion } from 'framer-motion'
import Reports from './components/Reports/Reports'
import Quality from './components/Quality/Quality'

const FunctPage = () => {
  const {functName} = useParams();

  return (
    <motion.section id='Functionalities' initial={{x: 300}} animate={{x:0}}>
        <TitlePage icon={functionalitiesIcon} title={'Fonctionnalités'} subtitle={functName} backLink={'/fonctionalites'}/>
        <hr className={functName}/>
        <div className={`form-box ${functName}`}>
          {functName === 'achats' &&
            <ShoppingForm/>
          }
          {functName === 'inventaire' &&
            <WarehouseForm/>
          }
          {functName === 'rapports' &&
            <Reports/>
          }
          {functName === 'qualite' &&
            <Quality/>
          }
        </div>
    </motion.section>
  )
}

export default FunctPage