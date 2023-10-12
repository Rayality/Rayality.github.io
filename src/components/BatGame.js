import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


export default function BatGame(props) {
    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "BatGame/Build/batgamewgl-uncom.loader.js",
        dataUrl: "BatGame/Build/batgamewgl-uncom.data",
        frameworkUrl: "BatGame/Build/batgamewgl-uncom.framework.js",
        codeUrl: "BatGame/Build/batgamewgl-uncom.wasm",
    });
    useEffect(() => {
        if (props.requestUnload === true) {
            handleUnload()
        }
    }, [props, props.requestUnload])

    async function handleUnload() {
        console.log('trying to unload', )
        await unload();
        console.log(props.unloadedReplacement)
        props.setShown(props.unloadedReplacement);
    }

    return (
        <Unity unityProvider={unityProvider}  style={{ width: '50%', height: '100%', minWidth: '350px' }}/>
    );
}
