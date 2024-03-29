import { baseColor } from "../../design/colors"

export const sizeStyle = "m-10 font-semibold text-xl";
export const blurStyle = `relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[${baseColor}] after:dark:opacity-40 before:lg:h-[360px] z-[-1]`

// module.exports = [sizeStyle, blurStyle]