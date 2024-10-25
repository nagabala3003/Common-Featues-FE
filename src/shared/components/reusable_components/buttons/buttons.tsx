import { Button } from "@mui/material";

const Button1 = ({ btnName }: { btnName: string }) => {
  return (
    <>
      <Button variant="contained">{btnName}</Button>
    </>
  );
};

export default Button1;
