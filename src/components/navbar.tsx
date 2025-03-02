import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { name: "Services", path: "/" },
        { name: "Incidents", path: "/incidents" },
    ];

    return (
        <nav className="w-full shadow-md">
            <div className="container mx-auto flex items-center justify-between pt-4 px-4">
                <h1 className="text-xl font-semibold">Service Tracker</h1>
                <div className="flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "px-4 py-2 rounded-md hover:text-muted-foreground",
                                location.pathname === item.path &&
                                    "bg-gray-200 hover:text-black text-black font-semibold",
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
