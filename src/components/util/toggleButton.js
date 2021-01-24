import  { useState } from 'react';

export default function ToggleButton() {
    const [isToggledOn, setToggle] = useState(false);
    const toggle = () => {
        setToggle((prev) => !prev);
    };

    return [toggle, isToggledOn];
}
