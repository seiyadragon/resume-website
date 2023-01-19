import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Links = () => {
    return (
        <section className="flex gap-4 translate-y-2">
            <p className="text-blue-600 text-2xl relative bottom-2">{'['}</p>
            <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arlenmolina101@gmail.com"
                className="text-blue-400 text-xl transition hover:scale-125"
            >
                <FaEnvelope />
            </Link>
            <Link 
                href="https://www.linkedin.com/in/arlen-molina-423159183"
                className="text-blue-400 text-xl transition hover:scale-125"
            >
                <FaLinkedin />
            </Link>
            <Link
                href="https://github.com/seiyadragon"
                className="text-blue-400 text-xl transition hover:scale-125"
            >
                <FaGithub />
            </Link>
            <Link
                href="https://twitter.com/arlenmolina101"
                className="text-blue-400 text-xl transition hover:scale-125"
            >
                <FaTwitter />
            </Link>
            <p className="text-blue-600 text-2xl relative bottom-2">{']'}</p>
        </section>
    )
}; export default Links