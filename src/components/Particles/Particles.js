import "./Particles.scss";

import React, { useEffect, useRef } from 'react';

import * as THREE from "three";

export default function Particles() {

  const refContainer = useRef(null);

  var renderer = new THREE.WebGLRenderer({ alpha: true, antialias:true});
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
  var sphere_geometry = new THREE.SphereGeometry(0.05, 8, 8);
  var material = new THREE.MeshNormalMaterial( {wireframe: true });

  //const script = document.createElement("script");
  //script.src = "../../assets/scripts/perlin.js";
  //script.async = true;
  //document.body.appendChild(script);

  function animate() {
    //sphere.rotation.x += 0.01;
    //sphere.rotation.y += 0.01;

    renderer.render(scene,camera);
    //requestAnimationFrame(animate);
  }

  useEffect(() => {    
    refContainer.current.appendChild( renderer.domElement );
    
    // default bg canvas color //
    //renderer.setClearColor(0x7b7b7b);
    //  use device aspect ratio //
    renderer.setPixelRatio(window.devicePixelRatio);
    // set size of canvas within window //
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.z = 5;

    var x_n = 16;
    var y_n = 10;

    for (var i = 0; i <= y_n; i++) {
        for (var j = 0; j <= x_n; j++) {
            var sphere = new THREE.Mesh(sphere_geometry, material);
            sphere.position.y = -y_n/4 + i*0.5;
            sphere.position.x = -x_n/4 + j*0.5;
            scene.add(sphere);
        }
    }

    requestAnimationFrame(animate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={refContainer} className="particles"/>
  )
}