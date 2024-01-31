import { Button } from "@nextui-org/react";

const ButtonPrimary = ({btnText}) => {
    return (
        <div>
            <Button color="primary" variant="shadow">{btnText}</Button>
        </div>
    );
};

export default ButtonPrimary;