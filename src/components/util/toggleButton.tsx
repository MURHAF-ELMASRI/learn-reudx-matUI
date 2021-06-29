import { useState } from 'react';

export default function ToggleButton(): [boolean, () => void] {
    const [isToggledOn, setToggle] = useState<boolean>(false);
    const toggle = () => {
        setToggle((prev) => !prev);
    };

    return [isToggledOn, toggle];
}
