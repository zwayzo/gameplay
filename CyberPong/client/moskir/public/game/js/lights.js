import {AmbientLight, DirectionalLight} from 'three'

const ambientLight = new AmbientLight(0xffffff, 0.8);
const dirLight = new DirectionalLight(0xffffff, 2);

dirLight.position.set(20, 20, 20);
dirLight.castShadow = true;
dirLight.shadow.mapSize.set(1024,1024);
dirLight.shadow.camera.top = 30;
dirLight.shadow.camera.bottom = -30;
dirLight.shadow.camera.left = -30;
dirLight.shadow.camera.right = 30;
dirLight.shadow.radius = 10;
dirLight.shadow.blurSamples = 20;

const lights = [dirLight, ambientLight];

export default lights;