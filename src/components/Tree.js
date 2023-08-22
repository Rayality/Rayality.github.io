import Sketch from 'react-p5'
import '../css/intro.css'


function SketchBG() {
    let x = 0;
    let y = 0;
    let angle = (x);
    let userX = 0;
    let userY = 0;

    document.addEventListener("mousemove", setXY);
    function setXY(event) {
        userX = event.clientX
        userY = event.clientY
        x=((window.parent.innerWidth/2)-userX)/500
        y=((window.parent.innerHeight-userY)*.4)
        angle = (.7 + (x * x) / 6)
    }

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth/3, window.innerHeight/1.8).parent(canvasParentRef)
        p5.background('rgb( 0,0,0)')
        console.log()
    }

    const draw = p5 => {
        p5.frameRate(20);
        p5.background('rgba(1,2,3,1)');
        p5.translate(p5.width / 2, p5.height);
        branch((p5.displayWidth*.7-userY)*.7 / 10);

        function branch(len) {
            p5.stroke(150-len,150-len*2,150-len*3);
            p5.strokeWeight(len * .15);

            if (Math.floor(len)>25) {
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);
                p5.push();
                p5.rotate((angle*.32-x/(len*.1))*.7);
                branch((len * .81));
                p5.pop();
                p5.rotate((-angle*.32-x/(len*.1))*.7);
                branch((len * .81));
            }

            else if (Math.floor(len) > 12){
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);

                p5.push();
                p5.rotate((angle*.30-x*1.1/(len*.1)));
                branch((len * .83));

                p5.pop();
                p5.rotate((-angle*.30-x*1.1/(len*.1)));
                branch((len * .82));
            }

            else {
                p5.push();
                p5.rotate(angle*.8-x/(len*.1));
                p5.fill(p5.color(200, 250, 200));
                p5.ellipse(len / 4, 0, len / 4, len);
                p5.pop();
                p5.rotate(-angle*.8-x/(len*.1));
                p5.fill(p5.color(200, 250, 200));
                p5.ellipse(len / 4, 0, len / 4, len);
            }
        }
    };

    const windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth/4, p5.windowHeight/2);
    }

    return (
        <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
        )
    }

    export default SketchBG
