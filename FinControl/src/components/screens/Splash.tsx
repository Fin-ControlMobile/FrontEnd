import { AVPlaybackStatus, ResizeMode, Video } from "expo-av"
import { useRouter } from "expo-router";
import { hideAsync } from "expo-splash-screen";
import { useState } from "react";
import { StyleSheet } from "react-native"

type Props = {
    onComplete: (status: boolean) => void;
}

export function Splash({ onComplete }: Props) {

    const router = useRouter();
    const [lastStatus, setStatus] = useState<AVPlaybackStatus>( {} as AVPlaybackStatus)

    function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
        if(status.isLoaded) {
            if(lastStatus.isLoaded !== status.isLoaded) {
                hideAsync();
            }

            if(status.didJustFinish) {
                onComplete(true);
                router.push("/login");
            }
        }

        setStatus(() => status);
    }

    return (
        <Video
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={require('../../../assets/imgs/SplashScreen.mp4')}
            isLooping={false}
            shouldPlay={true}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        />
    )
}