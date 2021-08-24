export function Social(props) {
  return (
    <a
      href={props.href}
      className="transition duration-300 ease-in-out outline-none focus:outline-none focus:ring hover:text-gray-400 dark:text-gray-300 dark:hover:text-gray-400"
    >
      {props.icon}
    </a>
  );
}
