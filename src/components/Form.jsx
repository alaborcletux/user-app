import { Children } from "react";
import User from "../content/User";
import UserList from "../content/UserList";

const Form = () => {
    return (
        <div>
            <User />
            <div className="flex flex-col justify-center items-center">
                <div className="flex gap-8">
                    <form action="">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-4 py-2 outline-none "
                        />
                    </form>
                    <div className="flex gap-10 ">
                        <Button>Reputation</Button>
                        <Button>New User</Button>
                        <Button>Voters</Button>
                        <Button>Editor</Button>
                    </div>
                </div>
                <div>
                    <UserList />
                </div>
            </div>
        </div>
    );
};

function Button({ children }) {
    return (
        <>
            <div>
                <button
                    className="bg-white px-6 py-2 border-red-500 rounded-md animate-pulse hover:bg-slate-200
                 hover:text-blue-800 transition ease-in delay-300 "
                >
                    {children}
                </button>
            </div>
        </>
    );
}

export default Form;
