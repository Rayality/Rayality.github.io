import { useRef, useEffect } from "react";
import pic from '../resources/headshot.png'


export default function ParticleImage() {
    const animID = useRef();
    const ref = useRef();
    const picture = new Image()
    picture.src = pic

    useEffect(() => {
        const canv = ref.current;
        const ctx = canv.getContext('2d');
        canv.width = 700;
        canv.height = 700;
        let particles = [];
        ctx.drawImage(picture, 0, 0, canv.width, canv.height)
        const pixels = ctx.getImageData(0, 0, canv.width, canv.height);
        ctx.clearRect(0, 0, canv.width, canv.height)
        let imageMap = [];
        for (let y = 0; y < canv.height; y++) {
            let row = [];
            for (let x = 0; x < canv.width; x++) {
                const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
                const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
                const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
                const brightness = howBright(red, green, blue)
                row.push([brightness]);
            }
            imageMap.push(row);
        }

        function howBright(red, green, blue) {
            return Math.sqrt(
                (red * red) * 0.3 +
                (green * green) * .587 +
                (blue * blue) * .114
            )/100;
        }


        class Particle {
            constructor(props) {
                this.x = props.x;
                this.y = props.y;
                this.brightness = props.brightness
                this.size = .5;
            }
            update() {

            }
            draw() {
                ctx.beginPath();
                ctx.fillStyle = `rgba(100,100,100,${this.brightness})`;
                ctx.font = '2px serif'
                ctx.fillText('x', this.x, this.y)
                ctx.fill()
            }
        }

        function init() {
            for (let i = 0; i < imageMap.length; i++) {
                for (let j = 0; j < imageMap[i].length; j++) {
                    particles.push(new Particle({ y:i, x:j, brightness:imageMap[i][j] }));
                }
            }
        }
        init();

        function animate() {
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(0, 0, canv.width, canv.height);
            ctx.globalAlpha = .5;
            particles.forEach((particle) => {
                // particle.update();
                particle.draw();
            })
            // cancelAnimationFrame(animID.current)
            // animID.current=requestAnimationFrame(animate);
        }
        animate()
        // animID.current=requestAnimationFrame(animate);
        // return ()=>cancelAnimationFrame(animID.current)
    }, [])

    return (
        <canvas ref={ref}/>
    )
}
