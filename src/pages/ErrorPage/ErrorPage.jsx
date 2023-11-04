import { Link } from "react-router-dom";
import errorPage from '../../assets/ErrorPage.jpg'

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <img className="mx-auto h-96 w-96" src={errorPage} alt="" />
            <div className="text-center mt-4">
                <h2 className="text-3xl text-red-600" style={{ fontFamily: "'Macondo', 'cursive'" }}>
                    Why are you still here..!!<span className="text-slate-900"> go to your </span>
                </h2>
                <Link to={'/'} className="mt-4">
                    <button className="btn btn-primary btn-sm">Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;