import classes from "../../styles/ErrorPage.module.css";

const ErrorPage: React.FC = () => {
  return (
    <div className={classes.error}>
      <h1>
        Sorry The Youtube API Quotas has been reached please come back tomorrow
      </h1>
    </div>
  );
};

export default ErrorPage;
