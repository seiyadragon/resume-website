import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Links = () => {
    return (
        <section className="flex gap-4 translate-y-2">
            <Link 
                href="https://www.linkedin.com/in/arlen-molina-423159183"
                className="text-blue-400 text-3xl transition hover:scale-125"
            >
                <FaLinkedin />
            </Link>
            <Link
                href="https://github.com/seiyadragon"
                className="text-blue-400 text-3xl transition hover:scale-125"
            >
                <FaGithub />
            </Link>
            <Link
                href="https://twitter.com/arlenmolina101"
                className="text-blue-400 text-3xl transition hover:scale-125"
            >
                <FaTwitter />
            </Link>
        </section>
    )
}; export default Links