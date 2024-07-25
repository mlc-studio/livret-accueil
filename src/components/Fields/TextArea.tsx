import { Fragment } from "react";

export default ({ text, ...props }: { text: string }) => {
  return (
    <>
        {text.split('\n').map((item, index) => (
            <Fragment key={index}>
                {item && <>{item}</>}
                {index !== text.split('\n').length - 1 && <br />}
            </Fragment>
        ))}
    </>
  );
}