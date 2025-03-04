import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { Button } from "./button";

export type NavItem = {
    name: string;
    path: string;
    active: boolean;
};

export type NavbarProps = {
    navItems: NavItem[];
    title: string;
};

const Navbar: React.FC<NavbarProps> = ({ navItems, title }) => {
    return (
        <nav className="w-full shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                <h1 className="text-xl font-semibold">{title}</h1>

                <div className="flex">
                    <div className="mx-2">
                        <ModeToggle />
                    </div>

                    {navItems.map((item) => (
                        <Link key={item.path} to={item.path}>
                            <Button
                                variant={item.active ? "default" : "outline"}
                                className="rounded-none cursor-pointer"
                            >
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
