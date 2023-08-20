import Sketch from 'react-p5'
import '../css/intro.css'


function SketchBG() {
    let x = 0;
    let y = 0;
    let angle = (x);
    let userX = 0;
    let userY = 0;

    document.addEventListener("mousemove", setXY);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth/4, window.innerHeight/2).parent(canvasParentRef)
        p5.background('rgba 0,0,0,0')
    }
    function setXY(event) {
        userX = event.clientX
        userY = event.clientY
        x=((window.parent.innerWidth/2)-userX)/500
        y=((window.parent.innerHeight-userY)*.4)
        angle = (.6 + (x * x) / 6)
    }

    const draw = p5 => {
        p5.frameRate(20);
        p5.background('rgba 1,2,3,.8');
        p5.translate(p5.width / 2, p5.height);
        branch(y / 6);

        function branch(len) {
            p5.stroke(150-len,150-len*2,150-len*3,150+len*5);
            p5.strokeWeight(len * .15);

            if (len > Math.floor(window.innerHeight / 11)) {
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);
                p5.push();
                p5.rotate(angle*.4-x/(len*.1));
                branch((len * .75));
                p5.pop();
                p5.rotate(-angle*.35-x/(len*.1));
                branch((len * .75));
            }

            else if (Math.floor(len) > 13){
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

    // const windowResized = p5 => {
    //     p5.resizeCanvas(p5.windowWidth/4, p5.windowHeight/2);
    // }

    return (
        <Sketch setup={setup} draw={draw} />
        )
    }

    export default SketchBG
