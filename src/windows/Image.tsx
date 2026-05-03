import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;
    if (!data) return <h1>Loading...</h1>;
    const { name, imageUrl } = data;
    return (
        <>
            <div id='window-header'>
                <WindowControls target='imgfile' />
                <h2>{name}</h2>
            </div>
            <div className="bg-white p-5">
                <img src={imageUrl} className="w-full rounded-xl" alt={name} />
            </div>
        </>
    )
}

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;