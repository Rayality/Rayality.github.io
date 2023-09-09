import { useRef, useEffect, Component } from 'react';

export default function Digital() {
    let animID = useRef();
    useEffect(() => {
        const canvas = document.getElementById("rain")
        const ctx = canvas.getContext('2d')
        class Symbol extends Component{
            constructor(x, y, fontSize, canvasHeight) {
                super()
                this.x = x;
                this.y = y;
                this.fontSize = fontSize;
                this.canvasHeight = canvasHeight;
                this.characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                this.text = ''
            }
            draw(context) {
                this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length))
                context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize)
                if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.94) {
                    this.y = 0;
                } else {
                    this.y += 1;
                }
            }
        }

        class Effect extends Component{
            constructor(canvasWidth, canvasHeight) {
                super()
                this.canvasWidth = canvasWidth;
                this.canvasHeight = canvasHeight;
                this.fontSize = 8;
                this.columns = Math.floor(this.canvasWidth / this.fontSize);
                this.symbols = [];
                this.#initialize();
            }

            #initialize() {
                for (let i = 0; i < this.columns +1; i++) {
                    this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight)
                }
            }
        }

        let effect = new Effect(canvas.width, canvas.height);
        let lastTime = 0;
        const fps = 10;
        const nextFrame = 1000/fps
        let timer = 0;
        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        function animate(timeStamp) {
            const delta = timeStamp - lastTime;
            lastTime = timeStamp;
            if (timer > nextFrame) {
                timer = 0
                ctx.fillStyle = "rgba(0, 0, 0, 0.09)"
                ctx.textAlign = 'center'
                ctx.fillRect(0, 0, canvas.width, canvas.height)
                ctx.fillStyle = '#0aff0a';
                ctx.font = effect.fontSize + 'px monospace';
                effect.symbols.forEach(symbol => symbol.draw(ctx));
            } else {
                timer += delta;
            }
            animID.current=requestAnimationFrame(animate)
        }
        animID.current = requestAnimationFrame(animate);
        return ()=>cancelAnimationFrame(animID.current)
    },[])

}