import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function BatGame() {
    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "BatGame/Build/batgamewgl-uncom.loader.js",
        dataUrl: "BatGame/Build/batgamewgl-uncom.data",
        frameworkUrl: "BatGame/Build/batgamewgl-uncom.framework.js",
        codeUrl: "BatGame/Build/batgamewgl-uncom.wasm",
    });
    useEffect(() =>{
        return ()=>unload
    },[])

    return (
        <Unity unityProvider={unityProvider} style={{width:'50%', height: '100%', minWidth:'350px'}}/>
    );
}
