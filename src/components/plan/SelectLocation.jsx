import React, { useState } from "react";

const users = [
    {
        id: 1,
        name: "Christina",
        username: "chris",
        img: "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
        id: 2,
        name: "David",
        username: "david",
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
        id: 3,
        name: "Alex",
        username: "alex27",
        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
        disabled: true,
    },
    {
        id: 4,
        name: "Samia",
        username: "samia_samia",
        img: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
        id: 5,
        name: "Samia",
        username: "samia_samia",
        img: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
        id: 6,
        name: "Samia",
        username: "samia_samia",
        img: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
        id: 7,
        name: "Samia",
        username: "samia_samia",
        img: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
];

const SelectLocation = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState([]);

    const toggleSelect = (user) => {
        if (selected.find((u) => u.id === user.id)) {
            setSelected(selected.filter((u) => u.id !== user.id));
        } else {
            setSelected([...selected, user]);
        }
    };

    const removeTag = (id) => {
        setSelected(selected.filter((u) => u.id !== id));
    };

    return (
        <div className="relative w-full ">
            <div
                onClick={() => setOpen(!open)}
                className="flex flex-wrap items-center gap-2 border border-gray-300 rounded-lg px-2 py-4 cursor-pointer bg-white focus-within:ring-2 focus-within:ring-blue-500"
            >
                {selected.length === 0 && (
                    <span className="text-gray-400 text-sm">Select option...</span>
                )}
                {selected.map((user) => (
                    <div
                        key={user.id}
                        className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-full px-2 py-1"
                    >
                        <img
                            src={user.img}
                            alt={user.name}
                            className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-gray-800 text-sm">{user.name}</span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                removeTag(user.id);
                            }}
                            className="ml-1 text-gray-600 hover:text-gray-900"
                        >
                            ✕
                        </button>
                    </div>
                ))}
                <svg
                    className="ml-auto w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 15 5 5 5-5m-10-6 5-5 5 5" />
                </svg>
            </div>

            {open && (
                <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-72 overflow-y-auto p-1">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            onClick={() => !user.disabled && toggleSelect(user)}
                            className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${user.disabled
                                ? "opacity-50 cursor-not-allowed"
                                : "text-gray-800"
                                }`}
                        >
                            <img
                                src={user.img}
                                alt={user.name}
                                className="w-8 h-8 rounded-full mr-2 object-cover"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">{user.name}</span>
                                <span className="text-xs text-gray-500">{user.username}</span>
                            </div>
                            {selected.find((u) => u.id === user.id) && (
                                <svg
                                    className="ml-auto w-4 h-4 text-blue-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectLocation;
