import React, { useState } from 'react'

export default function App() {
  const [weight, setWeight] = useState('75.1')
  const [skeletal, setSkeletal] = useState('32.7')
  const [bodyfat, setBodyfat] = useState('23.1')

  const bmi = (() => {
    const h = 1.83 // m
    const w = parseFloat(weight || '0')
    return w ? (w / (h*h)).toFixed(1) : '-'
  })()

  return (
    <div className="wrap">
      <header>Cut Tracker</header>

      <section className="cards">
        <div className="card">
          <label>체중 (kg)</label>
          <input value={weight} inputMode="decimal" onChange={e => setWeight(e.target.value)} />
        </div>
        <div className="card">
          <label>골격근량 (kg)</label>
          <input value={skeletal} inputMode="decimal" onChange={e => setSkeletal(e.target.value)} />
        </div>
        <div className="card">
          <label>체지방률 (%)</label>
          <input value={bodyfat} inputMode="decimal" onChange={e => setBodyfat(e.target.value)} />
        </div>
      </section>

      <section className="result">
        <div className="pill">
          <span>BMI</span>
          <strong>{bmi}</strong>
        </div>
      </section>

      <footer>홈 화면에 추가해서 앱처럼 사용해 보세요!</footer>
    </div>
  )
}
