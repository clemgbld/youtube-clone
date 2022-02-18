import classes from "./VerticalEndpoint.module.css";
import Link from "next/link";

const VerticalEndpoint: React.FC<{ path: string }> = (props) => {
  return (
    <Link href={props.path}>
      <a className={classes.endpoint}>{props.children}</a>
    </Link>
  );
};

export default VerticalEndpoint;
