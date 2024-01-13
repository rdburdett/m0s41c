import Image from "next/image";
import { blurStyle, sizeStyle } from "./style";

export default function Logo() {
	return (
		<div id="logo" className={blurStyle}>
			{/* <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            /> */}
			<div className={sizeStyle}>M 0 S 4 1 C</div>
		</div>
	);
}
