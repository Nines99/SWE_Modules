import React from 'react'
import { useData } from '../hooks/useData'
import CustomCard from '../components/CustomCard'

export default function Agents() {
    const AgentsData = useData('https://valorant-api.com/v1/agents', []) 
console.log(AgentsData.data)
   
  return (
    <>
    {AgentsData.data?.map((agents, index) => 
    
    <CustomCard key = {index} name = {agents.displayName} image = {agents.displayIcon}/>


    )}

    </>
  )
}
