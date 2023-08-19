import Sketch from 'react-p5'
import '../css/intro.css'


function SketchBG() {
    let x = 50;
    let y = 50;
    let angle = (x);
    let userX = 50;
    let userY = 50;

    document.addEventListener("mousemove", setXY);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth/4, p5.windowHeight/2).parent(canvasParentRef)
        p5.background('rgba 0,0,0,0')
    }
    function setXY(event) {
        userX = event.clientX
        userY = event.clientY
        x=((window.parent.innerWidth/2)-userX)/500
        y=((window.parent.innerHeight-userY)*.7)
        angle = (.5 + x * x / 2)
    }

    const draw = p5 => {
        p5.frameRate(20);
        p5.background('rgba 1,2,3,.8');
        p5.translate(p5.width / 2, p5.height);
        branch(y / 6);

        function branch(len) {
            p5.stroke(150-len,150-len*2,150-len*3,150+len*5);
            p5.strokeWeight(len * .15);

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
        <Sketch setup={setup} draw={draw} windowResized={windowResized} />
        )
    }

    export default SketchBG
