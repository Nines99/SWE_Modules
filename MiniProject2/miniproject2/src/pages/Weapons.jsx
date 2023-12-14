import React from 'react'
import { useData } from '../hooks/useData'
import CustomCard from '../components/CustomCard'

export default function Weapons() {
    const WeaponData = useData('https://valorant-api.com/v1/weapons', []) 
console.log(WeaponData.data)
   
  return (
    <>
    {WeaponData.data?.map((weapon, index) => 
    
    <CustomCard key = {index} name = {weapon.displayName} image = {weapon.displayIcon}/>


    )}

    </>
  )
}
