import classes from "./VerticalEndpointBig.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const VerticalEndPointBig: React.FC<{ href: string; href2?: string }> = (
  props
) => {
  const router = useRouter();
  const { pathname } = router;

  const classEndpoint =
    pathname === props.href || pathname === props.href2
      ? classes["endpoint-active"]
      : classes.endpoint;

  return (
    <Link href={props.href} passHref>
      <div className={classEndpoint}>{props.children}</div>
    </Link>
  );
};

export default VerticalEndPointBig;
