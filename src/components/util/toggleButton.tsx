import { useState } from 'react';

export default function ToggleButton(checked: boolean = false): [boolean, () => void] {
    const [isToggledOn, setToggle] = useState<boolean>(checked);
    const toggle = () => {
        setToggle((prev) => !prev);
    };

    return [isToggledOn, toggle];
}
