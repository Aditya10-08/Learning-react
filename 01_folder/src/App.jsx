import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Featured Cards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Card img="https://images.unsplash.com/photo-1764352104218-2d3a899ce36c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" user="Aadi" age={22} desc="A passionate Coder who loves to code " />
          <Card img="https://images.unsplash.com/photo-1763244737689-563d724b563f?q=80&w=691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" user="Kaushal" age={23} desc="Kaushal is a passionate developer who loves to code"/>
          <Card img="https://images.unsplash.com/photo-1764773965937-8c6c0f2ad915?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" user="Aadi" age={21} desc="Passionate about technology and innovation" />
          <Card img="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" user="Kaushal" age={24} desc="A developer with a passion about technology" />
        </div>
      </div>
    </main>
  )
}

export default App