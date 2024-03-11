import { useState } from "react";
import ImageList from "../index";

const UserList = () => {
    const [count, setCount] = useState(ImageList);
    const newCount = count.length;
    return (
        <div>
            <div className="p-4 flex  gap-6 flex-wrap justify-center items-center ">
                {ImageList.map((items) => (
                    <NewImageList imageItems={items} key={items.Stack} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <NewCountLit newCount={newCount}>
                    The Number is box are
                </NewCountLit>
            </div>
        </div>
    );
};

function NewImageList({ imageItems }) {
    return (
        <div className="flex p-5 bg-gray-300 w-50 shadow-lg  justify-center items-center  rounded-md">
            <img
                className="pr-3 rounded-full"
                src={imageItems.photo}
                alt=""
                width={100}
            />
            <div className="px-4 ">
                <h3 className="font-bold text-1xl mb-2">{imageItems.Stack}</h3>
                <p className="text-[12px]">{imageItems.name}</p>
                <div className=" flex gap-3 pt-10">
                    <p className="bg-gray-200 px-3 rounded-full transition-colors hover:bg-slate-400 hover:ease-in delay-100">
                        {imageItems.language}
                    </p>
                    <p>{`${imageItems.language === "Laravel" ? "💖" : ""}`}</p>
                </div>
            </div>
        </div>
    );
}

function NewCountLit({ newCount, children }) {
    return (
        <h1>
          {  `${children}  ""
            ${newCount}`}
        </h1>
    );
}

export default UserList;
