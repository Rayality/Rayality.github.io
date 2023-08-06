
import Sketch from 'react-p5'

function SketchBG() {
    document.addEventListener("mousemove", setXY);
    let x = 50;
    let y = 50;
    let angle = (x);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.parent.innerWidth, window.parent.innerHeight-5).parent(canvasParentRef)
    }

    function setXY(event) {
        x=((window.innerWidth/2)-event.clientX)/500
        y=(window.innerHeight-event.clientY)
        angle = (.5 + x * x / 2)
    }

    const draw = p5 => {
        p5.frameRate(10);
        p5.background(51);
        p5.stroke(255/angle);
        p5.translate(p5.width / 2, p5.height);
        console.log('x: ', x);
        branch(y / 6);
        function branch(len) {
            p5.stroke(0,0,0,120);
            p5.strokeWeight(len * .1);
            if (len > Math.floor(window.innerHeight/10)){
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);

                p5.push();
                p5.rotate(angle*.4-x/(len*.1));
                branch((len * .8));

                p5.pop();
                p5.rotate(-angle*.4-x/(len*.1));
                branch((len * .8));
            }
            else if (Math.floor(len) > 8){
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);

                p5.push();
                p5.rotate(angle*.4-x/(len*.1));
                branch((len * .75));

                p5.pop();
                p5.rotate(-angle*.4-x/(len*.1));
                branch((len * .75));
            }
            else {
                p5.push();
                p5.rotate(angle*.8-x/(len*.1));
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);
                p5.fill(p5.color(200, 250, 200,40));
                p5.ellipse(len / 4, 0, len / 4, len);
                p5.pop();
                p5.rotate(-angle*.8-x/(len*.1));
                p5.line(0, 0, 0, -len);
                p5.translate(0, -len);
                p5.fill(p5.color(200, 250, 200,40));
                p5.ellipse(len / 4, 0, len / 4, len);
            }
        }

    };
    const windowResized = p5 => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
    }
    document.addEventListener("resize",windowResized)

    return (
        <div style={{"overflow":"hidden"}}>
            <Sketch setup={setup} draw={draw} />
        </div>
        )
    }

    export default SketchBG
