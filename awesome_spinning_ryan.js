const scene    = new THREE.Scene(),
      cam      = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
      render   = new THREE.WebGLRenderer();

var light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
light.position.set( 0, 1, 50 ).normalize();
scene.add( light );

scene.background = new THREE.Color(0xdddddd);
render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);

const fbxL     = new THREE.FBXLoader();
const shootem  = fbxL.load('assets/shootem_nogun.fbx');
cam.position.z = 5;

scene.add(shootem);

function anim()
{
    requestAnimationFrame(anim);
    render.render(scene, cam);
}
anim();