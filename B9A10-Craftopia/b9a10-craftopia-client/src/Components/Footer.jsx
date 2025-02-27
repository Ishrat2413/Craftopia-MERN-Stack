import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-black">
            <div className="footer p-10 flex justify-between max-w-6xl mx-auto text-white">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <div className="footer px-10 py-4 border-t border-base-300 max-w-6xl mx-auto text-white">
                <aside className="items-center grid-flow-row">
                    <h1 className="text-4xl font-bold">CraftoPia</h1>
                    <p className="font-semibold">Your very own CraftoPia Arts & Craft</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><FaTwitter className="text-3xl"></FaTwitter></a>
                        <a><FaYoutube className="text-3xl"></FaYoutube></a>
                        <a><FaInstagram className="text-3xl"></FaInstagram></a>
                    </div>
                </nav>
            </div>
        </div>
    );
};


export default Footer;
