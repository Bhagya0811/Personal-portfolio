declare module 'three/examples/jsm/loaders/GLTFLoader' {
  const GLTFLoader: any;
  export { GLTFLoader };
  export default GLTFLoader;
}

declare module 'three/examples/jsm/controls/OrbitControls' {
  import { EventDispatcher } from 'three';
  import { Camera } from 'three';
  export class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);
    update(): void;
    dispose(): void;
  }
  export default OrbitControls;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      directionalLight: any;
      hemisphereLight: any;
      primitive: any;
      mesh: any;
      group: any;
      perspectiveCamera: any;
      orthographicCamera: any;
      boxGeometry: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
    }
  }
}

declare module 'react-scroll' {
  export const Link: any;
  export const Element: any;
  export const scroller: any;
  export const animateScroll: any;
}

