
import Sketch from 'react-p5'
import '../intro.css'

function SketchBG() {
    let x = 50;
    let y = 50;
    let angle = (x);
    let userX = 50;
    let userY = 50;
    document.addEventListener("mousemove", setXY);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    }

    function setXY(event) {
        userX = event.clientX
        userY = event.clientY
        x=((window.parent.innerWidth/2)-userX)/500
        y=(window.parent.innerHeight-userY)
        angle = (.5 + x * x / 2)
    }

    const draw = p5 => {

        p5.frameRate(30);
        p5.background(51);
        p5.stroke(255/angle);
        p5.circle(userX,userY,window.parent.innerWidth/40)
        p5.translate(p5.width / 2, p5.height);
        branch(y / 6);
        function branch(len) {

            p5.stroke(0,0,0,110);
            p5.strokeWeight(len * .1);

            if (len > Math.floor(window.innerHeight / 10)) {
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);
                p5.push();
                p5.rotate(angle*.4-x/(len*.1));
                branch((len * .75));
                p5.pop();
                p5.rotate(-angle*.35-x/(len*.1));
                branch((len * .75));
            }

            else if (Math.floor(len) > 8){
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);

                p5.push();
                p5.rotate(angle*.35-x/(len*.1));
                branch((len * .8));

                p5.pop();
                p5.rotate(-angle*.4-x/(len*.1));
                branch((len * .8));
            }

            else {
                p5.push();
                p5.rotate(angle*.8-x/(len*.1));
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);
                p5.fill(p5.color(200, 250, 200,30));
                p5.ellipse(len / 4, 0, len / 4, len);
                p5.pop();
                p5.rotate(-angle*.8-x/(len*.1));
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);
                p5.fill(p5.color(200, 250, 200,30));
                p5.ellipse(len / 4, 0, len / 4, len);
            }
        }
    };

    const windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }

    return (
        <div className='canvas-parent'>
            <Sketch setup={setup} draw={draw} windowResized={windowResized} className={'canvas-parent'} />
        </div>
        )
    }

    export default SketchBG
