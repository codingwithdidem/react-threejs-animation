import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'

// https://www.cgtrader.com/items/2951928/download-page
const Cat = ({
  state,
  onPointerOver,
  onPointerOut,
  onPointerDown,
  onPointerMissed,
  ...rest
}) => {
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('/cat.glb')
  const group = useRef()

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = Math.sin(t / 4) / 4
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 2
  })

  return (
    <group
      ref={group}
      {...rest}
      dispose={null}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onPointerDown={onPointerDown}
      onPointerMissed={onPointerMissed}
    >
      <mesh
        geometry={nodes.Body.geometry}
        material={nodes.Body.material}
        position={[0, 0, 0]}
        scale={1.42}
      >
        <mesh
          geometry={nodes.Arms.geometry}
          material={nodes.Arms.material}
          position={[0.89, -0.2, -0.12]}
          rotation={[0, 0, 0.19]}
          scale={0.34}
        >
          <mesh
            geometry={nodes.Claws_arms.geometry}
            material={nodes.Claws_arms.material}
            position={[-0.04, -2.46, -0.48]}
            rotation={[0.05, 0.25, 0.06]}
            scale={0.28}
          />
        </mesh>
        <mesh
          geometry={nodes.Belly.geometry}
          material={materials.belly}
          material-color={snap.items.belly}
        >
          <mesh
            geometry={nodes.Marks_belly.geometry}
            material={nodes.Marks_belly.material}
            material-color={snap.items['skin']}
            position={[0, -0.11, 0.88]}
            rotation={[-0.52, 0, 0]}
            scale={[0.11, 0.04, 0.01]}
          />
          <mesh
            geometry={nodes.Marks_belly001.geometry}
            material={nodes.Marks_belly001.material}
            position={[0.43, -0.3, 0.86]}
            rotation={[-0.42, 0.43, 0.18]}
            scale={[0.11, 0.04, 0.01]}
          />
        </mesh>
        <mesh
          geometry={nodes.Ears.geometry}
          material={nodes.Ears.material}
          position={[0.44, 0.93, 0]}
          rotation={[0, 0, -0.27]}
          scale={[0.05, 0.05, 0.05]}
        />
        <group
          position={[0.46, 0.32, 0.78]}
          rotation={[-0.24, 0.63, -0.11]}
          scale={[0.11, 0.11, 0.05]}
        >
          <mesh
            geometry={nodes.Sphere.geometry}
            material={materials['eyes | sclera']}
            material-color={snap.items['eyes | sclera']}
          />
          <mesh
            geometry={nodes.Sphere_1.geometry}
            material={materials['eyes | pupil']}
            material-color={snap.items['eyes | pupil']}
          />
        </group>
        <mesh
          geometry={nodes.Feet.geometry}
          material={nodes.Feet.material}
          position={[0.26, -1.5, -0.12]}
          rotation={[0, -1.19, 1.63]}
          scale={[0.24, 0.18, 0.24]}
        >
          <mesh
            geometry={nodes.Claws_feet.geometry}
            material={nodes.Claws_feet.material}
            material-color={snap.items.claws}
            position={[-0.72, -2.4, -0.04]}
            rotation={[0.12, 0.19, -0.22]}
            scale={[0.36, 0.58, 0.32]}
          />
        </mesh>
        <mesh
          geometry={nodes.Leaf_hat.geometry}
          material={materials['leaf | body']}
          material-color={snap.items['leaf | body']}
          position={[0, 0.92, 0]}
          scale={0.41}
        >
          <mesh
            geometry={nodes.Stalk.geometry}
            material={materials['leaf | stalk']}
            material-color={snap.items['leaf | stalk']}
            position={[0.01, 0.41, -1.3]}
            rotation={[0.08, 0, 0]}
            scale={[0.15, 0.08, 0.59]}
          />
        </mesh>
        <mesh
          geometry={nodes.Nose.geometry}
          material={materials.nose}
          material-color={snap.items.nose}
          position={[0, 0.38, 0.8]}
          rotation={[1.01, 0, 0]}
          scale={[0.13, 0.12, 0.09]}
        />
        <mesh
          geometry={nodes.Tail.geometry}
          material={nodes.Tail.material}
          position={[0, -1.34, -0.86]}
          scale={[0.31, 0.31, 0.4]}
        />
        <mesh
          geometry={nodes.Whiskers.geometry}
          material={materials.whiskers}
          material-color={snap.items.whiskers}
          position={[0.42, 0.2, 0.4]}
          rotation={[0, 0.35, -0.05]}
          scale={[0.04, 0.04, 0.04]}
        />
      </mesh>
    </group>
  )
}

export default Cat
