import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>
            <div className="bg-white p-5 space-y-5 h-full">
                <img src="/images/adrian.jpg" alt="Sooriyan Padali" className="w-20 rounded-full" />
                <h3>Let's connect</h3>
                <p>Got an idea? A bug to report? Or just want to say hi? Send me a message!</p>
                <p className="text-sm font-medium">sooriyan10898@gmail.com</p>
                <ul>
                    {socials.map(({ id, icon, bg, text, link }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>

                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow