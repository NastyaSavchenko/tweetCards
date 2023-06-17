import { ThreeDots } from "react-loader-spinner";

import { LoaderWrapp } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapp>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#5CD3A8"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapp>
  );
};
