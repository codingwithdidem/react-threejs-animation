import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { useSnapshot } from 'valtio'

const Palette = ({ state }) => {
  const snap = useSnapshot(state)
  return (
    <div
      style={{
        display: snap.current === null ? 'none' : 'block',
        position: 'absolute',
        top: '74px',
        left: '70px',
      }}
    >
      <HexColorPicker
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
      <h1>{state.current}</h1>
    </div>
  )
}

export default Palette
