import React from 'react'
import Sidebar from '../components/Left side/Sidebar'
import MainContent from '../components/Right side/MainContent'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
    <Sidebar />
    <MainContent />
  </div>
  )
}

export default Dashboard
