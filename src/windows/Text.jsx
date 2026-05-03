import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;
    if (!data) return <h1>Loading...</h1>;
    const { name, image, subtitle, description, content } = data;
    return (
        <>
            <div id='window-header'>
                <WindowControls target='txtfile' />
                <h2>{name}</h2>
            </div>
            <div className=" p-5 space-y-6 bg-white">
                {image ? (
                    <div className="w-full">
                        <img src={image} className="w-full rounded-xl" alt={name} />
                    </div>
                ) : null}

                {subtitle ? (<h3 className="text-lg font-semibold text-gray-900">
                    {subtitle}
                </h3>) : null}

                {Array.isArray(description) && description.length > 0 ? (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {description.map((line, idx) => (<p key={idx}>{line}</p>))}
                    </div>
                ) : null}

            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;