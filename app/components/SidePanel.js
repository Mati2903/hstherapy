"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	BsCalendar3,
	BsPeopleFill,
	BsFillBoxFill,
	BsCardChecklist,
} from "react-icons/bs";
import { TfiStatsUp } from "react-icons/tfi";
import { TbMessages, TbSettingsFilled } from "react-icons/tb";

const SidePanel = () => {
	const linkStyle =
		"flex flex-col items-center justify-center active:text-white hover:text-white text-xs";
	const activeLinkStyle =
		"flex flex-col items-center justify-center text-white text-xs";

	const iconStyle = "text-xl";
	const pathname = usePathname();
	return (
		<div className="bg-slate-800 h-screen w-20 absolute left-0 top-0 px-2 py-5 flex flex-col gap-4 text-slate-400">
			<Link
				href="/calendar"
				className={pathname === "/calendar" ? activeLinkStyle : linkStyle}
			>
				<BsCalendar3 className={iconStyle} />
				Kalendarz
			</Link>
			<Link
				href="/clients"
				className={pathname === "/clients" ? activeLinkStyle : linkStyle}
			>
				<BsPeopleFill className={iconStyle} />
				Klienci
			</Link>
			<Link
				href="/products"
				className={pathname === "/products" ? activeLinkStyle : linkStyle}
			>
				<BsFillBoxFill className={iconStyle} />
				Magazyn
			</Link>
			<Link
				href="/stats"
				className={pathname === "/stats" ? activeLinkStyle : linkStyle}
			>
				<TfiStatsUp className={iconStyle} />
				Statystyki
			</Link>
			<Link
				href="/communication"
				className={pathname === "/communication" ? activeLinkStyle : linkStyle}
			>
				<TbMessages className={iconStyle} />
				Łączność
			</Link>
			<Link
				href="/services"
				className={pathname === "/services" ? activeLinkStyle : linkStyle}
			>
				<BsCardChecklist className={iconStyle} />
				Usługi
			</Link>
			<Link
				href="/settings"
				className={pathname === "/settings" ? activeLinkStyle : linkStyle}
			>
				<TbSettingsFilled className={iconStyle} />
				Ustawienia
			</Link>
		</div>
	);
};

export default SidePanel;
